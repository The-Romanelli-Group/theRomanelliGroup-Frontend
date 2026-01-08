import React from 'react'
import { stay_updated } from '../../../assets/allImg';

const StayUpdated = () => {
    return (
      <section className="bg-white text-gray-900 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content - Now vertically centered */}
            <div className="lg:w-1/2 w-full lg:pr-10 flex flex-col  text-left justify-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className='italic font-playfair'>Stay Updated</span> with the Latest in Real Estate!
              </h1>
  
              <p className="text-lg text-gray-700 mb-6">
                Subscribe to our newsletter for property tips, market trends, and exclusive listings directly to your inbox.
              </p>
              
              <div className="w-full ">
                <div className="relative mb-4">
                  <span className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="black" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <input 
                    className='bg-gray-100 w-full py-3 px-4 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800' 
                    placeholder='Enter your email address' 
                  />
                </div>
                
                <button 
                  type='button' 
                  className='bg-red-800 hover:bg-red-900 w-full py-3 px-6 text-white rounded-lg transition duration-300 mb-4'
                >
                  Subscribe Now
                </button>
                
                <p className="text-gray-600 text-sm">
                  Join 10,000+ subscribers who receive expert real estate insights.
                </p>
              </div>
            </div>
  
            {/* Image - Now properly aligned with text */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <img 
                alt="Real estate newsletter" 
                className="w-full h-auto max-h-96 object-cover object-center rounded-lg shadow-lg" 
                src={stay_updated}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StayUpdated;