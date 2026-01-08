import React, { useState, useEffect, useRef } from 'react'
import DoubleRangeSlider from '../priceRange'
import { ChevronDown, Filter } from 'lucide-react';
import { usePropertySearch } from '../api/getCheckProperty';
import { useNavigate } from 'react-router-dom';
import DetailFilter from './detailFilter';
import LoadingScreen from '../../../../loading/loadingScreen';

const allowedPropertyTypes = [
  "Residential",
  "Residential Lease",
  "Residential Income",
  "Land",
  "Commercial Sale",
  "Commercial Lease",
  "Farm"
];

const Header = ({ filter, onResults }) => {
  const navigate = useNavigate()
  const priceDropdownRef = useRef(null);
  const autocompleteService = useRef(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0)
  const [filterOpen, setFilterOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const placesService = useRef(null);
  const [localFilters, setLocalFilters] = useState({
    searchCity: filter?.searchCity || '',
    selectedOption: filter?.selectedOption || 'Buy',
    listingType: filter?.listingType || filter?.selectedOption || 'Buy',
    property: filter?.property || null,
    min: filter?.min || 0,
    max: filter?.max || 5000001,
    sqftMin: filter?.sqftMin || 0,
    sqftMax: filter?.sqftMax || 15001,
    bedrooms: filter?.bedrooms || null,
    bathrooms: filter?.bathrooms || null,
    city: filter?.city || '',
    state: filter?.state || '',
    country: filter?.country || 'US',
    street: filter?.street || '',
    streetNumber: filter?.streetNumber || '',
    postalCode: filter?.postalCode || ''
  });

  const extractAddressComponents = (address) => {
  const getLong = (type) =>
    address.address_components?.find(c => c.types.includes(type))?.long_name || "";

  const getShort = (type) =>
    address.address_components?.find(c => c.types.includes(type))?.short_name || "";

  return {
    streetNumber: getLong("street_number"),
    street: getLong("route"),
    city: getLong("locality") || getLong("sublocality") || "",
    state: getShort("administrative_area_level_1"),
    country: getShort("country"),
    postalCode: getLong("postal_code"),
  };
};

const parseWithGoogle = (searchText) => {
  return new Promise((resolve) => {
    if (!placesService.current) {
      resolve({ unparsedAddress: searchText });
      return;
    }
    
    const request = {
      query: searchText,
      fields: ['place_id']
    };
    
    placesService.current.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
        placesService.current.getDetails(
          { placeId: results[0].place_id },
          (place, detailStatus) => {
            if (detailStatus === window.google.maps.places.PlacesServiceStatus.OK && place) {
              const parsed = extractAddressComponents(place);
              resolve(parsed);
            } else {
              resolve({ unparsedAddress: searchText });
            }
          }
        );
      } else {
        resolve({ unparsedAddress: searchText });
      }
    });
  });
};

  const { checkProperty, error } = usePropertySearch();

  // Sync with parent filter changes
  useEffect(() => {
    setLocalFilters({
      searchCity: filter?.searchCity || '',
      selectedOption: filter?.selectedOption || 'Buy',
      listingType: filter?.listingType || filter?.selectedOption || 'Buy',
      property: filter?.property || null,
      min: filter?.min || 0,
      max: filter?.max || 5000001,
      sqftMin: filter?.sqftMin || 0,
      sqftMax: filter?.sqftMax || 15001,
      bedrooms: filter?.bedrooms || null,
      bathrooms: filter?.bathrooms || null,
      city: filter?.city || '',
      state: filter?.state || '',
      country: filter?.country || 'US',
      street: filter?.street || '',
      streetNumber: filter?.streetNumber || '',
      postalCode: filter?.postalCode || ''
    });
  }, [filter]);

  useEffect(() => {
    const initializeGoogleServices = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        placesService.current = new window.google.maps.places.PlacesService(document.createElement("div"));
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = initializeGoogleServices;
      document.head.appendChild(script);
    } else {
      initializeGoogleServices();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (priceDropdownRef.current && !priceDropdownRef.current.contains(event.target)) {
        if (dropdownOpen === 'price') {
          setDropdownOpen('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) return oldProgress;
        return oldProgress + 5;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? '' : dropdown);
  };

  const updateFilter = (key, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePriceChange = ({ min, max }) => {
    setLocalFilters(prev => ({ ...prev, min, max }));
  };

  const handlePriceApply = async () => {
    const loc =   { city: localFilters.city, state: localFilters.state, country: localFilters.country } 
    const updatedFilters = { ...localFilters, ...loc, listingType: localFilters.selectedOption };
    setDropdownOpen('');
    setLoading(true);
    
    // Filter out default No min/No max values for API
    const apiFilters = { ...updatedFilters };
    if (updatedFilters.min === 0) delete apiFilters.min;
    if (updatedFilters.max === 5000001) delete apiFilters.max;
    if (updatedFilters.sqftMin === 0) delete apiFilters.sqftMin;
    if (updatedFilters.sqftMax === 15001) delete apiFilters.sqftMax;
    
    const data = await checkProperty(apiFilters);
    setLoading(false);
    if (data) {
      navigate(`/details/properties`, { state: { data, filters: updatedFilters } });
    }
  };

  const handleBuyRentChange = (option) => {
    const updatedFilters = { ...localFilters, selectedOption: option, listingType: option };
    setLocalFilters(updatedFilters);
    setDropdownOpen('');
    if (onResults) {
      onResults(updatedFilters);
    }
  };

  const handlePropertyTypeChange = async (propertyType) => {
    const loc = { city: localFilters.city, state: localFilters.state, country: localFilters.country }
    const updatedFilters = { ...localFilters, property: propertyType, ...loc, listingType: localFilters.selectedOption };
    setLocalFilters(updatedFilters);
    setDropdownOpen('');
    setLoading(true);
    const data = await checkProperty(updatedFilters);
    setLoading(false);
    if (data) {
      navigate(`/details/properties`, { state: { data, filters: updatedFilters } });
    }
  };

  const directSearch = async () => {
    if (!localFilters.searchCity) {
      alert("Please enter a location");
      return;
    }

    let finalFilters;
    
    if (!localFilters.city) {
      // Use Google Places to parse the search text
      const parsed = await parseWithGoogle(localFilters.searchCity);
      finalFilters = {
        ...localFilters,
        ...parsed,
        listingType: localFilters.selectedOption
      };
    } else {
      // Use already parsed data
      finalFilters = {
        ...localFilters,
        listingType: localFilters.selectedOption
      };
    }

    setDropdownOpen('');
    setLoading(true);
    const data = await checkProperty(finalFilters);
    setLoading(false);
    
    if (data) {
      navigate(`/details/properties`, { state: { data, filters: finalFilters } });
    }
  };

  const filteredSearch = async () => {
    setDropdownOpen('');
    if (onResults) {
      onResults(localFilters);
    }
  };

  const handleFilterSave = async (values) => {
    const loc =  { city: localFilters.city, state: localFilters.state, country: localFilters.country } 
    // const loc = parseLocation(localFilters.searchCity);
    const f = { ...values, searchCity: localFilters.searchCity, selectedOption: localFilters.selectedOption, ...loc, listingType: localFilters.selectedOption }
    setLocalFilters(f)
    setFilterOpen(false);
    
    if (!loc.city) return;
    
    setLoading(true)
    
    // Filter out default No min/No max values for API
    const apiFilters = { ...f };
    if (f.min === 0) delete apiFilters.min;
    if (f.max === 5000001) delete apiFilters.max;
    if (f.sqftMin === 0) delete apiFilters.sqftMin;
    if (f.sqftMax === 15001) delete apiFilters.sqftMax;
    
    const data = await checkProperty(apiFilters);
    setLoading(false)
    if (data) {
      navigate(`/details/properties`, { state: { data, filters: f } });
    }
  };
  return (
    <div className="bg-white border-b border-gray-200">
      {loading && <LoadingScreen progress={progress} />}
      <div className="flex items-center py-4">
        <div className="flex-1 flex space-x-2 w-full">
          <div className="relative w-full max-w-xl">
            <div className="flex">
              <input
                type="text"
                className="flex-1 relative bg-white border border-gray-300 p-3 pl-4 text-black focus:outline-none focus:border-red-500"
                value={localFilters.searchCity}
                onChange={(e) => {
                  const value = e.target.value;
                  updateFilter('searchCity', value);
                  
                  // Clear location data when search text changes
                  if (value !== localFilters.searchCity) {
                    setLocalFilters(prev => ({
                      ...prev,
                      searchCity: value,
                      city: '',
                      state: '',
                      country: '',
                      street: '',
                      streetNumber: '',
                      postalCode: ''
                    }));
                  }
                  
                  if (value.length > 2 && autocompleteService.current) {
                    autocompleteService.current.getPlacePredictions(
                      {
                        input: value,
                        componentRestrictions: { country: 'us' }
                      },
                      (predictions, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                          setSuggestions(predictions);
                          setShowDropdown(true);
                        } else {
                          setSuggestions([]);
                          setShowDropdown(false);
                        }
                      }
                    );
                  } else {
                    setSuggestions([]);
                    setShowDropdown(false);
                  }
                }}
                onBlur={() => {
                  setTimeout(() => setShowDropdown(false), 100);
                }}
                onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
                placeholder="Enter location..."
              />
              
              {showDropdown && suggestions.length > 0 && (
                <div className="dropdown-container absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto rounded-b-lg">
                  {suggestions.map((suggestion, index) => {
                    const getLocationType = (types) => {
                      if (types?.includes('locality')) return 'City';
                      if (types?.includes('administrative_area_level_2')) return 'County';
                      if (types?.includes('administrative_area_level_1')) return 'State';
                      if (types?.includes('neighborhood')) return 'Neighborhood';
                      if (types?.includes('sublocality')) return 'Area';
                      if (types?.includes('postal_code')) return 'ZIP Code';
                      if (types?.includes('route')) return 'Street';
                      return types?.[0] || 'Location';
                    };

                    return (
                      <div
                        key={suggestion.place_id || index}
                        className="flex items-center  text-left px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"        
                                 onMouseDown={(e) => {
                           e.preventDefault();
                    if(!placesService.current) return;
  placesService.current.getDetails(
    { placeId: suggestion.place_id },
    (place) => {
      if (!place) return;

      const parsed = extractAddressComponents(place);
      setLocalFilters({
        ...localFilters,
        searchCity: suggestion.description,
        city: parsed.city,
        state: parsed.state,
        country: parsed.country,
        street: parsed.street,
        streetNumber: parsed.streetNumber,
        postalCode: parsed.postalCode
      });

      setSuggestions([]);
      setShowDropdown(false);
    }
  );
}}

                      >
                        {/* Map Icon */}
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                          <svg 
                            className="w-4 h-4 text-gray-600" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        {/* Location Details */}
                        <div className="flex-1 min-w-0 font-dmsans">
                          <div className="text-xs font-medium text-gray-900 truncate">
                            {suggestion.description}
                          </div>
                          <div className="text-[10px] text-gray-500 font-light font-playfair">
                            {getLocationType(suggestion.types || [])}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <button
                onClick={directSearch}
                className="bg-red-600 absolute right-1 top-1 bottom-1 hover:bg-red-700 text-white px-6 py-3 font-medium flex items-center"
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>

          <div className="flex items-center ml-4 space-x-2">
            <div className="relative hidden xl:flex">
  <button
    onClick={() => toggleDropdown('sale')}
    className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
  >
    <span className="text-sm">For {localFilters?.selectedOption==='Buy'? 'Sale':'Rent'}</span>
    <ChevronDown size={16} />
  </button>

  {dropdownOpen === 'sale' && (
    <div className="absolute top-full left-0 bg-white border text-gray-900 border-gray-300 shadow-lg z-10 w-40">

      <div className="py-1">

    <label className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer">
  <input
    type="radio"
    name="buyRent"
    value="Buy"
    className="h-4 w-4"
    checked={localFilters?.selectedOption === "Buy"}
    onChange={() => handleBuyRentChange("Buy")}
  />
  <span>For Sale</span>
</label>

<label className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 cursor-pointer">
  <input
    type="radio"
    name="buyRent"
    value="Rent"
    className="h-4 w-4"
    checked={localFilters?.selectedOption === "Rent"}
    onChange={() => handleBuyRentChange("Rent")}
  />
  <span>For Rent</span>
</label>


      </div>
    </div>
  )}
</div>


            <div className="relative hidden xl:flex" ref={priceDropdownRef}>
              <button
                onClick={() => toggleDropdown('price')}
                className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
              >
                <span className="text-sm">Price</span>
                <ChevronDown size={16} />
              </button>
              {dropdownOpen === 'price' && (
                <div className="absolute w-[300px] mx-2 my-2 px-2 bg-white border text-gray-900 border-gray-300 shadow-lg z-10">
                  <DoubleRangeSlider
                    min={localFilters.min}
                    max={localFilters.max}
                    onChange={handlePriceChange}
                    maxRange={5000001}
                  />
                  <button 
                    onClick={handlePriceApply}
                    className='bg-red-600 text-white rounded-3xl px-2 py-2 w-full mb-2'
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            <div className="relative hidden xl:flex">
              <button
                onClick={() => toggleDropdown('type')}
                className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
              >
                <span className="text-sm">
                  {localFilters.property || "Property type"}
                </span>
                <ChevronDown size={16} />
              </button>
              {dropdownOpen === 'type' && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-10 w-44">
                  <div className="py-1 text-gray-900">
                    {allowedPropertyTypes.map((item, index) => (
                     <label
      key={index}
      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
    >
      <input
        type="radio"
        name="propertyType"
        value={item}
        className="h-4 w-4"
        checked={localFilters?.property === item}
        onChange={() => handlePropertyTypeChange(item)}
      />
      <span>{item}</span></label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => { setFilterOpen(true) }}
              className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
            >
              <span className="text-sm">Filter</span>
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className="ml-6 hidden xl:flex">
          <button
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-sm font-medium"
            onClick={filteredSearch}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Save search'}
          </button>
        </div>
      </div>

      {filterOpen && <DetailFilter close={() => { setFilterOpen(false) }} onSave={handleFilterSave} filterVal={localFilters} />}
    </div>
  );
};

export default Header;