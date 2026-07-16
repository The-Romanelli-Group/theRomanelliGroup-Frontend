import React from 'react'
import { icon1_url, icon2_url, icon3_url, image1_url, image2_url } from '../../../assets/allImg'
import { motion } from "framer-motion";

const Succeed = () => {

 return (
<section className="py-8 md:py-12 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="max-w-3xl mx-auto text-center"
    >

      {/* <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        HOW WE CAN HELP
      </p> */}

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">

        How We Can Help{" "}

        <span className="font-playfair italic font-normal text-[#A61E22]">
          You Succeed
        </span>

      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">

        Whether you're buying, selling, or growing your real estate career,
        we're here to guide you every step of the way with proven strategies
        and local expertise.

      </p>

    </motion.div>

    {/* Content */}

    <div className="grid lg:grid-cols-2 gap-16 mt-6 md:mt-10">

      {/* Left */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .75 }}
        className="relative"
      >

        <div className="relative h-[620px]">

          {/* Large Image */}

          <div
            className="
              absolute
              left-0
              top-0
              w-[75%]
              rounded-[28px]
              overflow-hidden
              shadow-xl
              group
            "
          >

            <img
              src={image1_url}
              alt="Buying a home"
              className="
                w-full
                h-[460px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

          </div>

          {/* Small Image */}

          <div
            className="
              absolute
              bottom-0
              right-0
              w-[55%]
              rounded-[28px]
              overflow-hidden
              border-8
              border-white
              shadow-xl
              group
            "
          >

            <img
              src={image2_url}
              alt="Real estate"
              className="
                w-full
                h-[300px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

          </div>

        </div>

      </motion.div>

      {/* Right */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .75, delay: .15 }}
        className="space-y-6"
      >

        {/* Buy */}

        <div
          onClick={() => (window.location.href = "/buy")}
          className="
            group
            cursor-pointer
            rounded-[28px]
            border
            border-gray-200
            bg-white
            p-7
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          <div className="flex items-start gap-5">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#A61E22]
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <img
                src={icon1_url}
                alt=""
                className="w-8 h-8"
              />

            </div>

            <div className="flex-1">

              <h3 className="text-3xl font-bold text-gray-900">

                Buy Your Dream Home

              </h3>

              <p className="mt-3 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">

                Find the perfect home with expert local guidance,
                strategic negotiation and support from your first
                showing to closing day.

              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  font-semibold
                  text-[#A61E22]
                  group-hover:translate-x-1
                  transition-transform
                "
              >

                Explore Buying →

              </div>

            </div>

          </div>

        </div>

        {/* Sell */}

        <div
          onClick={() => (window.location.href = "/sell")}
          className="
            group
            cursor-pointer
            rounded-[28px]
            border
            border-gray-200
            bg-white
            p-7
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          <div className="flex items-start gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#A61E22] flex items-center justify-center shrink-0">

              <img src={icon2_url} alt="" className="w-8 h-8" />

            </div>

            <div className="flex-1">

              <h3 className="text-3xl font-bold text-gray-900">
                Sell Your Home Faster
              </h3>

              <p className="mt-3 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">
                Maximize your home's value with expert pricing, powerful marketing
                and a proven strategy that attracts qualified buyers.
              </p>

              <div className="mt-6 flex items-center font-semibold text-[#A61E22] group-hover:translate-x-1 transition-transform">
                Get Your Home Value →
              </div>

            </div>

          </div>

        </div>

        {/* Career */}

        <div
          onClick={() => (window.location.href = "/contact-us")}
          className="
            group
            cursor-pointer
            rounded-[28px]
            border
            border-gray-200
            bg-white
            p-7
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          <div className="flex items-start gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#A61E22] flex items-center justify-center shrink-0">

              <img src={icon3_url} alt="" className="w-8 h-8" />

            </div>

            <div className="flex-1">

              <h3 className="text-3xl font-bold text-gray-900">
                Grow Your Career
              </h3>

              <p className="mt-3 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">
                Join one of Central Ohio's top-performing real estate teams and
                build your business with proven systems, mentorship and support.
              </p>

              <div className="mt-6 flex items-center font-semibold text-[#A61E22] group-hover:translate-x-1 transition-transform">
                Join Our Team →
              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
);
}

export default Succeed