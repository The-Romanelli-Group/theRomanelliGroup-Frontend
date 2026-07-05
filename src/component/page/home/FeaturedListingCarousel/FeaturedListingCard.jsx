import React from "react";
import { useNavigate } from "react-router-dom";
import BedIcon from "../../../../assets/images/illustrations/Bed.svg";
import BathroomIcon from "../../../../assets/images/illustrations/Bathroom.svg";
import AreaIcon from "../../../../assets/images/illustrations/Area.svg";

const FeaturedListingCard = ({ property }) => {
  const navigate = useNavigate();

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

  const handleViewProperty = () => {
  window.open(
    `/properties/${property.ListingKey}`,
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <div
      onClick={handleViewProperty}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-[220px] md:h-[300px]">
        <img
          src={image}
          alt={address}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

       <div className="absolute top-4 left-4 flex flex-col gap-2">

  {property.badge && (
    <div className="bg-[#A61E22] text-white text-[10px] md:text-xs font-semibold px-3 py-2 rounded-full shadow-md">
      ⭐ {property.badge}
    </div>
  )}

  <div className="bg-green-600 text-white text-[10px] md:text-xs font-semibold uppercase tracking-wide px-3 py-2 rounded-full shadow-md">
    {property.StandardStatus || "Active"}
  </div>

</div>      </div>

      {/* Content */}
      <div className="p-5 md:p-6 text-left">
        <p className="text-2xl md:text-3xl font-bold text-gray-900">
          {price}
        </p>

        <h3 className="text-lg md:text-xl font-semibold mt-3 text-gray-900 line-clamp-2">
          {address}
        </h3>

        <div className="flex items-center justify-between mt-5 text-gray-600 text-sm md:text-base">

          <div className="flex items-center gap-2">
            <img
              src={BedIcon}
              alt="Bedrooms"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span>{property.BedroomsTotal || "--"}</span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={BathroomIcon}
              alt="Bathrooms"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span>{property.BathroomsTotalInteger || "--"}</span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={AreaIcon}
              alt="Area"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span>
              {property.BuildingAreaTotal
                ? Number(property.BuildingAreaTotal).toLocaleString()
                : "--"}{" "}
              sq ft
            </span>
          </div>

        </div>

        <button
          className="mt-5 w-full bg-[#A61E22] hover:bg-[#8d181b] text-white py-3 md:py-4 rounded-xl font-semibold transition"
        >
          View Property
        </button>
      </div>
    </div>
  );
};

export default FeaturedListingCard;