import React, { useEffect, useState } from "react";
import { getGoogleReviews } from "../../../../Service/reviewService";

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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold">
          Google Reviews
        </h2>

        <p className="mt-3 text-gray-600">
          {reviews.length} Reviews Loaded
        </p>
      </div>
    </section>
  );
};

export default GoogleReviews;