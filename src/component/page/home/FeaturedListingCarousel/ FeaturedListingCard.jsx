import React from "react";

const FeaturedListingCard = ({ property }) => {
  if (!property) return null;

  const image =
    property.Media?.length > 0
      ? property.Media[0].MediaURL
      : "https://via.placeholder.com/800x600?text=No+Image";

  const price = property.ListPrice
    ? `$${Number(property.ListPrice).toLocaleString()}`
    : "Price Upon Request";

  const address =
    property.UnparsedAddress ||
    `${property.StreetNumber || ""} ${property.StreetName || ""}, ${
      property.City || ""
    }, ${property.StateOrProvince || ""}`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden h-[300px]">

        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-5 left-5 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full">
          JUST LISTED
        </div>

      </div>

      {/* Content */}

      <div className="p-6 text-left">

        <p className="text-3xl font-bold text-gray-900">

          {price}

        </p>

        <h3 className="text-xl font-semibold mt-3 text-gray-900 line-clamp-2">

          {address}

        </h3>

        <div className="flex gap-6 mt-5 text-gray-600">

          <span>🛏 {property.BedroomsTotal || "--"}</span>

          <span>🛁 {property.BathroomsTotalInteger || "--"}</span>

          <span>📐 {property.BuildingAreaTotal || "--"} sqft</span>

        </div>

        <button
          className="mt-6 w-full bg-[#A61E22] hover:bg-[#8d181b] text-white py-4 rounded-xl font-semibold transition"
        >
          View Property →
        </button>

      </div>

    </div>
  );
};

export default FeaturedListingCard;