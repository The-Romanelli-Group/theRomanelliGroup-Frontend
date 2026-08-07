import React, { useEffect, useRef, useState } from "react";
import FilterResource from "./filterResource";
import SideModal from "../home/sideModal";
import FilterIcon from "../../../assets/images/illustrations/Filter.svg";
import { video_url1 } from "../../../assets/allImg";

const FirstPageResource = ({ resourceState = {} }) => {
  const videoRef = useRef(null);

  const [filterOpen, setFilterOpen] = useState(false);

  // Hero-only state
  const [placeholder, setPlaceholder] = useState("Search by keyword");
  const [isSearching, setIsSearching] = useState(false);

  // Shared state from MainPageResource
  const {
    search = "",
    setSearch = () => {},

    activeSearch = "",
    setActiveSearch = () => {},

    filters = {
      topic: null,
      sort: "Latest First",
      type: null,
    },
    setFilters = () => {},

    contentType = "all",
    setContentType = () => {},
  } = resourceState;

  // Clear all
  const clearAll = () => {
    setSearch("");
    setActiveSearch("");
    setContentType("all");

    setFilters({
      topic: null,
      sort: "Latest First",
      type: null,
    });
  };

  // Video Background
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    if (!video.currentSrc.includes(video_url1.split("/").pop())) {
      video.src = video_url1;
      video.load();
    }

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    document.addEventListener("visibilitychange", playVideo);
    window.addEventListener("focus", playVideo);

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
      window.removeEventListener("focus", playVideo);
    };
  }, []);

  // Responsive placeholder
  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 640) {
        setPlaceholder("Search by keyword, category, or topic...");
      } else {
        setPlaceholder("Search by keyword");
      }
    };

    updatePlaceholder();

    window.addEventListener("resize", updatePlaceholder);

    return () => {
      window.removeEventListener("resize", updatePlaceholder);
    };
  }, []);

  // Search handler
  const handleSearch = () => {
    setIsSearching(true);

    setActiveSearch(search.trim());

    setTimeout(() => {
      setIsSearching(false);
    }, 250);
  };

  // Search on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Receive filters from modal
  const handleFilters = (newFilters) => {
    setFilters(newFilters);

    switch (newFilters.type) {
      case "Blog Posts":
        setContentType("blog");
        break;

      case "Instagram Reels":
        setContentType("instagram");
        break;

      default:
        setContentType("all");
    }

    handleSearch();
  };
return (
    <section className="relative py-8 md:py-12 overflow-hidden min-h-[78vh] md:min-h-screen">
     {/* Background Video */}
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>
    </div>

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
        "
      >

        <h1 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">
          Insights, Tips, and Stories to Empower Your{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Real Estate Journey
          </span>
        </h1>

        <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300">
          Explore our collection of articles, videos, expert advice, and market
          insights designed to help you buy smarter, sell confidently and stay
          ahead of the Central Ohio real estate market.
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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
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
        placeholder={placeholder}
      />

      {/* Search Button */}

      <div className="absolute right-2 top-1/2 -translate-y-1/2">

        <button
          type="button"
          onClick={handleSearch}
          disabled={isSearching}
          className="
            h-9
            md:h-12
            px-4
            md:px-6
            bg-[#A61E22]
            hover:bg-[#8d181b]
            disabled:bg-[#8d181b]/70
            text-white
            rounded-2xl
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.02]
            disabled:hover:scale-100
            font-semibold
            flex
            items-center
            justify-center
          "
        >
          {isSearching ? "Searching..." : "Search"}
        </button>

      </div>

    </div>

  </div>

{/* Active Search & Filters */}

{(activeSearch || filters.topic || filters.type) && (
  <div className="mt-5 flex flex-wrap items-center gap-3">

    {activeSearch && (
      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
        🔍 {activeSearch}
      </span>
    )}

    {filters.type && (
      <span className="rounded-full bg-[#A61E22] px-4 py-2 text-sm font-medium text-white">
        {filters.type}
      </span>
    )}

    {filters.topic && (
      <span className="rounded-full bg-[#A61E22] px-4 py-2 text-sm font-medium text-white">
        {filters.topic}
      </span>
    )}

    <button
      onClick={clearAll}
      className="ml-1 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
    >
      Clear All
    </button>

  </div>
)}

</div>

    </div>

    <SideModal />

    {filterOpen && (
      <FilterResource
        close={() => setFilterOpen(false)}
        initialFilters={filters}
        onSave={(newFilters) => {
          handleFilters(newFilters);
          setFilterOpen(false);
        }}
      />
    )}

  </section>
);
};

export default FirstPageResource;