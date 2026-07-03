import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { bathroom, bed, square } from '../../../../assets/allImg';
import Map from './map';
import Footer from '../../Default Pages/footer';
import Header from './header';
import useFilteredProperties from './hook/useFilterProperties';
import { usePropertySearch } from '../api/getCheckProperty';
import LoadingScreen from '../../../../loading/loadingScreen';
import { locationIcon } from '../../../../assets/allImg';
import { ChevronDown } from 'lucide-react';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, filters: initialFilters } = location.state || {};

  const ITEMS_PER_PAGE = 10;

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [filters, setFilters] = useState(initialFilters || {});

  const [sortOption, setSortOption] = useState("Recently Updated");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Recently Updated");

  const [currentPage, setCurrentPage] = useState(1);

  const options = [
    "Recently Updated",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const alldata = useFilteredProperties(data, filters);
  const { checkProperty } = usePropertySearch();

  const handleGetitem = (id) => {
    const listings = alldata;
    const allData = data?.value || [];

    let limitedAllData = allData.slice(0, 40);

    const clickedProperty = allData.find(
      (item) => item.ListingKey === id
    );

    if (
      clickedProperty &&
      !limitedAllData.some(
        (item) => item.ListingKey === id
      )
    ) {
      limitedAllData = [
        clickedProperty,
        ...limitedAllData.slice(0, 39),
      ];
    }

    sessionStorage.setItem(
      "propertyData",
      JSON.stringify({
        id,
        listings,
        allData: limitedAllData,
      })
    );

    window.open(`/properties/${id}`, "_blank");
  };

  const handleResults = async (newFilters) => {
    setFilters(newFilters);
    setLoading(true);

    const results = await checkProperty(newFilters);

    setLoading(false);

    if (results) {
      navigate("/details/properties", {
        state: {
          data: results,
          filters: newFilters,
        },
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Reset pagination whenever search/sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOption]);

  // Sort listings
  const sortedData = [...alldata].sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return a.amount - b.amount;

      case "Price: High to Low":
        return b.amount - a.amount;

      default:
        return b.id - a.id;
    }
  });

  // Pagination
  const totalPages = Math.ceil(
    sortedData.length / ITEMS_PER_PAGE
  );

  const currentProperties = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Empty state
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-6">

          <h2 className="text-3xl font-bold text-gray-900">
            No Properties Found
          </h2>

          <p className="mt-3 text-gray-600">
            We couldn't find any listings for your search.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 px-6 py-3 rounded-xl bg-[#A61E22] text-white font-semibold hover:bg-[#8d181b] transition-colors"
          >
            Start a New Search
          </button>

        </div>
      </div>
    );
  }
  
  return (
  <div className="mainVideo bg-gray-50 min-h-screen">
    {loading && <LoadingScreen progress={progress} />}

    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

      <Header
        filter={filters}
        onResults={handleResults}
      />

      {/* Results Header */}
      <div className="mt-8 mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Homes for {filters.listingType === "Buy" ? "Sale" : "Rent"}
        </h1>

        <p className="mt-2 text-gray-500">
          {alldata.length} {alldata.length === 1 ? "Listing" : "Listings"} Found
        </p>

      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Property List */}
        <div className="w-full lg:w-2/3 order-1">

          {/* Toolbar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>

              <h2 className="text-lg font-semibold text-gray-900">
                Search Results
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Showing {alldata.length} available properties
              </p>

            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">

              <span className="text-sm text-gray-500 whitespace-nowrap">
                Sort by
              </span>

              <div className="relative">

                <button
                  onClick={() => setOpen(!open)}
                  className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-2.5
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-200
                  "
                >
                  <span className="text-sm font-medium">
                    {value}
                  </span>

                  <ChevronDown className="w-4 h-4" />
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20">

                    {options.map((option, index) => (

                      <button
                        key={index}
                        onClick={() => {
                          setValue(option);
                          setSortOption(option);
                          setOpen(false);
                        }}
                        className="
                          w-full
                          text-left
                          px-5
                          py-3
                          text-sm
                          hover:bg-gray-50
                          transition-colors
                        "
                      >
                        {option}
                      </button>

                    ))}

                  </div>
                )}

              </div>

            </div>

          </div>


{currentProperties.map((item) => (
  <div
    key={item.id}
    onClick={() => handleGetitem(item.id)}
    className="
      group
      bg-white
      rounded-3xl
      overflow-hidden
      border
      border-gray-100
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      mb-6
      cursor-pointer
    "
  >
    <div className="flex flex-col lg:flex-row">

      {/* Image */}
      <div className="relative lg:w-[320px] xl:w-[360px] h-64 lg:h-auto overflow-hidden">

        <img
          src={item.image}
          alt={item.heading}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute top-4 left-4">
          <span className="bg-[#A61E22] text-white text-xs font-semibold uppercase tracking-wide px-3 py-2 rounded-full shadow-lg">
            For {filters.listingType === "Buy" ? "Sale" : "Rent"}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6">

        <div>

          <p className="text-3xl font-bold text-[#A61E22]">
            ${item.amount.toLocaleString()}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-[#A61E22] transition-colors line-clamp-2">
            {item.heading}
          </h2>

          <p className="mt-2 flex items-center text-gray-500 text-sm">
            <img
              src={locationIcon}
              alt="Location"
              className="w-4 h-4 mr-2"
            />
            {item.location}
          </p>

          <p className="mt-5 text-gray-600 leading-7 line-clamp-2">
            {item.description}
          </p>

        </div>

        {/* Property Stats */}
        <div className="mt-6 flex flex-wrap gap-3">

          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

            <img
              src={bed}
              alt="Bedrooms"
              className="w-5 h-5"
            />

            <span className="font-medium text-gray-700">
              {item.bedroom} Beds
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

            <img
              src={bathroom}
              alt="Bathrooms"
              className="w-5 h-5"
            />

            <span className="font-medium text-gray-700">
              {item.bathroom} Baths
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

            <img
              src={square}
              alt="Area"
              className="w-5 h-5"
            />

            <span className="font-medium text-gray-700">
              {item.area.toLocaleString()} sqft
            </span>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-end">

          <button
            className="
              bg-[#A61E22]
              hover:bg-[#8d181b]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              shadow-lg
              group-hover:scale-105
            "
          >
            View Property
          </button>

        </div>

      </div>

    </div>

  </div>
))}
<p className="text-center text-sm text-gray-500 mb-5">
  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
  {Math.min(currentPage * ITEMS_PER_PAGE, sortedData.length)} of{" "}
  {sortedData.length} properties
