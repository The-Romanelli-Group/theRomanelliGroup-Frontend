import React, { useEffect, useState, useRef } from "react";
import FilterPage from "./filter";
import { useNavigate } from "react-router-dom";
import { usePropertySearch } from "./api/getCheckProperty";
import LoadingScreen from "../../../loading/loadingScreen";
import SideModal from "../home/sideModal";
import FilterIcon from "../../../assets/images/illustrations/Filter.svg";

const FirstPageProperties = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const placesService = useRef(null);
  const [placeholder, setPlaceholder] = useState("Enter city");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const autocompleteService = useRef(null);
  const inputRef = useRef(null);

  const [filters, setFilters] = useState({
    min: 0,
    max: 5000001,
    sqftMin: 0,
    sqftMax: 15001,
    bedrooms: null,
    bathrooms: null,
    property: null,
    city: "",
    state: "",
    country: "",
    street: "",
    streetNumber: "",
    postalCode: "",
    searchCity: "",
    selectedOption: "Buy"
  });

  const navigate = useNavigate();
  const { checkProperty } = usePropertySearch();
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
    
    // Use Places Text Search instead of Geocoding
    const request = {
      query: searchText,
      fields: ['place_id']
    };
    
    placesService.current.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
        // Get place details to extract address components
        placesService.current.getDetails(
          { placeId: results[0].place_id },
          (place, detailStatus) => {
            if (detailStatus === window.google.maps.places.PlacesServiceStatus.OK && place) {
              const parsed = extractAddressComponents(place);
              console.log('Google parsed:', parsed);
              resolve(parsed);
            } else {
              resolve({ unparsedAddress: searchText });
            }
          }
        );
      } else {
        console.log('Places search failed:', status);
        resolve({ unparsedAddress: searchText });
      }
    });
  });
};

  // --------------------------------------
  // GOOGLE AUTOCOMPLETE SETUP
  // --------------------------------------
  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 640) {
        setPlaceholder("Enter city, ZIP code, or neighborhood...");
      } else {
        setPlaceholder("Enter city");
      }
    };

    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);

    const initializeGoogleServices = () => {
      if (window.google) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        placesService.current = new window.google.maps.places.PlacesService(document.createElement("div"));
      }
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = initializeGoogleServices;
      document.head.appendChild(script);
    } else {
      initializeGoogleServices();
    }

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  // --------------------------------------
  // FILTER SAVE HANDLER
  // --------------------------------------
  const handleFilterSave = async (values) => {
    const loc = {city: filters.city, state: filters.state, country: filters.country } 
    const finalFilters = {
      ...filters,
      ...values,
      city: loc.city,
      state: loc.state,
      country: loc.country,
      listingType: filters.selectedOption
    };

    setFilters(finalFilters);
    setFilterOpen(false);

    if (!loc.city) return;

    setLoading(true);
    const data = await checkProperty(finalFilters);
    setLoading(false);

    if (data) {
      navigate(`/details/properties`, { state: { data, filters: finalFilters } });
    }
  };

  // --------------------------------------
  // PROGRESS BAR ANIMATION
  // --------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => (old >= 90 ? old : old + 5));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading && <LoadingScreen progress={progress} />}

      <div className="relative z-10 container px-4 sm:px-5 py-10 md:py-24 mx-auto font-dmsans">
        {/* Heading */}
       <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mx-auto leading-tight">
  Find Your
  <span className="block font-playfair italic">
    Next Home
  </span>
</h1>

<p className="mt-5 text-base md:text-xl text-white/80 max-w-2xl mx-auto text-center leading-relaxed">
  Search by city, neighborhood, ZIP code, or address across Central Ohio's
  latest MLS listings.
</p>
       
      <div className="max-w-4xl mx-auto mt-6">

  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 md:px-8 md:py-6 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

    {/* Buy / Rent */}
    <div className="flex justify-center mb-5">

      <div className="inline-flex bg-white rounded-full p-1 shadow-lg">

        <button
          className={`px-7 md:px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            filters.selectedOption === "Buy"
              ? "bg-[#A61E22] text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() =>
            setFilters((prev) => ({ ...prev, selectedOption: "Buy" }))
          }
        >
          Buy
        </button>

        <button
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            filters.selectedOption === "Rent"
              ? "bg-[#A61E22] text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() =>
            setFilters((prev) => ({ ...prev, selectedOption: "Rent" }))
          }
        >
          Rent
        </button>

      </div>

    </div>

    {/* Search Input */}
    <div className="relative w-full">

      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-5.2-5.2m2.2-5.3a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        ref={inputRef}
        className="w-full h-12 md:h-14 md:h-[72px] bg-white/95 backdrop-blur-md rounded-2xl pl-14 pr-28 md:pr-36 text-base md:text-lg text-gray-900 border border-white/30 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#A61E22]"
        placeholder={placeholder}
        value={filters.searchCity}
        onChange={(e) => {
          const value = e.target.value;
          setFilters({ ...filters, searchCity: value });

          if (value.length > 2 && autocompleteService.current) {
            autocompleteService.current.getPlacePredictions(
              {
                input: value,
                componentRestrictions: { country: "us" }
              },
              (predictions, status) => {
                if (
                  status ===
                    window.google.maps.places.PlacesServiceStatus.OK &&
                  predictions
                ) {
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
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
        onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
      />

      {/* Suggestions Dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-xl z-50 max-h-56 overflow-y-auto rounded-2xl mt-2">

          {suggestions.map((s) => {

            const getLocationType = (types) => {
              if (types?.includes("locality")) return "City";
              if (types?.includes("administrative_area_level_2")) return "County";
              if (types?.includes("administrative_area_level_1")) return "State";
              if (types?.includes("neighborhood")) return "Neighborhood";
              if (types?.includes("sublocality")) return "Area";
              if (types?.includes("postal_code")) return "ZIP Code";
              if (types?.includes("route")) return "Street";
              return types?.[0] || "Location";
            };

            return (

              <div
                key={s.place_id}
                className="flex items-center text-left px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                onMouseDown={() => {
                  if (!placesService.current) return;

                  placesService.current.getDetails(
                    { placeId: s.place_id },
                    (place) => {

                      if (!place) return;

                      const parsed = extractAddressComponents(place);

                      setFilters(prev => ({
                        ...prev,
                        searchCity: s.description,
                        city: parsed.city,
                        state: parsed.state,
                        country: parsed.country,
                        street: parsed.street,
                        streetNumber: parsed.streetNumber,
                        postalCode: parsed.postalCode
                      }));

                      setSuggestions([]);
                      setShowDropdown(false);

                    }
                  );
                }}
              >

                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">

                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>

                </div>

                <div className="flex-1 min-w-0">

                  <div className="font-medium text-gray-900 truncate">
                    {s.description}
                  </div>

                  <div className="text-sm text-gray-500">
                    {getLocationType(s.types || [])}
                  </div>

                </div>

              </div>

            );

          })}

        </div>
      )}

      {/* Buttons */}

      <div className="absolute right-2 top-2 bottom-2 flex items-center gap-3">

        <button
  onClick={() => setFilterOpen(true)}
  className="w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-all duration-300"
  aria-label="Open filters"
>
  <img
    src={FilterIcon}
    alt="Filters"
    className="w-5 h-5 md:w-6 md:h-6"
  />
</button>

        <button
         className="h-12 md:h-[56px] bg-[#A61E22] hover:bg-[#8d181b] text-white px-7 md:px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
          onClick={async () => {

            if (!filters.searchCity) {
              alert("Please enter a city");
              return;
            }

            let finalFilters;

            if (!filters.city) {

              const parsed = await parseWithGoogle(filters.searchCity);

              finalFilters = {
                ...filters,
                ...parsed,
                listingType: filters.selectedOption
              };

            } else {

              finalFilters = {
                ...filters,
                listingType: filters.selectedOption
              };

            }

            setLoading(true);

            const data = await checkProperty(finalFilters);

            setLoading(false);

            if (data) {

              navigate("/details/properties", {
                state: {
                  data,
                  filters: finalFilters
                }
              });

            }

          }}
        >
          Search
        </button>

      </div>

    </div>

  </div>


</div>
</div>

      <SideModal />

      {filterOpen && (
        <FilterPage
          close={() => setFilterOpen(false)}
          onSave={handleFilterSave}
          filterVal={filters}
        />
      )}
    </div>
  );
};

export default FirstPageProperties;