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
  <section className="bg-backgroundColor py-12 md:py-20 overflow-hidden">

    {/* Header */}

    <div className="max-w-3xl mx-auto text-center px-5">

      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        SELLER RESOURCES
      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">
        Resources to Sell{" "}
        <span className="font-playfair italic font-normal text-[#A61E22]">
          Smarter
        </span>
      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300">
        Explore expert guides, market insights and proven selling strategies
        designed to help you maximize your home's value.
      </p>

    </div>

    {/* Carousel */}

    <div className="relative overflow-hidden mt-14">

      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * (100 / visibleImages)}%)`,
          width: `${(data.length / visibleImages) * 100}%`,
        }}
      >

        {data.map((item, idx) => (
          <div
            key={idx}
            style={{
              flex: `0 0 ${100 / visibleImages}%`,
              maxWidth: `${100 / visibleImages}%`,
            }}
          >

            <div className="group relative mx-2 overflow-hidden rounded-[28px] shadow-2xl">

              {/* Media */}

              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    w-full
                    h-[320px]
                    md:h-[420px]
                    lg:h-[500px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="
                    w-full
                    h-[320px]
                    md:h-[420px]
                    lg:h-[500px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6">

                {/* Badge */}

                <div className="absolute top-5 left-5 rounded-full bg-[#A61E22] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </div>

                {/* Description */}

                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-left text-white">
                  {item.description}
                </h3>

                {/* Buttons */}

                <div className="flex gap-3 mt-6">

                  <button
                    className="
                      flex-1
                      rounded-xl
                      bg-[#A61E22]
                      py-3
                      font-semibold
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:bg-[#8D181B]
                      hover:scale-[1.02]
                    "
                  >
                    {item.button}
                  </button>

                  <button
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-white/15
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      hover:bg-[#A61E22]
                    "
                  >
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

      {/* Navigation */}

      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          md:w-14
          md:h-14
          rounded-full
          bg-white
          shadow-xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <svg width="18" height="16" viewBox="0 0 22 18" fill="none">
          <path
            d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          md:w-14
          md:h-14
          rounded-full
          bg-white
          shadow-xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <svg width="18" height="16" viewBox="0 0 22 18" fill="none">
          <path
            d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </div>

  </section>
);
};

export default SellSmarter;