import { useState } from "react";

const allowedPropertyTypes = [
  "Residential",
  "Residential Lease",
  "Residential Income",
  "Land",
  "Commercial Sale",
  "Commercial Lease",
  "Farm",
];

export const usePropertySearch = () => {
  const [error, setError] = useState(null);

  const checkProperty = async (filters) => {
    setError(null);

    try {
      // Build query params safely
      const params = new URLSearchParams();
      
      if (filters.city) params.append("city", filters.city);
      if (filters.state) params.append("state", filters.state);
      if (filters.country) params.append("country", filters.country);
      if (filters.unparsedAddress) params.append("unparsedAddress", filters.unparsedAddress);
      if (filters.street){
          const cleanStreet = filters.street.split(" ")[0].trim().split(" ")[0];
          params.append("street", cleanStreet);
      } 
      if (filters.streetNumber) params.append("streetNumber", filters.streetNumber);
      if (filters.postalCode) params.append("postalCode", filters.postalCode);
       if (filters.zip) params.append("postalCode", filters.zip);
      if (filters.address) params.append("address", filters.address);
      if (filters.min && filters.min>-1) params.append("min", filters.min);    
      if (filters.max && filters.max!== 5000001) params.append("max", filters.max);
      if (filters.sqftMin && filters.sqftMin>-1) params.append("sqftMin", filters.sqftMin);    
      if (filters.sqftMax && filters.sqftMax!== 150001) params.append("sqftMax", filters.sqftMax);
      if (filters.bedrooms && filters.bedrooms !== "Any")
        params.append("bedrooms", filters.bedrooms);
      if (filters.bathrooms && filters.bathrooms !== "Any")
        params.append("bathrooms", filters.bathrooms);
      if (filters.listingType)
        params.append("listingType", filters.listingType);

      if (filters.property) {
        if (allowedPropertyTypes.includes(filters.property)) {
          params.append("property", filters.property);
        } else {
          params.append("property", filters.property); // fallback
        }
      }

      const res = await fetch(
        `${process.env.REACT_APP_FEATURE_LISTINGS}/property-listings/filter?${params.toString()}`
      );

      if (!res.ok) throw new Error("Failed to fetch properties");

      const data = await res.json();
      return data;
    } catch (err) {
      setError(err.message);
      console.error("❌ Error fetching properties:", err);
      return null;
    }
  };

  return { checkProperty, error };
};