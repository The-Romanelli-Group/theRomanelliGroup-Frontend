import React from 'react'
import { useLocation } from 'react-router-dom';
import Carousel from './single/carousel';
import Form from './single/form';
import RelatedItem from './single/relatedItem';
import { aeroplane, bathroom, bed, bus, city, globe, hoa, hospital, hvac, medical, park, parkIcon, propType, size, square, train, year } from '../../../assets/allImg';
import Footer from '../Default Pages/footer';
import PropertyMap from './single/propertymap';

const DetailSingleItem = () => {
  const location = useLocation();
  
  // Get data from location.state or sessionStorage
  let id, listings, allData;
  if (location.state) {
    ({id, listings, allData} = location.state);
  } else {
    // Fallback to sessionStorage for new tab
    const storedData = sessionStorage.getItem('propertyData');
    if (storedData) {
      ({id, listings, allData} = JSON.parse(storedData));
    }
  }
  
  const unique = allData?.find(item => item.ListingKey === id);
  
  if (!unique) {
    return <p>No property found</p>; // Handles page refresh without state
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
        <Carousel image={unique.Media} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column - Property Overview & Details */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          
          {/* Property Overview */}
          <div className="bg-white rounded-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 md:mb-4 text-left">Property Overview</h1>
            <hr className='pb-2'/>
            
            <div className='flex flex-col md:flex-row justify-between gap-4'>
              {/* Price and Basic Info */}
              <div className="mb-4 md:mb-6 text-left w-full md:w-3/4">
                <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                  ${unique.ListPrice?.toLocaleString() || 'N/A'}
                </div>
                <div className="text-base sm:text-lg text-gray-900 mb-2">
                  {unique.UnparsedAddress || `${unique.StreetNumber} ${unique.StreetName} ${unique.City} ${unique.StateOrProvince} ${unique.PostalCode}`}
                </div>
                <div className="text-sm text-gray-900 mb-4">
                  Estimation payment provided by {unique.ListOfficeName || 'Keller Williams Realty Inc.'} is ${Math.round((unique.ListPrice || 0) * 0.005)}/mo
                </div>
                <hr className="my-4"/>
                
                <div className="mb-4 md:mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {unique.PublicRemarks || 'No description available.'}
                  </p>
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
              
              {/* Property Stats - Right Sidebar (hidden on mobile, visible on tablet and desktop) */}
              <div className='hidden md:block w-full md:w-1/4'>
                <div className="gap-4 text-sm text-gray-600 sticky top-4">
                  <div className="flex items-center gap-1 mb-2">
                    <img className='w-4 h-4' src={bed} alt='bed'/>
                    <span>{unique.BedroomsTotal || 0} Bed</span>
                  </div>
                  <hr className='py-2 mt-1'/>
                  <div className="flex items-center gap-1 mb-2">
                    <img className='w-4 h-4' src={bathroom} alt='bathroom'/>
                    <span>{unique.BathroomsTotalInteger || 0} Bathroom</span>
                  </div>
                  <hr className='py-2 mt-1'/>
                  <div className="flex items-center gap-1 mb-2">
                    <img className='w-4 h-4' src={square} alt='square'/>
                    <span>{unique.BuildingAreaTotal || 0} sqft</span>
                  </div>
                  <hr className='py-2 mt-1'/>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pb-3">
                    <span className="px-4 py-2 bg-green-600 text-white text-xs rounded-full">
                      {unique?.StandardStatus}
                    </span>
                    <span className="px-4 py-2 bg-black text-white text-xs rounded-full">
                      For {unique?.PropertyType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="lg:col-span-1 ml-0 order-last">
          <div className="sticky top-4">
            <Form />
          </div>
        </div>
      </div>
      
      {/* Mobile Property Stats - Fixed at bottom on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-3 z-10">
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