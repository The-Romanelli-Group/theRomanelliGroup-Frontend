import React from 'react'
import { icon1_url, icon2_url, icon3_url, image1_url, image2_url } from '../../../assets/allImg'

const Succeed = () => {

  return (
    <div>
      <section className=" body-font text-backgroundColor">
        <div className="container px-5 lg:px-24 pt-8 mx-auto ">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-1/2 w-full   font-bold lg:mb-0 text-left ml-4 lg:ml-8">
              <h1 className="sm:text-5xl text-2xl title-font mb-2">How We Can Help </h1>
              <h1 className="sm:text-5xl text-2xl title-font mb-2">You <span className='font-playfair italic'>Succeed</span></h1>
            </div>
          </div></div></section>
      <section className="text-gray-600 body-font  lg:px-24 px-5">
        <div className="container flex flex-wrap px-5 mx-auto ">
          <div className="md:w-1/2  md:py-8  mb-10 md:mb-0 pb-10">
            <p className="leading-relaxed xl:px-4 text-lg text-left xl:pr-6 pb-4">Whether you're buying, selling, or growing your career, we’re here to guide you every step of the way.</p>
            <div className="container flex flex-wrap  mx-auto ">
              <div className="md:w-1/2 w-full  md:py-8 mb-10 md:mb-0 pb-10 ">
                <img src={image1_url} alt={image1_url} /></div>
              <div className="md:w-1/2 w-full md:pt-40 md:py-8 mb-10 md:mb-0 pb-10 ">
                <img src={image2_url} alt={image2_url} /></div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <section className="text-gray-600 body-font">
              <div className="container px-5 mx-auto md:mb-4 xl:mb-0">
                <div className="flex flex-wrap sm:-m-4 -mx-4  -mt-4 md:space-y-0 space-y-6 text-left">
                  <div className="p-4 flex bg-gray-100">
                    <div className="w-12 h-12 inline-flex items-center justify-center  bg-red-800 text-indigo-500 mb-4 flex-shrink-0">
                      <img src={icon1_url} alt={icon1_url}/>
                    </div>
                    <div className="flex-grow pl-6 ">
                      <h2 className="text-gray-900 text-xl title-font font-semibold mb-2">Buy Your New Home</h2>
                      <p className="leading-relaxed text-base text-black">On the hunt for your dream home or the perfect investment property in Central Ohio? We've got the keys to your next big win!</p>
                      <button onClick={() => window.location.href = "/buy"} className='bg-black text-white text-xs md:text-sm px-5 py-2 my-1 rounded-md'>Buy a Property</button>
                    </div>
                  </div>
                  <div className="p-4 flex bg-gray-100">
                    <div className="w-12 h-12 inline-flex items-center justify-center  bg-red-800 text-indigo-500 mb-4 flex-shrink-0">
                      <img src={icon2_url} alt={icon2_url}/>
                    </div>
                    <div className="flex-grow pl-6 ">
                      <h2 className="text-gray-900 text-xl title-font font-semibold mb-2">Sell Your Home Faster</h2>
                      <p className="leading-relaxed text-base text-black">In a market that's moving at warp speed, how do you crack the best deal? Let us help your property steal the spotlight and get you top dollar!</p>
                      <button onClick={() => window.location.href = "/sell"} className='bg-black text-white text-xs md:text-sm px-5 py-2 my-1 rounded-md'>Get a Free Valuation</button>
                    </div>
                  </div>
                  <div className="p-4 flex bg-gray-100">
                    <div className="w-12 h-12 inline-flex items-center justify-center  bg-red-800 text-indigo-500 mb-4 flex-shrink-0">
                      <img src={icon3_url} alt={icon3_url} />
                    </div>
                    <div className="flex-grow pl-6 mb-0">
                      <h2 className="text-gray-900 text-xl title-font font-semibold mb-2">Grow Your Career</h2>
                      <p className="leading-relaxed text-base text-black">After more than   10 years of selling real estate, we’ve learned how to create extraordinary experiences for agents—without requiring them to run themselves ragged, sacrifice family time, or struggle to grow their business.</p>
                      <button className='bg-black text-white text-xs md:text-sm px-5 py-2 my-1 rounded-md' onClick={() => window.location.href = "/contact-us"}>Join Our Team</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Succeed