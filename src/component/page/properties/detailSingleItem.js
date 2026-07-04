
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

  return (
    <div className="mainVideo">
    <div className="pt-8 sm:px-4 md:px-6 px-2 lg:px-24">
      {/* Carousel Section */}
      <div className="mb-6 md:mb-8">
        <PropertyGallery image={unique.Media} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column - Property Overview & Details */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          
          {/* Property Overview */}

<div className="bg-white rounded-2xl">

  {/* Listing Header */}

  <div className="pb-8 border-b border-gray-200">

    {/* Status + Type */}

    <div className="flex flex-wrap items-center gap-3 mb-5">

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

    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">

      ${unique.ListPrice?.toLocaleString() || "N/A"}

    </h1>

    {/* Address */}

    <p className="mt-3 text-lg md:text-xl text-gray-600 leading-relaxed">

      {unique.UnparsedAddress ||
        `${unique.StreetNumber || ""} ${unique.StreetName || ""}
        ${unique.City || ""}, ${unique.StateOrProvince || ""}
        ${unique.PostalCode || ""}`}

    </p>

    {/* Quick Stats */}

    <div className="flex flex-wrap gap-6 mt-7">

      <div className="flex items-center gap-2">
        <img src={bed} className="w-5 h-5" alt="" />
        <span className="font-semibold text-gray-900">
          {unique.BedroomsTotal || 0}
        </span>
        <span className="text-gray-600">
          Beds
        </span>
      </div>

      <div className="flex items-center gap-2">
        <img src={bathroom} className="w-5 h-5" alt="" />
        <span className="font-semibold text-gray-900">
          {unique.BathroomsTotalInteger || 0}
        </span>
        <span className="text-gray-600">
          Baths
        </span>
      </div>

      <div className="flex items-center gap-2">
        <img src={square} className="w-5 h-5" alt="" />
        <span className="font-semibold text-gray-900">
          {unique.BuildingAreaTotal?.toLocaleString() || "--"}
        </span>
        <span className="text-gray-600">
          Sq Ft
        </span>
      </div>

    </div>

    {/* Estimated Payment */}

    <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">

      <p className="text-sm uppercase tracking-wide text-gray-500">
        Estimated Monthly Payment
      </p>

      <div className="mt-2 text-3xl font-bold text-gray-900">
        ${Math.round((unique.ListPrice || 0) * 0.005).toLocaleString()}
        <span className="text-lg font-medium text-gray-500">
          /mo
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">
       Estimated using current average mortgage rates.
Taxes and insurance not included.
      </p>

    </div>

  </div>

 <div className="mt-8">


              {                
               {/* About this Home */}

<div className="mt-10">

  <h2 className="text-2xl font-semibold text-gray-900 mb-5">
    Property Overview
  </h2>

  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">

    <p
      className={`
        text-gray-700
        leading-8
        text-[15px]
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
            mt-5
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
                  {/* Property Facts */}

<div className="mt-10">

  <h2 className="text-2xl font-semibold text-gray-900 mb-5">
    Property Facts
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <img src={propType} className="w-5 h-5" alt="" />
        <span className="text-sm text-gray-500">Property Type</span>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {unique.PropertyType || "N/A"}
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <img src={size} className="w-5 h-5" alt="" />
        <span className="text-sm text-gray-500">Square Footage</span>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {unique.BuildingAreaTotal?.toLocaleString() || "--"} sqft
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <img src={year} className="w-5 h-5" alt="" />
        <span className="text-sm text-gray-500">Year Built</span>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {unique.YearBuilt || "N/A"}
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <img src={hoa} className="w-5 h-5" alt="" />
        <span className="text-sm text-gray-500">HOA Fee</span>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {unique.AssociationFee
          ? `$${unique.AssociationFee}/mo`
          : "No HOA"}
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <img src={hvac} className="w-5 h-5" alt="" />
        <span className="text-sm text-gray-500">Heating</span>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {unique.Heating || "N/A"}
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <img src={park} className="w-5 h-5" alt="" />
        <span className="text-sm text-gray-500">Parking</span>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {unique.GarageSpaces ||
          unique.ParkingTotal ||
          "N/A"}
      </div>
    </div>

  </div>

</div>
                
                {/* Property Details */}
                {/* <div className="py-4 md:py-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 md:mb-4">Property Details</h2>
                  <div className="grid grid-cols-1 gap-3 md:gap-4 bg-gray-100 md:bg-gray-200 px-3 md:px-4 py-3 md:py-4 ">
                    {propertyDetails?.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center py-1 border-b border-gray-300 last:border-b-0">
                        <div className="flex items-center gap-2">
                          <img src={detail.img} className='w-4 h-4' alt={detail.img} />
                          <span className="text-sm md:text-base text-gray-600 font-medium">{detail.label}</span>
                        </div>
                        <span className="text-sm md:text-base text-gray-900 font-medium text-right">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div> */}
                
                {/* <hr className="my-4"/> */}
                
                {/* Price History */}
                {/* <div className="">
                  <h2 className="text-xl font-semibold text-gray-900 my-3 md:my-4">Price History</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-gray-100 md:bg-gray-200">
                      <thead>
                        <tr className="">
                          <th className="text-left py-2 md:py-3 px-2 md:px-4 font-medium text-gray-600 text-sm md:text-base">Date</th>
                          <th className="text-left py-2 md:py-3 px-2 md:px-4 font-medium text-gray-600 text-sm md:text-base">Event</th>
                          <th className="text-left py-2 md:py-3 px-2 md:px-4 font-medium text-gray-600 text-sm md:text-base">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {priceHistory?.map((history, index) => (
                          <tr key={index} className="border-t border-gray-200">
                            <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm md:text-base">{history.date}</td>
                            <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm md:text-base">{history.event}</td>
                            <td className="py-2 md:py-3 px-2 md:px-4 text-gray-900 font-medium text-sm md:text-base">
                              ${history.price?.toLocaleString() || 'N/A'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div> */}
                
                <hr className="my-4"/>
                
                {/* Explore Neighbourhood */}
                {/* <div className="bg-white rounded-lg pt-4 md:pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 md:mb-4">Explore Neighbourhood</h2>
                  <div style={{ position: 'relative', zIndex: 1, height: '300px' }}>
                    <PropertyMap property={unique} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-xs md:text-sm"><img src={city} alt='city'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Downtown: 15 mins by car</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs md:text-sm"><img src={parkIcon} alt='park'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Park: 10 mins by car</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center">
                          <span className="text-red-600 text-xs md:text-sm"><img src={hospital} alt='hospital'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Hospital: 8 mins by car</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-xs md:text-sm"><img src={medical} alt='medical'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Pharmacy: 5 mins by car</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center">
                          <span className="text-yellow-600 text-xs md:text-sm"><img src={bus} alt='bus'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Bus Station: 25 mins by car</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8  rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 text-xs md:text-sm"><img src={train} alt='train'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Train Station: 35 mins by car</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 p-2 bg-gray-50 rounded">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 text-xs md:text-sm"><img src={aeroplane} alt='aeroplane'/></span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm md:text-base">Airport: 45 mins by car</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                
                {/* <hr className="my-4"/> */}
                
                {/* Market Update */}
                {/* <div className="bg-white">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 md:mb-4">Market Update</h2>
                  <div className="flex flex-col sm:flex-row justify-between gap-3 bg-gray-100 md:bg-gray-200 p-3 md:p-4 ">
                    <div className="text-center p-2 md:p-4 rounded-lg bg-white md:bg-transparent shadow-sm md:shadow-none">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">$600K</div>
                      <div className="text-xs md:text-sm text-gray-800 font-semibold">Average List Price</div>
                    </div>
                    <div className="text-center p-2 md:p-4 rounded-lg bg-white md:bg-transparent shadow-sm md:shadow-none">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">3</div>
                      <div className="text-xs md:text-sm text-gray-800 font-semibold">Current Listings</div>
                    </div>
                    <div className="text-center p-2 md:p-4 rounded-lg bg-white md:bg-transparent shadow-sm md:shadow-none">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">88</div>
                      <div className="text-xs md:text-sm text-gray-800 font-semibold">Average Active Days on Market</div>
                    </div>
                  </div>
                </div> */}
                
                {/* Explore Similar Properties */}
                <div className="mt-6 md:mt-8">
                  <RelatedItem listings={listings} allData={allData} id={id} />
                </div>
              </div>
              
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
      
      {/* Mobile Property Stats - Fixed at bottom on mobile */}
             <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <img className='w-4 h-4' src={bed} alt='bed'/>
              <span className="text-sm">{unique.BedroomsTotal || 0} Bed</span>
            </div>
            <div className="flex items-center gap-1">
              <img className='w-4 h-4' src={bathroom} alt='bathroom'/>
              <span className="text-sm">{unique.BathroomsTotalInteger || 0} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <img className='w-4 h-4' src={square} alt='square'/>
              <span className="text-sm">{unique.BuildingAreaTotal || 0} sqft</span>
            </div>
          </div>
          <div className="text-lg font-semibold">${unique.ListPrice?.toLocaleString() || 'N/A'}</div>
        </div>
      </div>
      

    </div>
          <Footer/>
    </div>
  )
}

export default DetailSingleItem;
