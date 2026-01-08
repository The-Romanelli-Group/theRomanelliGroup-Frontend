import React, { useEffect, useState } from "react";
import { sellsmarter_step1, sellsmarter_step2, sellsmarter_step3, sellsmarter_step4 } from "../../../assets/allImg";

const data = [
  {
    type: "video",
    src: sellsmarter_step1,
    title: "Video Tutorials",
    description: "How to Stage Your Home for Maximum Impact",
    button: "Watch Now"
  },
  {
    type: "image",
    src: sellsmarter_step2,
    title: "Market Insights",
    description: "Central Ohio Real Estate Trends (2023 Report)",
    button: "Read More"
  },
  {
    type: "image",
    src: sellsmarter_step3,
    title: "Seller FAQs",
    description: "Do I Need a Home Inspection Before Selling?",
    button: "Learn More"
  },
  {
    type: "image",
    src: sellsmarter_step4,
    title: "Guides & Checklists",
    description: "10 Steps to Prepare Your Home for Sale",
    button: "Download PDF"
  },
]


const SellSmarter = () => {
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(1); // Default to 1 item for mobile



  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(2.1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2.9); // Tablet: 2 items
      } else {
        setVisibleImages(3.5); // Desktop: 3 items
      }
    };

    // Initial call to set visible images
    updateVisibleImages();

    // Add event listener for window resize
    window.addEventListener("resize", updateVisibleImages);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex < data.length - visibleImages + 1 && window.innerWidth < 640) {
        return prevIndex + 1;
      } else if ((prevIndex < data.length - visibleImages && window.innerWidth > 640)) {
        return prevIndex + 1;
      }
      return prevIndex; // Stop at the last batch of items
    });
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [index, visibleImages]); // Add visibleImages to dependency array

  return (
    <div className="bg-backgroundColor text-white py-12">
      <div className="container px-5 mx-auto text-center">
        <h1 className="sm:text-4xl text-2xl font-bold mb-4">
          Resources to Help You Sell{" "}
          <span className="italic  font-playfair ">Smarter</span>
        </h1>
        <p className="lg:w-2/3 mx-auto text-xl">
          Explore our expert resources to make informed decisions and maximize
          your property’s potential.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="relative overflow-hidden  mt-8">
        <div
          className="flex transition-transform duration-500 gap-2 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleImages)}%)`,
            width: `${(data.length / visibleImages) * 100}%`,
          }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="w-full"
              style={{
                flex: `0 0 ${100 / visibleImages}%`,
                maxWidth: `${100 / visibleImages}%`,
              }}
            >
              <div className="relative w-full mx-2">
                {/* Media (Image or Video) */}
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="gallery"
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover "
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover "
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white ">
                  {/* Title */}
                  <div className="absolute top-2 left-2 bg-white py-1 px-2 text-black font-semibold ">
                    {item.title}
                  </div>

                  {/* Description */}
                  <p className="text-xl sm:text-3xl font-semibold mb-3 text-left">
                    {item.description}
                  </p>

                  {/* Button Group */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-red-700 py-2 text-sm sm:text-lg font-semibold text-white  transition hover:bg-red-800">
                      {item.button}
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 flex items-center justify-center  transition hover:bg-red-800">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.333 14.665L14.666 1.332M14.666 1.332H2.666M14.666 1.332V13.332"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white text-black px-2 py-1 sm:px-3 sm:py-2 flex items-center space-x-2"
          onClick={prevSlide}
        >

          <svg width="18" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span className="hidden sm:inline">Prev</span>
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white text-black px-2 py-1 sm:px-3 sm:py-2 flex items-center space-x-2"
          onClick={nextSlide}
        >
          <span className="hidden sm:inline">Next</span>

          <svg width="18" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default SellSmarter;