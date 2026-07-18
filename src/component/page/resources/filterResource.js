import React, { useEffect, useState } from "react";
import {
  propertyType1,
  propertyType2,
  propertyType3,
} from "../../../assets/allImg";

const FilterResource = ({ close }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedContentType, setSelectedContentType] = useState(null);

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
      Link: propertyType1,
    },
    {
      type: "Media",
      Link: propertyType2,
    },
    {
      type: "Case Studies",
      Link: propertyType3,
    },
  ];

  const resetFilters = () => {
    setSelectedTopic(null);
    setSelectedSort(null);
    setSelectedContentType(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [close]);

  const filterCount =
    Number(!!selectedTopic) +
    Number(!!selectedSort) +
    Number(!!selectedContentType);

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
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all duration-200 flex items-center justify-center"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>
      </div>

      {/* Content */}

      <div className="p-5 md:p-6 space-y-6 pb-40">
        {/* Content Type */}

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Content Type
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {contentTypes.map((contentType, index) => (
              <button
                key={index}
                onClick={() => setSelectedContentType(contentType.type)}
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
                    selectedContentType === contentType.type
                      ? "bg-[#A61E22] border-[#A61E22] text-white shadow-lg scale-[1.02]"
                      : "bg-white border-gray-200 text-gray-700 hover:border-[#A61E22] hover:shadow-md"
                  }
                `}
              >
                {contentType.Link ? (
                  <>
                    <img
                      src={contentType.Link}
                      alt={contentType.type}
                      className={`w-9 h-9 mb-3 object-contain ${
                        selectedContentType === contentType.type
                          ? "brightness-0 invert"
                          : ""
                      }`}
                    />

                    <span className="text-sm font-medium text-center leading-snug">
                      {contentType.type}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-semibold">All</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Topics */}

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Topics
          </h3>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(topic)}
                className={`
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
                    selectedTopic === topic
                      ? "bg-[#A61E22] border-[#A61E22] text-white shadow-md"
                      : "bg-white border-gray-300 text-gray-700 hover:border-[#A61E22] hover:text-[#A61E22]"
                  }
                `}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Sort */}

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Sort By
          </h3>

          <div className="flex flex-wrap gap-3">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedSort(option)}
                className={`
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
                    selectedSort === option
                      ? "bg-[#A61E22] border-[#A61E22] text-white shadow-md"
                      : "bg-white border-gray-300 text-gray-700 hover:border-[#A61E22] hover:text-[#A61E22]"
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

      <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-5 flex gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <button
          type="button"
          onClick={resetFilters}
          className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-200"
        >
          Reset
        </button>

        <button
          type="button"
          className="flex-1 py-3 rounded-xl bg-[#A61E22] text-white font-semibold hover:bg-[#8E1A1D] transition-all duration-200 shadow-lg"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
);
};

export default FilterResource;