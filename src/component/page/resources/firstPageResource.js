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

<div
  className="
  relative
  z-10
  max-w-7xl
  mx-auto
  px-5
  lg:px-8
  pt-10
  md:pt-16
  lg:pt-20
  pb-4
  md:pb-6
  lg:pb-8
  font-Montserrat
">

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

<div className="max-w-4xl mx-auto mt-6 md:mt-8">

  <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[28px] p-5 md:p-7 shadow-xl">

    <div className="relative w-full">

      {/* Filter Button */}

      <button
        type="button"
        onClick={() => setFilterOpen(true)}
        aria-label="Open filters"
        className="
          absolute
          left-2
          md:left-3
          top-1/2
          -translate-y-1/2
          z-20
          w-10
          h-10
          rounded-full
          flex
          items-center
          justify-center
          hover:bg-black/5
          transition-all
          duration-200
        "
      >
        <img
          src={FilterIcon}
          alt="Filters"
          className="w-5 h-5 md:w-6 md:h-6 opacity-70"
        />
      </button>

      {/* Search Input */}

      <input
        className="
          w-full
          h-12
          md:h-16
          bg-white/95
          backdrop-blur-md
          rounded-[20px]
          pl-14
          md:pl-16
          pr-28
          md:pr-36
          text-base
          md:text-lg
          text-gray-900
          placeholder:text-base
          md:placeholder:text-lg
          placeholder:text-gray-400
          border
          border-white/30
          shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-[#A61E22]
          transition-all
          duration-300
        "
        placeholder="Search articles, guides or videos..."
      />

      {/* Search Button */}

      <div className="absolute right-2 top-1/2 -translate-y-1/2">

        <button
          className="
            h-9
            md:h-12
            px-4
            md:px-6
            bg-[#A61E22]
            hover:bg-[#8d181b]
            text-white
            rounded-2xl
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.02]
            font-semibold
            flex
            items-center
            justify-center
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