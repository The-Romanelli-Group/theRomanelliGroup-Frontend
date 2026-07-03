import React, { useEffect, useState } from "react";
import DoubleRangeSlider from "./priceRange";
import { typeFilter1, typeFilter2, typeFilter3, typeFilter4, typeFilter5, typeFilter6, typeFilter7, typeFilter8 } from "../../../assets/allImg";

const bedrooms = ["Any", "1", "2", "3", "4", "5+"]
const bathrooms = ["Any", "1", "2", "3", "4", "5+"]

const PropertyTypes = [{
    type: "Residential",
    Link: typeFilter1
}, {
    type: "Residential Lease",
    Link: typeFilter2
}, {
    type: "Residential Income",
    Link: typeFilter3
}, {
    type: "Farm",
    Link: typeFilter4
}, {
    type: "Commercial Sale",
    Link: typeFilter5
}, {
    type: "Commercial Lease",
    Link: typeFilter6
}, {
    type: "Land",
    Link: typeFilter7
}]

const FilterPage = ({ close, onSave, filterVal }) => {
    const [priceRange, setPriceRange] = useState({ min: filterVal?.min || 0, max: filterVal?.max || 5000001 });
    const [areaRange, setAreaRange] = useState({ sqftMin: filterVal?.sqftMin || 0, sqftMax: filterVal?.sqftMax || 15001 });
    const [selectedBedroom, setSelectedBedroom] = useState(filterVal?.bedrooms || null);
    const [selectedBathroom, setSelectedBathroom] = useState(filterVal?.bathrooms || null);
    const [selectedProperty, setSelectedProperty] = useState(filterVal?.property || null);
    const [resetKey, setResetKey] = useState(0);

    const handlePriceChange = ({ min, max }) => {
        setPriceRange({ min, max });
    };
    const handleAreaChange = ({ min, max }) => {
        setAreaRange({ sqftMin:min, sqftMax:max });
    };
    const resetFilters = () => {
        const resetValues = {
            min: 0,
            max: 5000001,
            sqftMin: 0,
            sqftMax: 15001,
            bedrooms: null,
            bathrooms: null,
            property: null
        };
        
        setSelectedBedroom(null);
        setSelectedBathroom(null);
        setSelectedProperty(null);
        setPriceRange({ min: 0, max: 5000001 });
        setAreaRange({ sqftMin: 0, sqftMax: 15001 });
        setResetKey(prev => prev + 1);
        
        if (onSave) {
            onSave(resetValues);
        }
        close();
    };

    const saveSearch = () => {
        const filters = {
            min: priceRange.min,
            max: priceRange.max,
            sqftMin: areaRange.sqftMin,
            sqftMax: areaRange.sqftMax,    
            bedrooms: selectedBedroom,
            bathrooms: selectedBathroom,
            property: selectedProperty,
        };

        // Only include price values if user changed them from defaults
        const apiFilters = { ...filters };
        if (filters.min === 0) delete apiFilters.min;
        if (filters.max === 5000001) delete apiFilters.max;

        // send to parent
        if (onSave) {
            onSave(apiFilters);
        }
    };

    useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      close();
    }
  };

  window.addEventListener("keydown", handleEsc);

  return () => window.removeEventListener("keydown", handleEsc);
}, [close]);

const filterCount =
  Number(!!selectedBedroom) +
  Number(!!selectedBathroom) +
  Number(!!selectedProperty) +
  Number(priceRange.min > 0 || priceRange.max < 5000001) +
  Number(areaRange.sqftMin > 0 || areaRange.sqftMax < 15001);

  
    return (
     <div
  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
  onClick={close}
>
  <div
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] max-h-[90vh] overflow-y-auto"
>

    {/* Header */}
    <div className="sticky top-0 z-10 flex items-center justify-between bg-[#A61E22] px-6 py-5 rounded-t-3xl shadow-md">

     <h2 className="text-2xl md:text-3xl font-bold text-white">
  Filters
  {filterCount > 0 && (
    <span className="ml-2 text-lg font-medium text-white/80">
      ({filterCount})
    </span>
  )}
