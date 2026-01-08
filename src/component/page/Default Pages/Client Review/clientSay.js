import { useEffect, useState, useCallback } from "react";
import TestimonialCard from "./testionialCard";
import axios from "axios";

const ClientSay = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_FEATURE_LISTINGS}/reviewdatas`);
        const apiData = response.data.data;
        
        // Map API data to match expected format
        const mappedReviews = apiData.map((review, index) => ({
          id: review.id || index,
          name: review.Name || 'Anonymous',
          rating: review.Rating || 5,
          comment: review.Comment || '',
          image: review.Image_url || '',
          url: review.GoogleReviewsUrl || ''
        }));
        setReviews(mappedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    
    fetchReviews();
  }, []);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) setVisibleImages(3);
      else if (window.innerWidth < 1024) setVisibleImages(3.7);
      else setVisibleImages(5.3);
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const nextSlide = useCallback(() => {
    setReviews(prevReviews => {
      if (prevReviews.length === 0) return prevReviews;
      return [...prevReviews.slice(1), prevReviews[0]];
    });
    setIndex(0);
  }, []);

  const prevSlide = useCallback(() => {
    setReviews(prevReviews => {
      if (prevReviews.length === 0) return prevReviews;
      return [prevReviews[prevReviews.length - 1], ...prevReviews.slice(0, -1)];
    });
    setIndex(0);
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [reviews.length, nextSlide]);


  return (
    <div>
      <div className="container px-5 pt-12 mx-auto text-gray-900">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-900">
            What Our <span className="italic font-playfair">Clients Say</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Hear from our satisfied clients and explore their experiences with us.
          </p>
        </div>
      </div>

      <section className="text-gray-600 body-font mb-0 md:mb-12">
        <div className="container relative px-5 mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleImages)}%)`,
                width: `${reviews.length  * (100 / visibleImages)}%`,
              }}
            >
              {reviews.length > 0 ? (
                reviews.concat(reviews).map((testimonial, i) => (
                  <div key={`${testimonial.id}-${i}`} className="xl:w-1/4 md:w-1/2 p-1" style={{ flex: `0 0 ${100 / visibleImages}%` }}>
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))
              ) : (
                <p className="text-center w-full text-gray-500">Loading reviews...</p>
              )}
            </div>
          </div>

          {/* Arrows */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
            onClick={prevSlide}
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
            onClick={nextSlide}
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientSay;