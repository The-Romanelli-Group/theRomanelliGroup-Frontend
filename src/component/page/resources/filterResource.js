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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-5">

    <div className="w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#171010] shadow-[0_25px_80px_rgba(0,0,0,.45)]">

      {/* Header */}

      <div className="border-b border-white/10 px-7 py-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
              RESOURCE FILTERS
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Find the Right Content
            </h2>

            <p className="mt-2 text-gray-400 leading-6 max-w-lg">
              Filter articles, videos, guides and market updates to quickly
              discover the resources most relevant to you.
            </p>

          </div>

          <button
            onClick={close}
            className="
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/5
              text-gray-300
              transition-all
              duration-300
              hover:bg-[#A61E22]
              hover:border-[#A61E22]
              hover:text-white
            "
          >
            ✕
          </button>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-10 p-7">

        {/* Content Type */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Content Type
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {contentTypes.map((property, index) => (

              <button
                key={index}
                onClick={() => setSelectedType(property.type)}
                className={`
                  rounded-[24px]
                  border
                  p-6
                  transition-all
                  duration-300
                  flex
                  flex-col
                  items-center
                  justify-center
                  hover:-translate-y-1
                  ${
                    selectedType === property.type
                      ? "border-[#A61E22] bg-[#A61E22]/15 shadow-lg"
                      : "border-white/10 bg-white/5 hover:border-[#A61E22]/50"
                  }
                `}
              >

                {property.link ? (

                  <>
                    <img
                      src={property.link}
                      alt={property.type}
                      className="w-12 h-12 object-contain mb-4"
                    />

                    <span className="text-white font-semibold text-sm text-center">
                      {property.type}
                    </span>

                  </>

                ) : (

                  <span className="text-white font-semibold text-lg">
                    All
                  </span>

                )}

              </button>

            ))}

          </div>

        </div>

        {/* Topics */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Topics
          </h3>

          <div className="flex flex-wrap gap-3">

            {topics.map((topic, index) => (

              <button
                key={index}
                onClick={() => setSelectedTopic(topic)}
                className={`
                  rounded-full
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    selectedTopic === topic
                      ? "bg-[#A61E22] text-white shadow-lg"
                      : "border border-white/10 bg-white/5 text-gray-300 hover:border-[#A61E22]"
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

          <h3 className="text-xl font-semibold text-white mb-5">
            Sort By
          </h3>

          <div className="flex flex-wrap gap-3">

            {sortOptions.map((option, index) => (

              <button
                key={index}
                onClick={() => setSelectedSort(option)}
                className={`
                  rounded-full
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    selectedSort === option
                      ? "bg-[#A61E22] text-white shadow-lg"
                      : "border border-white/10 bg-white/5 text-gray-300 hover:border-[#A61E22]"
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

      <div className="border-t border-white/10 px-7 py-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-4">

        <button
          onClick={resetFilters}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-7
            py-3
            text-white
            font-semibold
            transition-all
            duration-300
            hover:border-[#A61E22]
          "
        >
          Reset Filters
        </button>

        <button
          className="
            rounded-full
            bg-[#A61E22]
            px-8
            py-3
            text-white
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#8d181b]
            hover:shadow-xl
          "
        >
          Apply Filters
        </button>

      </div>

    </div>

  </div>
);
};

export default FilterResource;