import React from "react";

const GoogleReviewCard = ({ review }) => {
  return (
    <article
      className="
        group
        bg-white
        rounded-[24px]
        border
        border-gray-200
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        h-full
        flex
        flex-col
        overflow-hidden
      "
    >
      <div className="p-7 flex flex-col flex-1">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex text-yellow-400 text-lg">
            {"★".repeat(review.rating)}
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-[#A61E22]">
            Google Review
          </span>

        </div>

        {/* Quote */}

        <div className="mt-6 text-5xl leading-none text-[#A61E22] font-playfair">
          “
        </div>

        {/* Review */}

        <p className="mt-4 text-gray-600 leading-7 line-clamp-6 flex-1 italic">
          {review.comment}
        </p>

        {/* Button */}

        <button
          onClick={() => window.open(review.url, "_blank")}
          className="
            mt-5
            text-left
            font-semibold
            text-[#A61E22]
            hover:underline
          "
        >
          Read Full Review →
        </button>

        {/* Divider */}

        <div className="border-t border-gray-200 mt-6 pt-5 flex items-center gap-4">

          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold text-gray-900">
              {review.name}
            </h3>

            <p className="text-sm text-gray-500">
              Verified Google Review
            </p>

          </div>

        </div>

      </div>
    </article>
  );
};

export default GoogleReviewCard;