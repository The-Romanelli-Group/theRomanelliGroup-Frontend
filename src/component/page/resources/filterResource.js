import React, { useState } from "react";
import { propertyType1, propertyType2, propertyType3 } from "../../../assets/allImg";

const FilterResource = ({ close }) => {
    const handlePriceChange = ({ min, max }) => {
        // console.log(`Min price: $${min}, Max price: $${max}`);
    };
    const [selectedBedroom, setSelectedBedroom] = useState(null);
    const [selectedBathroom, setSelectedBathroom] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const bedrooms = ["Home Buying Tips", "Market Trends", "Seller Resources", "Real Estate Investments", "Neighborhood Insights", "Luxury Properties"]
    const bathrooms = ["All", "Latest FIrst", "Oldest First"]

    const PropertyTypes = [{
        type: "All",

    }, {
        type: "Blog Posts",
        Link: propertyType1
    },
    {
        type: "Media",
        Link:propertyType2
    },
    {
        type: "Case Studies",
        Link: propertyType3
    }
    ]

    const resetFilters = () => {
        setSelectedBedroom(null);
        setSelectedBathroom(null);
        setSelectedProperty(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="p-4 text-2xl font-bold text-left relative bg-red-900 text-white flex items-center justify-between">
                    <span>Filters</span>
                    <button
                        type="button"
                        className="w-6 h-6 flex items-center justify-center bg-black text-white hover:text-gray-300"
                        onClick={close}
                    >
                        <span aria-hidden="true" className="font-normal text-sm">
                            X
                        </span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                    {/* Property Types */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Property types</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {PropertyTypes.map((property, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProperty(property.type)}
                                    className={`rounded border flex flex-col items-center justify-center p-2 ${selectedProperty === property.type
                                            ? "bg-black text-white"
                                            : "border-gray-300 text-gray-700"
                                        }`}
                                >
                                   {property.Link ? (
                                    <>
                                        <img
                                            src={property.Link}
                                            alt={property.type}
                                            className="mb-2 object-contain"
                                        />
                                        <span className="text-xs md:text-sm text-center">{property.type}</span></>
                                    ) : (
                                        <div className="text-gray-800 mb-2 flex items-center justify-center text-xl font-semibold">
                                            {property.type === "All" ? "All" : ""}
                                        </div>
                                    )}
                                  
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr className="my-4 border-gray-200" />

                    {/* Bedrooms */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Topics</h2>
                        <div className="flex flex-wrap gap-2">
                            {bedrooms.map((room, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedBedroom(room)}
                                    className={`rounded border py-1 px-3 text-sm md:px-4 md:text-base ${selectedBedroom === room
                                            ? "bg-black text-white"
                                            : " bg-gray-200 text-black"
                                        }`}
                                >
                                    {room}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr className="my-4 border-gray-200" />

                    {/* Bathrooms */}
                    <div >
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">By Date</h2>
                        <div className="flex flex-wrap gap-2">
                            {bathrooms.map((numbers, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedBathroom(numbers)}
                                    className={`rounded border py-1 px-3 text-sm md:px-4 md:text-base ${selectedBathroom === numbers
                                            ? "bg-black text-white"
                                            : "border-gray-300 text-gray-700"
                                        }`}
                                >
                                    {numbers}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 mt-16 flex justify-between border-t">
                    <button
                        type="button"
                        className="py-2 px-4 bg-gray-200 text-black rounded"
                        onClick={resetFilters}
                    >
                        Reset Filter
                    </button>
                    <button
                        type="button"
                        className="py-2 px-4 bg-black text-white rounded"
                    >
                        Save Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterResource;