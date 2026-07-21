import React, { useEffect, useState } from 'react'
import FilterResource from './filterResource'
import SideModal from '../home/sideModal';
import FilterIcon from "../../../assets/images/illustrations/Filter.svg";

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

     {/* Header */}

<div className="max-w-3xl mx-auto text-center">

  <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
    RESOURCE CENTER
  </p>

  <h1 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">

    Insights, Tips, and Stories to Empower Your{" "}

    <span className="font-playfair italic font-normal text-[#A61E22]">
      Real Estate Journey
    </span>

  </h1>

  <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300">

    Explore our collection of articles, videos, expert advice, and market
    insights designed to help you buy smarter, sell confidently and stay ahead
    of the Central Ohio real estate market.

  </p>

</div>
      {/* Search */}

      <div className="max-w-4xl mx-auto mt-8 md:mt-12">

        <div className="bg-white/10
backdrop-blur-2xl
border
border-white/10
rounded-[28px]
shadow-xl
p-5 md:p-7">

        <div className="flex flex-col md:flex-row gap-4">

            <input
  className="
    flex-1
    h-12
    md:h-14
    rounded-xl
    bg-white/95
    border
    border-white/20
    px-5
    text-base
    md:text-lg
    text-gray-900
    placeholder:text-gray-400
    focus:outline-none
    focus:ring-2
    focus:ring-[#A61E22]
    transition-all
    duration-300
  "
  placeholder="Search articles, guides or videos..."
/>

          <div className="flex items-center gap-3">
              <button
  onClick={() => setFilterOpen(true)}
  className="
    relative
    h-12
    w-12
    md:h-14
    md:w-14
    rounded-xl
    bg-white/95
    border
    border-white/20
    flex
    items-center
    justify-center
    hover:border-[#A61E22]
    hover:bg-white
    transition-all
    duration-300
  "
>

  <img
    src={FilterIcon}
    alt="Filters"
    className="w-5 h-5 md:w-6 md:h-6 opacity-70"
  />

</button>
              <button
                className="
                 h-12
md:h-14
px-6
md:px-8
rounded-xl
bg-[#A61E22]
text-white
font-semibold
shadow-lg
hover:bg-[#8d181b]
hover:shadow-xl
transition-all
duration-300"
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