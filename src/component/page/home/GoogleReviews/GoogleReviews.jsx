import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getGoogleReviews } from "../../../../Service/reviewService";
import GoogleReviewCard from "./GoogleReviewCard";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await getGoogleReviews();
        setReviews(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadReviews();
  }, []);
            const [emblaRef, emblaApi] = useEmblaCarousel({
            loop: true,
            align: "start",
            });
  return (
  <section className="py-12 bg-white overflow-hidden">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >

        <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
          GOOGLE REVIEWS
        </p>

        <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">
          Trusted By{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Homeowners
          </span>
        </h2>

       <p className="mt-4 text-[15px] md:text-lg leading-7 text-gray-600">
          Honest reviews from buyers and sellers who worked with
          The Romanelli Group.
        </p>

       <div className="mt-5 flex items-center justify-center gap-2 md:gap-3 flex-wrap">

          <div className="flex text-yellow-400 text-lg md:text-2xl">
            ★★★★★
          </div>

          <span className="text-base md:text-lg font-semibold text-gray-900">
            5.0
          </span>

          <span className="text-sm md:text-base text-gray-500">
            ({reviews.length} Google Reviews)
          </span>

        </div>

      </motion.div>
<div className="relative mt-8 md:mt-12">

  {/* Left Arrow */}

  <button
    onClick={() => emblaApi?.scrollPrev()}
    className="
      hidden
      md:flex
      absolute
      left-[-28px]
      lg:left-[-60px]
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      rounded-full
      bg-white
      shadow-xl
      items-center
      justify-center
      hover:bg-[#A61E22]
      hover:text-white
      transition
    "
  >
    <ChevronLeft size={24} />
  </button>

  {/* Right Arrow */}

  <button
    onClick={() => emblaApi?.scrollNext()}
    className="
      hidden
      md:flex
      absolute
      right-[-28px]
      lg:right-[-60px]
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      rounded-full
      bg-white
      shadow-xl
      items-center
      justify-center
      hover:bg-[#A61E22]
      hover:text-white
      transition
    "
  >
    <ChevronRight size={24} />
  </button>

  <div ref={emblaRef} className="overflow-hidden">
    <div className="flex">

      {reviews.map((review) => (

        <div
          key={review.id}
          className="
           min-w-[88%]
            sm:min-w-[65%]
            lg:min-w-[31%]
            px-4
          "
        >
          <GoogleReviewCard review={review} />
        </div>

      ))}

    </div>
  </div>

</div>
    </div>

  </section>
);
};

export default GoogleReviews;