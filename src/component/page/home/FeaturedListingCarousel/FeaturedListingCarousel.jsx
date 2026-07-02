import React, { useEffect, useState } from "react";
import apiServices from "../../../../Service/apiService";
import CarouselArrow from "./CarouselArrow";

const FeaturedListingCarousel = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) {

        return (
            <section className="bg-backgroundColor py-20 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-5xl font-semibold mb-10">

                        Featured Listings

                    </h2>

                    <p>Loading...</p>

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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black w-12 h-12 rounded-full shadow-lg"
    >
        ←
    </button>

    {/* Right Arrow */}
    <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-black w-12 h-12 rounded-full shadow-lg"
    >
        →
    </button>

    {/* Carousel */}

    <div className="overflow-hidden">

        <div className="flex gap-6">

            {properties.map((property) => (
  <div
    key={property.ListingKey}
    className="flex-none w-[88%] sm:w-[48%] xl:w-[31.5%] bg-white text-black p-6"
  >
    Test Card
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