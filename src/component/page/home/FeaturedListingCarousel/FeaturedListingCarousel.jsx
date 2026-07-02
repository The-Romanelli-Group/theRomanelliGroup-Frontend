import React, { useEffect, useState, useRef } from "react";
import apiServices from "../../../../Service/apiService";
import FeaturedListingCard from "./FeaturedListingCard";
import "./featuredListing.css"; 
import { useNavigate } from "react-router-dom";

const FeaturedListingCarousel = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        loadProperties();
    }, []);

    const loadProperties = async () => {

        try {

         console.log("Fetching featured listings...");

const response = await apiServices.get(
    "authentication",
    "/property-listings/featured",
    null,
    null
);

console.log("Featured Response:", response);
console.log("Properties:", response.value);

            setProperties(response.value || []);

        } catch (err) {
            console.error(err);
        }

        setLoading(false);

    };

      const visibleCards = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 640 ? 2 : 1;

                    const nextSlide = () => {
                if (currentIndex < properties.length - visibleCards) {
                    setCurrentIndex(currentIndex + 1);
                }
            };
            const prevSlide = () => {
                if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                }
            };

   if (loading) {
  return (
    <section className="bg-backgroundColor py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

       <h2 className="text-5xl font-semibold mb-10">
    Curated for You
</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {(window.innerWidth < 768 ? [1] : [1, 2, 3]).map((item) => (

            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden animate-pulse"
            >
                    <div className="h-[300px] skeleton"></div>

                    <div className="p-6">

                        <div className="h-8 w-40 skeleton rounded mb-6"></div>

                        <div className="h-5 w-full skeleton rounded mb-3"></div>

                        <div className="h-5 w-3/4 skeleton rounded mb-6"></div>

                        <div className="flex gap-4 mb-6">

                            <div className="h-4 w-12 skeleton rounded"></div>

                            <div className="h-4 w-12 skeleton rounded"></div>

                            <div className="h-4 w-20 skeleton rounded"></div>

                        </div>

                        <div className="h-14 w-full skeleton rounded-xl"></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
          
    return (

        <section className="bg-backgroundColor py-20 text-white">

            <div className="max-w-7xl mx-auto px-6">

              <div className="text-center mb-14">

    <h2 className="text-5xl font-semibold">
        Curated for You
    </h2>

</div>

                <div className="relative">

    {/* Left Arrow */}
<button
    onClick={prevSlide}
    disabled={currentIndex === 0}
    className="carousel-arrow carousel-arrow-left"
>
    ←
</button>
{/* Right Arrow */}
<button
    onClick={nextSlide}
    disabled={currentIndex >= properties.length - visibleCards}
    className="carousel-arrow carousel-arrow-right"
>
    →
</button>
{/* Carousel */}
<div className="featured-carousel no-scrollbar">

    <div
    ref={carouselRef}
    className="featured-carousel-track flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
       style={
    window.innerWidth >= 768
        ? {
              transform: `translateX(-${
                  currentIndex *
                  (carouselRef.current?.children[0]?.offsetWidth + 24 || 0)
              }px)`,
          }
        : {}
}
    >

            {properties.map((property) => (

                <div
                    key={property.ListingKey}
                 className="featured-card flex-none md:w-[48%] xl:w-[31.5%]"
                >
                    <FeaturedListingCard property={property} />
                </div>

            ))}

    </div>

</div>

</div>
                    <div className="mt-16 flex flex-col items-center text-center">

    <p className="text-lg text-gray-300 mb-6">
        Didn't find the perfect home?
    </p>

    <button
        onClick={() => navigate("/properties")}
        className="border border-white text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#A61E22] hover:border-[#A61E22] hover:-translate-y-1"
    >
        Explore All Listings
    </button>

</div>
            </div>

        </section>

    );

};

export default FeaturedListingCarousel;