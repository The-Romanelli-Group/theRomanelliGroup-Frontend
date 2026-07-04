import React, { useEffect, useState } from "react";
import { bathroom, bed, square } from "../../../../assets/allImg";

const RelatedItem = ({ listingKey }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!listingKey) return;

    const fetchRelated = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.REACT_APP_FEATURE_LISTINGS}/property-listings/related?ListingKey=${listingKey}`
        );

        const data = await res.json();

        setProperties(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [listingKey]);

  const openProperty = (key) => {
    window.open(`/properties/${key}`, "_blank");
  };

  if (loading) {
    return (
      <div className="mt-10">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden border border-gray-200 animate-pulse"
            >
              <div className="h-56 bg-gray-200"></div>

              <div className="p-5 space-y-4">
                <div className="h-7 w-32 bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded"></div>
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>

                <div className="flex gap-4 pt-2">
                  <div className="h-5 w-12 bg-gray-200 rounded"></div>
                  <div className="h-5 w-12 bg-gray-200 rounded"></div>
                  <div className="h-5 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!properties.length) return null;

  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold text-gray-900">
        You May Also Like
      </h2>

      <p className="mt-2 text-gray-500">
        Homes similar in price, style and location.
      </p>

      <div
        className="
          mt-8
          flex
          gap-6
          overflow-x-auto
          lg:grid
          lg:grid-cols-3
          lg:overflow-visible
          pb-2
          scrollbar-hide
        "
      >
        {properties.map((item) => (
          <article
            key={item.ListingKey}
            onClick={() => openProperty(item.ListingKey)}
            className="
              min-w-[300px]
              lg:min-w-0
              cursor-pointer
              rounded-3xl
              overflow-hidden
              border
              border-gray-200
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              group
            "
          >
            <div className="relative overflow-hidden">

              <img
                src={item.Media?.[0]?.MediaURL}
                alt={item.UnparsedAddress}
                className="
                  h-60
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-[#A61E22] px-3 py-1 text-xs font-semibold text-white">
                  {item.StandardStatus}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur">
                📷 {item.PhotosCount}
              </div>
            </div>

            <div className="p-5">

              <div className="text-2xl font-bold text-gray-900">
                ${item.ListPrice?.toLocaleString()}
              </div>

              <p className="mt-2 font-medium text-gray-800 line-clamp-1">
                {item.UnparsedAddress}
              </p>

              <div className="mt-5 flex justify-between border-t pt-4 text-sm text-gray-700">

                <div className="flex items-center gap-1">
                  <img src={bed} className="w-4 h-4" alt="" />
                  {item.BedroomsTotal}
                </div>

                <div className="flex items-center gap-1">
                  <img src={bathroom} className="w-4 h-4" alt="" />
                  {item.BathroomsTotalInteger}
                </div>

                <div className="flex items-center gap-1">
                  <img src={square} className="w-4 h-4" alt="" />
                  {item.BuildingAreaTotal?.toLocaleString()}
                </div>

              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedItem;