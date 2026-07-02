import React, { useEffect, useState, useRef } from "react";
import apiServices from "../../../../Service/apiService";
import FeaturedListingCard from "./FeaturedListingCard";
import "./featuredListing.css"; 

const FeaturedListingCarousel = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
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

console.log(response);

            setProperties(response.value || []);

        } catch (err) {
            console.error(err);
        }

        setLoading(false);

    };

      const visibleCards = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 640 ? 2 : 1;

            const nextSlide = () => {
            setCurrentIndex((prev) =>
                prev >= properties.length - visibleCards ? 0 : prev + 1
            );
            };

            const prevSlide = () => {
            setCurrentIndex((prev) =>
                prev <= 0 ? properties.length - visibleCards : prev - 1
            );
            };

   if (loading) {
  return (
    <section className="bg-backgroundColor py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[4px] text-gray-400 mb-2">
          Handpicked Homes
        </p>

        <h2 className="text-5xl font-semibold mb-10">
          Featured Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {[1,2,3].map((item) => (

            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden animate-pulse"
            >

              <div className="h-[300px] bg-gray-300"></div>

              <div className="p-6">

                <div className="h-8 w-40 bg-gray-300 rounded mb-6"></div>

                <div className="h-5 w-full bg-gray-200 rounded mb-3"></div>

                <div className="h-5 w-3/4 bg-gray-200 rounded mb-6"></div>

                <div className="flex gap-4 mb-6">

                  <div className="h-4 w-12 bg-gray-200 rounded"></div>

                  <div className="h-4 w-12 bg-gray-200 rounded"></div>

                  <div className="h-4 w-20 bg-gray-200 rounded"></div>

                </div>

                <div className="h-14 w-full bg-gray-300 rounded-xl"></div>

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

                <div className="flex justify-between items-end mb-10">

                    <div>

                        <p className="uppercase tracking-[4px] text-gray-400 mb-2">
                            Handpicked Homes
                        </p>

                        <h2 className="text-5xl font-semibold">

                            Featured Listings

                        </h2>

                    </div>

                </div>

                <div className="relative">

    {/* Left Arrow */}
<button
    onClick={prevSlide}
   className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white text-black w-12 h-12 rounded-full shadow-xl hover:scale-105 transition"
>
    ←
</button>

{/* Right Arrow */}
<button
    onClick={nextSlide}
  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white text-black w-12 h-12 rounded-full shadow-xl hover:scale-105 transition"
>
    →
</button>

{/* Carousel */}
<div className="overflow-hidden">

    <div
    ref={carouselRef}
    className="flex gap-6 transition-transform duration-500 ease-in-out"
        style={{
    transform: `translateX(-${
        currentIndex *
        (carouselRef.current?.children[0]?.offsetWidth + 24 || 0)
    }px)`,
}}
    >

            {properties.map((property) => (

                <div
                    key={property.ListingKey}
                    className="flex-none w-[88%] sm:w-[48%] xl:w-[31.5%]"
                >
                    <FeaturedListingCard property={property} />
                </div>

            ))}

    </div>

</div>

</div>

            </div>

        </section>

    );

};

export default FeaturedListingCarousel;