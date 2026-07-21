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
  <section className="py-8 md:py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Heading */}

     <div
  className="max-w-3xl mx-auto text-center"
  style={{
    background: "red",
    minHeight: "300px",
    position: "relative",
    zIndex: 9999,
  }}
>

        <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
          RESOURCES
        </p>

        <h1 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">
          Insights, Tips, and Stories to Empower Your{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Real Estate Journey
          </span>
        </h1>

        <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300 max-w-2xl mx-auto">
          Explore our collection of articles, videos, expert advice, and market
          insights designed to help you buy smarter, sell confidently, and stay
          ahead of the Central Ohio real estate market.
        </p>

      </div>

      {/* Search */}

      <div className="max-w-4xl mx-auto mt-6 md:mt-10">

        <div className="rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-xl p-4 md:p-5 shadow-xl">

          <div className="flex flex-col md:flex-row gap-3">

            <input
              className="
                flex-1
                h-14
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-5
                text-[15px]
                md:text-base
                text-gray-900
                placeholder:text-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#A61E22]
                transition-all
                duration-300
              "
              placeholder={placeholder}
            />

            <div className="flex gap-3">

              <button
                onClick={() => setFilterOpen(true)}
                className="
                  h-14
                  px-6
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  text-gray-800
                  font-medium
                  hover:border-[#A61E22]
                  hover:text-[#A61E22]
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                "
              >
                

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
                  h-14
                  px-8
                  rounded-2xl
                  bg-[#A61E22]
                  text-white
                  font-semibold
                  shadow-lg
                  hover:bg-[#8E1A1D]
                  hover:shadow-xl
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