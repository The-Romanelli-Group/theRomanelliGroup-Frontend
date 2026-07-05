import React, { useEffect, useState } from "react";
import { getGoogleReviews } from "../../../../Service/reviewService";
import { motion } from "framer-motion";

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

  return (
  <section className="py-24 bg-white overflow-hidden">

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

        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
          Trusted By{" "}
          <span className="font-playfair italic font-normal text-[#A61E22]">
            Homeowners
          </span>
        </h2>

        <p className="mt-6 text-lg leading-7 text-gray-600">
          Honest reviews from buyers and sellers who worked with
          The Romanelli Group.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">

          <div className="flex text-yellow-400 text-2xl">
            ★★★★★
          </div>

          <span className="text-lg font-semibold text-gray-900">
            5.0
          </span>

          <span className="text-gray-500">
            ({reviews.length} Google Reviews)
          </span>

        </div>

      </motion.div>

    </div>

  </section>
);
};

export default GoogleReviews;