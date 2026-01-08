import { useEffect, useState } from "react";

const useFilteredProperties = (data, filters) => {
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    if (!data?.value) return;

    // Step 1: Apply filters (only valid entries)
    const filtered = data.value.filter(item =>
      item.ListPrice &&
      (item.StreetNumber || item.UnparsedAddress) &&
      item.PublicRemarks &&
      item.BedroomsTotal &&
      item.BathroomsTotalInteger &&
      item.BuildingAreaTotal &&
      item.Latitude &&
      item.Longitude
    );

    // Step 2: Map to simplified objects (limit 6)
    const mapped = filtered.filter(i => i.ListPrice !== 1).map(item => ({
      id: item.ListingKey,
      amount: item.ListPrice,
      heading: item.UnparsedAddress
        ? item.UnparsedAddress.split(',')[0]
        : `${item.StreetNumber} ${item.StreetName}`,
      description: item.PublicRemarks
        ? item.PublicRemarks.split(" ").slice(0, 30).join(" ") + "..."
        : "No description available",
      bedroom: item.BedroomsTotal,
      bathroom: item.BathroomsTotalInteger,
      area: item.BuildingAreaTotal,
      lat: item.Latitude || item.latitude || item.lat,
      lng: item.Longitude || item.longitude || item.lng || item.lon,
      detail: [
        item.BedroomsTotal ? `Bedroom - ${item.BedroomsTotal}` : "",
        item.BathroomsTotalInteger ? `Bath - ${item.BathroomsTotalInteger}` : "",
        item.BuildingAreaTotal ? `Area - ${item.BuildingAreaTotal} sqft` : ""
      ]
        .filter(Boolean)
        .join(" | "),
      location:  item.UnparsedAddress
        ? item.UnparsedAddress
        : `${item.StreetNumber} ${item.StreetName} ${item.City} ${item.StateOrProvince} ${item.PostalCode}`,
      image:
        item.Media && item.Media.length > 0
          ? item.Media[0].MediaURL
          : "https://ik.imagekit.io/ic938owib/0041de26f53f09af894faf5811e9348ae7d2f6d5.png?updatedAt=1748094166923",
    }));

    setAlldata(mapped);
  }, [data, filters]);

  return alldata;
};

export default useFilteredProperties;
