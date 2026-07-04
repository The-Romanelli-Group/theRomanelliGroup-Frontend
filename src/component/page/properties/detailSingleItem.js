
import { useLocation, useParams } from 'react-router-dom';
import PropertyGallery from "./single/PropertyGallery";
import LeadForm from '../LeadForm/LeadForm'; 
import RelatedItem from './single/relatedItem';
import { aeroplane, bathroom, bed, bus, city, globe, hoa, hospital, hvac, medical, park, parkIcon, propType, size, square, train, year } from '../../../assets/allImg';
import Footer from '../Default Pages/footer';
import PropertyMap from './single/propertymap';
import React, { useState, useEffect } from 'react'

const DetailSingleItem = () => {
  const location = useLocation();
  const { id: routeId } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  
  // Get data from location.state or sessionStorage
  let id = routeId;
let listings = [];
let allData = [];
console.log("routeId:", routeId);
console.log("id:", id);
if (location.state) {
    ({ id, listings, allData } = location.state);
} else {
    const storedData = sessionStorage.getItem("propertyData");

    if (storedData) {
        const parsed = JSON.parse(storedData);

        id = parsed.id || routeId;
        listings = parsed.listings || [];
        allData = parsed.allData || [];
    }
}
  const foundProperty = allData?.find(item => item.ListingKey === id);

const [unique, setUnique] = useState(foundProperty);

useEffect(() => {
  if (!unique && id) {
    console.log("Fallback fetching property:", id);
    console.log("Property Data:", unique);

    fetch(
  `${process.env.REACT_APP_FEATURE_LISTINGS}/property-listings/property?ListingKey=${id}`
)
      .then(res => res.json())
      .then(data => {
        console.log("API RESPONSE:", data);

        const item = data?.value?.[0];

        if (item) {
          setUnique(item);
        } else {
          console.log("No property from API");
        }
      })
      .catch(err => console.error(err));
  }
}, [id]);

useEffect(() => {
  if (unique) {
    console.log("========== MLS LISTING ==========");
    console.log(unique);
    console.log(JSON.stringify(unique, null, 2));
  }
}, [unique]);

if (!unique) {
  return <p>Loading property...</p>;
}

  const propertyDetails = [
    { label: 'Property Type', value: unique.PropertySubType || 'N/A', img: propType },
    { label: 'Property Size', value: unique.BuildingAreaTotal ? `${unique.BuildingAreaTotal} sq ft` : 'N/A', img: size },
    { label: 'Year Built', value: unique.YearBuilt || 'N/A', img: year },
    { label: 'Days on Site', value: unique.DaysOnMarket ? `${unique.DaysOnMarket} Days` : 'N/A', img: globe },
    { label: 'HVAC', value: unique.Heating ? unique.Heating.join(', ') : 'N/A', img: hvac },
    { label: 'Parking', value: unique.AttachedGarageYN ? 'Yes' : 'No', img: park },
    { label: 'HOA Fees', value: unique.AssociationFee ? `$${unique.AssociationFee}/monthly` : 'N/A', img: hoa }
  ];

  const priceHistory = [
    { date: 'Feb 1, 2025', event: 'Listed', price: unique.ListPrice },
    { date: 'Feb 1, 2025', event: 'Listed', price: unique.ListPrice },
    { date: 'Feb 1, 2025', event: 'Listed', price: unique.ListPrice }
  ];

const lotAcres = unique?.LotSizeSquareFeet
  ? (unique.LotSizeSquareFeet / 43560).toFixed(2)
  : null;

const pricePerSqFt =
  unique?.ListPrice && unique?.BuildingAreaTotal
    ? Math.round(
        unique.ListPrice / unique.BuildingAreaTotal
      )
    : null;

    const highlights = [];

if (lotAcres) highlights.push(`${lotAcres} Acres`);

if (unique.ArchitecturalStyle?.length)
  highlights.push(...unique.ArchitecturalStyle);

const remarks = unique.PublicRemarks?.toLowerCase() || "";

if (remarks.includes("granite"))
  highlights.push("Granite Countertops");

if (remarks.includes("updated kitchen"))
  highlights.push("Updated Kitchen");

if (remarks.includes("luxury vinyl"))
  highlights.push("Luxury Vinyl Flooring");

if (remarks.includes("new roof"))
  highlights.push("New Roof");

if (remarks.includes("barn"))
  highlights.push("Horse Barn");

if (remarks.includes("arena"))
  highlights.push("Outdoor Riding Arena");

if (remarks.includes("fenced"))
  highlights.push("Fenced Pastures");

if (remarks.includes("natural gas"))
  highlights.push("Natural Gas");

if (remarks.includes("public water"))
  highlights.push("Public Water");

const uniqueHighlights = [...new Set(highlights)];

  return (
    <div className="mainVideo">
    <div className="pt-8 sm:px-4 md:px-6 px-2 lg:px-24">
      {/* Carousel Section */}
      <div className="mb-6 md:mb-8">
        <PropertyGallery image={unique.Media} />
      </div>

     {/* Main Content Grid */}

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* Left Column */}

  <div className="lg:col-span-2">

    <div className="bg-white rounded-2xl text-left">

      {/* Header */}

      <div className="pb-6 border-b border-gray-200">

        {/* Status */}

        <div className="flex flex-wrap items-center gap-3 mb-4">

          <span className="px-4 py-2 rounded-full bg-[#A61E22] text-white text-xs font-semibold uppercase tracking-wide">
            {unique.StandardStatus || "For Sale"}
          </span>

          <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
            {unique.PropertySubType || unique.PropertyType || "Residential"}
          </span>

          {unique.YearBuilt && (
            <span className="text-sm text-gray-500">
              Built {unique.YearBuilt}
            </span>
          )}

        </div>

        {/* Price */}

        <h1 className="
          text-4xl
          md:text-5xl
          font-bold
          text-gray-900
          leading-none
        ">
          ${unique.ListPrice?.toLocaleString() || "N/A"}
        </h1>

        {/* Address */}

        <p className="
          mt-3
          max-w-3xl
          text-lg
          text-gray-600
          leading-relaxed
        ">
          {unique.UnparsedAddress ||
            `${unique.StreetNumber || ""} ${unique.StreetName || ""}
            ${unique.City || ""}, ${unique.StateOrProvince || ""}
            ${unique.PostalCode || ""}`}
        </p>

        {/* Stats */}

        {/* Quick Stats */}

<div
  className="
    mt-5
    grid
    grid-cols-3
    gap-2

    sm:flex
    sm:flex-wrap
    sm:gap-3
  "
>

  {/* Beds */}

  <div
    className="
      flex
      flex-col
            items-center
      justify-center
      gap-0.5

      px-2
py-2

      rounded-xl
      border
      border-gray-200
      bg-gray-50
    "
  >
    <img src={bed} className="w-4 h-4 mb-1" alt="" />

            <div className="flex items-center gap-1">
          <span className="text-base font-bold text-gray-900">
            {unique.BedroomsTotal || 0}
          </span>

          <span className="text-xs text-gray-600">
            Beds
          </span>
        </div>
  </div>

  {/* Baths */}

  <div
    className="
      flex
      flex-col
        items-center
      justify-center
      gap-0.5

      px-2
py-2

      rounded-xl
      border
      border-gray-200
      bg-gray-50
    "
  >
    <img src={bathroom} className="w-4 h-4 mb-1" alt="" />

                          <div className="flex items-center gap-1">
                          <span className="text-base font-bold text-gray-900">
                            {unique.BathroomsTotalInteger || 0}
                          </span>

                          <span className="text-xs text-gray-600">
                            Baths
                          </span>
                        </div>
  </div>

  {/* Square Feet */}

  <div
    className="
      flex
      flex-col
            items-center
      justify-center
      gap-0.5

      px-2
py-2

      rounded-xl
      border
      border-gray-200
      bg-gray-50
    "
  >
    <img src={square} className="w-4 h-4 mb-1" alt="" />

    <div className="flex items-center gap-1">
                          <span className="text-base font-bold text-gray-900">
      {unique.BuildingAreaTotal?.toLocaleString() || "--"}
    </span>

   <span className="text-xs text-gray-600">
                            Sqft
                          </span>
                        </div>
  </div>

</div>

        {/* Payment */}

        <div className="
          mt-6
          max-w-xl
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          p-5
        ">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Estimated Monthly Payment
          </p>

          <div className="mt-2 flex items-end gap-1">

            <span className="text-4xl font-bold text-gray-900">
              ${Math.round((unique.ListPrice || 0) * 0.005).toLocaleString()}
            </span>

            <span className="mb-1 text-lg text-gray-500">
              /mo
            </span>

          </div>

          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Estimated using current average mortgage rates. Taxes and insurance not included.
          </p>

        </div>

      </div>
 <div className="mt-8">               
  <div className="mt-8">

  <h2 className="text-2xl font-bold text-gray-900 mb-5">
    Property Highlights
  </h2>

  <div className="flex flex-wrap gap-3">

    {uniqueHighlights.map((item) => (
      <div
        key={item}
        className="
          px-4
          py-2
          rounded-full
          bg-[#A61E22]/10
          text-[#A61E22]
          font-medium
          border
          border-[#A61E22]/20
        "
      >
        ✓ {item}
      </div>
    ))}

  </div>

</div>
               {/* Property Description */}

<div className="mt-8">

  <div className="flex items-center justify-between mb-4">

    <h2 className="text-2xl font-bold text-gray-900">
      Property Description
    </h2>

    {unique.PublicRemarks &&
      unique.PublicRemarks.length > 350 && (
        <button
          onClick={() =>
            setShowFullDescription(!showFullDescription)
          }
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            text-[#A61E22]
            hover:underline
          "
        >
          {showFullDescription
            ? "Show Less"
            : "Read More"}
        </button>
      )}

  </div>

  <div className="
    rounded-2xl
    border
    border-gray-200
    bg-white
    p-6
    shadow-sm
  ">

    <p
      className={`
        text-gray-700
        text-[16px]
        leading-8
        whitespace-pre-line
        transition-all
        duration-300
        ${
          showFullDescription
            ? ""
            : "line-clamp-5"
        }
      `}
    >
      {unique.PublicRemarks || "No description available."}
    </p>

    {unique.PublicRemarks &&
      unique.PublicRemarks.length > 350 && (
        <button
          onClick={() =>
            setShowFullDescription(!showFullDescription)
          }
          className="
            sm:hidden
            mt-5
            text-sm
            font-semibold
            text-[#A61E22]
            hover:underline
          "
        >
          {showFullDescription
            ? "Show Less"
            : "Read More"}
        </button>
      )}

  </div>

</div>

                  <div className="mt-8">

  <h2 className="text-2xl font-bold text-gray-900 mb-5">
    Property Facts
  </h2>

  <div className="rounded-2xl border border-gray-200 overflow-hidden">

    {[
      ["Property Type", unique.PropertyType],
      ["Style", unique.ArchitecturalStyle?.join(", ")],
      ["Living Area", `${unique.BuildingAreaTotal?.toLocaleString() || "--"} Sq Ft`],
      ["Lot Size", lotAcres ? `${lotAcres} Acres` : "N/A"],
      ["Price / Sq Ft", pricePerSqFt ? `$${pricePerSqFt}` : "N/A"],
      ["Year Built", unique.YearBuilt],
      ["Levels", unique.Levels?.join(", ")],
      ["Heating", unique.Heating?.join(", ")],
      ["Cooling", unique.Cooling?.join(", ")],
      ["Basement", unique.Basement?.join(", ")],
      ["Fireplace", unique.FireplaceYN ? "Yes" : "No"],
      ["County", unique.CountyOrParish],
      ["Township", unique.Township],
    ].map(([label, value], index) => (
      <div
        key={label}
        className={`
          grid
          grid-cols-2
          px-5
          py-4
          ${
            index !== 12
              ? "border-b border-gray-200"
              : ""
          }
        `}
      >
        <div className="text-gray-500 font-medium">
          {label}
        </div>

        <div className="text-gray-900 font-semibold text-right">
          {value || "N/A"}
        </div>

      </div>
    ))}

  </div>

</div>
                
              
                
                {/* Explore Similar Properties */}
                <div className="mt-6 md:mt-8">
                  <RelatedItem listings={listings} allData={allData} id={id} />
                </div>
              </div>
              
                </div>
          
        {/* Right Column - Contact Form */}
        <div className="lg:col-span-1 ml-0 order-last">
          <div className="sticky top-4">
          <LeadForm variant="property" property={unique}/>
          </div>
        </div>
         
        </div>
      
 </div>
    </div>
          <Footer/>
    </div>
  )
}

export default DetailSingleItem;
