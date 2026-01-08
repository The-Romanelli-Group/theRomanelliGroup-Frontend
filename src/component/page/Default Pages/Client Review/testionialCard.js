import React from 'react'
import StarRating from './starRating';

const TestimonialCard = ({ testimonial }) => {
  const maxLength = 300; // Character limit for truncated text
  const truncatedText =
    testimonial.comment.length > maxLength
      ? testimonial.comment.substring(0, maxLength) + "..."
      : testimonial.comment;
  const imageUrl =testimonial.image
  return (
    <article className="bg-gray-200 p-6 text-black rounded-lg">
      <div className="pb-2">
        <div className="flex justify-between items-center">
          <StarRating rating={testimonial.rating} />
        </div>
        <div className="border border-gray-300 mt-2"></div>
      </div>
      <p
        className="leading-relaxed md:text-[14px] xl:text-base text-xs text-left h-[250px] overflow-hidden text-ellipsis"
      >
        {truncatedText}
        {testimonial.comment.length > maxLength && (
          <button
            onClick={() => window.open(testimonial.url, "_blank")}
            className="text-blue-600 text-sm ml-2"
          >
            Read More
          </button>
        )}
      </p>

      <div className="border border-gray-300 mt-2"></div>
      <div className="h-full flex items-start border-gray-200 border p-2 mt-2 rounded-lg">
        <img
          alt={testimonial.name}
          className="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
          src={imageUrl}
          loading="lazy"
        />
        <div className="flex-grow items-start text-xs">
          <h2 className="text-gray-900 title-font font-medium text-left">
            {testimonial.name.split(" ").length === 1
              ? testimonial.name
              : `${testimonial.name.split(" ")[0]} ${testimonial.name.split(" ")[1][0]}.`}
          </h2>
          <p className="text-gray-900 text-left">{testimonial.role || "Customer"}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard