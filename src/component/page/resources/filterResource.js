import React, { useState } from "react";
import {
  propertyType1,
  propertyType2,
  propertyType3,
} from "../../../assets/allImg";

const FilterResource = ({ close }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const topics = [
    "Home Buying Tips",
    "Market Trends",
    "Seller Resources",
    "Real Estate Investments",
    "Neighborhood Insights",
    "Luxury Properties",
  ];

  const sortOptions = [
    "All",
    "Latest First",
    "Oldest First",
  ];

  const contentTypes = [
    {
      type: "All",
    },
    {
      type: "Blog Posts",
      link: propertyType1,
    },
    {
      type: "Instagram Reels",
      link: propertyType2,
    },
    {
      type: "Case Studies",
      link: propertyType3,
    },
  ];

  const resetFilters = () => {
    setSelectedTopic(null);
    setSelectedSort(null);
    setSelectedType(null);
  };

return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-5">

    <div className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[#171010] shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

        <div>
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#A61E22]">
            Resources
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Filter Resources
          </h2>
        </div>

        <button
          onClick={close}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#A61E22] hover:text-white"
        >
          ✕
        </button>

      </div>

      {/* Body */}

      <div className="space-y-8 p-6">

        {/* Content Type */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Content Type
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {contentTypes.map((property, index) => (

              <button
                key={index}
                onClick={() => setSelectedType(property.type)}
                className={`
                  rounded-2xl
                  border
                  p-4
                  transition-all
                  duration-300
                  flex
                  flex-col
                  items-center
                  justify-center
                  ${
                    selectedType === property.type
                      ? "border-[#A61E22] bg-[#A61E22]/20"
                      : "border-white/10 bg-white/5 hover:border-[#A61E22]/60"
                  }
                `}
              >

                {property.link ? (
                  <>
                    <img
                      src={property.link}
                      alt={property.type}
                      className="mb-3 h-10 w-10 object-contain"
                    />

                    <span className="text-center text-sm font-medium text-white">
                      {property.type}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-semibold text-white">
                    All
                  </span>
                )}

              </button>

            ))}

          </div>

        </div>

        {/* Topics */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Topics
          </h3>

          <div className="flex flex-wrap gap-3">

            {topics.map((topic, index) => (

              <button
                key={index}
                onClick={() => setSelectedTopic(topic)}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    selectedTopic === topic
                      ? "bg-[#A61E22] text-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-[#A61E22]"
                  }
                `}
              >
                {topic}
              </button>

            ))}

          </div>

        </div>

        {/* Sort */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Sort By
          </h3>

          <div className="flex flex-wrap gap-3">

            {sortOptions.map((option, index) => (

              <button
                key={index}
                onClick={() => setSelectedSort(option)}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    selectedSort === option
                      ? "bg-[#A61E22] text-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-[#A61E22]"
                  }
                `}
              >
                {option}
              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-col-reverse gap-3 border-t border-white/10 px-6 py-5 sm:flex-row sm:justify-end">

        <button
          onClick={resetFilters}
          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-[#A61E22]"
        >
          Reset
        </button>

        <button
          className="rounded-full bg-[#A61E22] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#8E1A1D]"
        >
          Apply Filters
        </button>

      </div>

    </div>

  </div>
);
};

export default FilterResource;