</h2>

      <button
        type="button"
        onClick={close}
        className="
          w-10
          h-10
          rounded-full
          bg-white/15
          hover:bg-white/25
          text-white
          transition-all
          duration-200
          flex
          items-center
          justify-center
        "
      >
        <span className="text-xl leading-none">&times;</span>
      </button>

    </div>

    {/* Content */}
   <div className="p-5 md:p-6 space-y-6 pb-40">

      {/* Price Range */}
      <div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Price Range
        </h3>

        <DoubleRangeSlider
          key={resetKey}
          min={priceRange.min}
          max={priceRange.max}
          onChange={handlePriceChange}
          maxRange={5000001}
        />

      </div>

      <hr className="border-gray-200" />

      {/* Bedrooms */}
      <div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Bedrooms
        </h3>

        <div className="flex flex-wrap gap-3">

          {bedrooms.map((room, index) => (

            <button
              key={index}
              onClick={() => setSelectedBedroom(room)}
              className={`
                min-w-[60px]
                rounded-full
                border
                px-5
                py-2
                text-sm
                md:text-base
                font-medium
                transition-all
                duration-200
                ${
                  selectedBedroom === room
                    ? "bg-[#A61E22] border-[#A61E22] text-white shadow-md"
                    : "bg-white border-gray-300 text-gray-700 hover:border-[#A61E22] hover:text-[#A61E22]"
                }
              `}
            >
              {room}
            </button>

          ))}

        </div>

      </div>

      <hr className="border-gray-200" />
{/* Bathrooms */}
<div>

  <h3 className="text-xl font-semibold text-gray-900 mb-3">
    Bathrooms
  </h3>

  <div className="flex flex-wrap gap-3">

    {bathrooms.map((numbers, index) => (

      <button
        key={index}
        onClick={() => setSelectedBathroom(numbers)}
        className={`
          min-w-[60px]
          rounded-full
          border
          px-5
          py-2
          text-sm
          md:text-base
          font-medium
          transition-all
          duration-200
          ${
            selectedBathroom === numbers
              ? "bg-[#A61E22] border-[#A61E22] text-white shadow-md"
              : "bg-white border-gray-300 text-gray-700 hover:border-[#A61E22] hover:text-[#A61E22]"
          }
        `}
      >
        {numbers}
      </button>

    ))}

  </div>

</div>

<hr className="border-gray-200" />

{/* Area Range */}
<div>

  <h3 className="text-xl font-semibold text-gray-900 mb-3">
    Area Range
  </h3>

  <DoubleRangeSlider
    key={resetKey}
    min={areaRange.sqftMin}
    max={areaRange.sqftMax}
    onChange={handleAreaChange}
    maxRange={15001}
  />

</div>

<hr className="border-gray-200" />

{/* Property Types */}
<div>

  <h3 className="text-xl font-semibold text-gray-900 mb-4">
    Property Type
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

    {PropertyTypes.map((property, index) => (

      <button
        key={index}
        onClick={() => setSelectedProperty(property.type)}
        className={`
          rounded-2xl
          border
          p-4
          flex
          flex-col
          items-center
          justify-center
          transition-all
          duration-200
          ${
            selectedProperty === property.type
              ? "bg-[#A61E22] border-[#A61E22] text-white shadow-lg scale-[1.02]"
              : "bg-white border-gray-200 text-gray-700 hover:border-[#A61E22] hover:shadow-md"
          }
        `}
      >

        <img
          src={property.Link}
          alt={property.type}
          className={`
            w-9
            h-9
            mb-3
            object-contain
            ${
              selectedProperty === property.type
                ? "brightness-0 invert"
                : ""
            }
          `}
        />

        <span className="text-sm font-medium text-center leading-snug">
          {property.type}
        </span>

      </button>

    ))}

  </div>

</div>

</div>

{/* Sticky Footer */}

<div className="
sticky
bottom-0
bg-white/95
backdrop-blur-md
border-t
border-gray-200
p-5
flex
gap-3
shadow-[0_-8px_24px_rgba(0,0,0,0.08)]
">

  <button
    type="button"
    onClick={resetFilters}
    className="
      flex-1
      py-3
      rounded-xl
      border
      border-gray-300
      text-gray-700
      font-semibold
      hover:bg-gray-100
      transition-all
      duration-200
    "
  >
    Reset
  </button>

  <button
    type="button"
    onClick={saveSearch}
    className="
      flex-1
      py-3
      rounded-xl
      bg-[#A61E22]
      text-white
      font-semibold
      hover:bg-[#8E1A1D]
      transition-all
      duration-200
      shadow-lg
    "
  >
    Apply Filters
  </button>

</div>

</div>
</div>
    );
};

export default FilterPage;