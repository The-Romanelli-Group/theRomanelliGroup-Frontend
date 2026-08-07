import React from 'react'
import { stay_updated } from '../../../assets/allImg';

const StayUpdated = () => {
    return (
  <section className="bg-backgroundColor py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full border border-[#A61E22]/30 bg-[#A61E22]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D64B4F]">
            Newsletter
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight text-white font-Montserrat">
            Stay Updated with the{" "}
            <span className="font-playfair italic font-normal text-[#A61E22]">
              Latest in Real Estate
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl">
            Get expert insights, market trends, new listings, buying tips and
            exclusive updates delivered straight to your inbox.
          </p>

          <div className="mt-10 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7">

            <div className="relative">

              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 7L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5H5C3.895 5 3 5.895 3 7V17C3 18.105 3.895 19 5 19H19C20.105 19 21 18.105 21 17V7C21 5.895 20.105 5 19 5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>

              </span>

              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  w-full
                  h-16
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  pl-16
                  pr-5
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#A61E22]
                "
              />

            </div>

            <button
              className="
                mt-5
                w-full
                h-14
                rounded-2xl
                bg-[#A61E22]
                text-white
                font-semibold
                transition
                hover:bg-[#8E1A1D]
              "
            >
              Subscribe Now
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Join thousands of Central Ohio homeowners and buyers receiving
              monthly market insights.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <img
            src={stay_updated}
            alt="Stay Updated"
            loading="lazy"
            className="
              w-full
              rounded-[36px]
              border
              border-white/10
              object-cover
              shadow-2xl
            "
          />

        </div>

      </div>

    </div>
  </section>
);
  };
  
  export default StayUpdated;