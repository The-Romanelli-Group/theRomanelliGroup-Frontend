import React, { useEffect, useState } from 'react'
import FilterResource from './filterResource'
import SideModal from '../home/sideModal';

const FirstPageResource = () => {
  const [filterOpen, setFilterOpen] = useState(false)
  const [placeholder, setPlaceholder] = useState("Enter city");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 640) {
        setPlaceholder("Search by keyword, category, or topic...");
      } else {
        setPlaceholder("Search by keyword");
      }
    };

    updatePlaceholder(); // Set initial placeholder
    window.addEventListener("resize", updatePlaceholder); // Update on resize

    return () => window.removeEventListener("resize", updatePlaceholder); // Cleanup
  }, []);
 return (
  <section className="relative py-10 md:py-16 lg:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        
        <h1 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">
          Insights, Tips, and Stories to Empower Your{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Real Estate Journey
          </span>
        </h1>

        <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300 max-w-2xl mx-auto">
          Explore our collection of articles, videos, and expert advice
          curated to help you buy smarter, sell confidently, and stay ahead
          of the Central Ohio real estate market.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-3xl mx-auto mt-8 md:mt-12">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[28px] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          <div className="relative">
            <input
              className="
                w-full
                h-12 md:h-16
                bg-white/95
                backdrop-blur-md
                rounded-2xl
                pl-5
                pr-44
                md:pr-52
                text-base
                md:text-lg
                text-gray-900
                placeholder:text-gray-400
                border
                border-white/30
                shadow-2xl
                focus:outline-none
                focus:ring-2
                focus:ring-[#A61E22]
                transition-all
                duration-300
              "
              placeholder={placeholder}
            />

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button
                onClick={() => setFilterOpen(true)}
                className="
                  h-9
                  md:h-12
                  px-4
                  bg-white
                  hover:bg-gray-100
                  text-gray-800
                  rounded-xl
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                "
              >
                Filter

                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="12.1367"
                    x2="20"
                    y2="12.1367"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    y1="3.24609"
                    x2="20"
                    y2="3.24609"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11.5"
                    y="0.941406"
                    width="5"
                    height="4.33333"
                    stroke="currentColor"
                  />
                  <rect
                    x="3.5"
                    y="9.83203"
                    width="5"
                    height="4.33333"
                    stroke="currentColor"
                  />
                </svg>
              </button>

              <button
                className="
                  h-9
                  md:h-12
                  px-5
                  bg-[#A61E22]
                  hover:bg-[#8d181b]
                  text-white
                  rounded-xl
                  transition-all
                  duration-300
                "
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
      <FilterResource close={() => setFilterOpen(false)} />
    )}
  </section>
);
}

export default FirstPageResource