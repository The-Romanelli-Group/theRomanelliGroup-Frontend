import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GoogleLogo from "../../../../assets/images/illustrations/GoogleLogo.svg";

import { getGoogleReviews } from "../../../../Service/reviewService";
import GoogleReviewCard from "./GoogleReviewCard";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
  console.log("Reviews:", reviews);
  console.log("Count:", reviews.length);
}, [reviews]);
  const displayReviews = reviews
  .filter(
    (review) =>
      review.rating >= 5 &&
      review.comment &&
      review.comment.trim().length > 80
  )
  .slice(0, 12);

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
<section className="py-8 md:py-12 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
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

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">
        Honest reviews from buyers and sellers who worked with
        The Romanelli Group.
      </p>

      <div className="mt-5 flex flex-col items-center">

        <div className="flex items-center gap-3">

          <img
            src={GoogleLogo}
            alt="Google"
            className="w-8 h-8 md:w-10 md:h-10"
          />

          <div className="flex text-yellow-400 text-lg md:text-2xl">
            ★★★★★
          </div>

          <span className="text-lg md:text-xl font-bold text-gray-900">
            5.0
          </span>

        </div>

        <p className="mt-2 text-sm md:text-base text-gray-500">
          Based on {reviews.length} Google Reviews
        </p>

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
          bg-white/90
          backdrop-blur-xl
          shadow-xl
          items-center
          justify-center
          text-gray-800
          transition-all
          duration-300
          hover:bg-[#A61E22]
          hover:text-white
          hover:scale-105
          active:scale-95
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
          bg-white/90
          backdrop-blur-xl
          shadow-xl
          items-center
          justify-center
          text-gray-800
          transition-all
          duration-300
          hover:bg-[#A61E22]
          hover:text-white
          hover:scale-105
          active:scale-95
        "
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={emblaRef}
        className="overflow-hidden"
      >

        <div className="flex">

          {displayReviews.map((review) => (

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