</p>

{totalPages > 1 && (
  <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">

    {/* Previous */}
    <button
      onClick={() => {
        setCurrentPage((p) => Math.max(1, p - 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      disabled={currentPage === 1}
      className="
        px-4
        py-2
        rounded-xl
        border
        bg-white
        hover:bg-gray-50
        disabled:opacity-40
        disabled:cursor-not-allowed
        transition
      "
    >
      ← Previous
    </button>

    {/* First Page */}
    {currentPage > 2 && (
      <>
        <button
          onClick={() => setCurrentPage(1)}
          className="w-10 h-10 rounded-xl border bg-white hover:bg-gray-100"
        >
          1
        </button>

        {currentPage > 3 && (
          <span className="px-1 text-gray-400">...</span>
        )}
      </>
    )}

    {/* Previous Page */}
    {currentPage > 1 && (
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="w-10 h-10 rounded-xl border bg-white hover:bg-gray-100"
      >
        {currentPage - 1}
      </button>
    )}

    {/* Current */}
    <button className="w-10 h-10 rounded-xl bg-[#A61E22] text-white font-semibold shadow-md">
      {currentPage}
    </button>

    {/* Next Page */}
    {currentPage < totalPages && (
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="w-10 h-10 rounded-xl border bg-white hover:bg-gray-100"
      >
        {currentPage + 1}
      </button>
    )}

    {/* Last Page */}
    {currentPage < totalPages - 1 && (
      <>
        {currentPage < totalPages - 2 && (
          <span className="px-1 text-gray-400">...</span>
        )}

        <button
          onClick={() => setCurrentPage(totalPages)}
          className="w-10 h-10 rounded-xl border bg-white hover:bg-gray-100"
        >
          {totalPages}
        </button>
      </>
    )}

    {/* Next */}
    <button
      onClick={() => {
        setCurrentPage((p) => Math.min(totalPages, p + 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      disabled={currentPage === totalPages}
      className="
        px-4
        py-2
        rounded-xl
        border
        bg-white
        hover:bg-gray-50
        disabled:opacity-40
        disabled:cursor-not-allowed
        transition
      "
    >
      Next →
    </button>

  </div>
)}
</div>
                 {/* Map Section */}
        <div className="w-full lg:w-1/3 order-2">

          <div className="sticky top-24">

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

              {/* Header */}
              <div className="px-6 py-5 border-b border-gray-100">

                <h2 className="text-xl font-bold text-gray-900">
                  Property Map
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Explore nearby homes and their locations.
                </p>

              </div>
                </div>

              {/* Map */}
              <div className="h-[700px]">
                <Map alldata={currentProperties} />
              </div>

            </div>

          </div>

        

      </div>

    </div>

    <Footer />

  </div>
  );
};

export default DetailPage;
