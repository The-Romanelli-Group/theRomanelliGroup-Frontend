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
  <div className="bg-white text-black p-6 rounded-xl">
    <p>Card Loaded</p>
  </div>
);
};

export default FeaturedListingCard; 