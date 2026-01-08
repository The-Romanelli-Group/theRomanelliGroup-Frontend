import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Families = () => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0);
  const [fullData, setFullData] = useState(false)
  const [visibleImages, setVisibleImages] = useState(3);
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_FEATURE_LISTINGS}/served-families?populate=Image`);
        const apiData = response.data.data;
        
        const mappedFamilies = apiData.map(family => ({
          url: family.Image?.formats?.medium?.url ||
          family.Image?.url
            ? family.Image.url
            : "",
          title: family.Title,
          name: family.Name
        }));
        
        setImages(mappedFamilies);
      } catch (error) {
        console.error('Error fetching families:', error);
      }
    };
    
    fetchFamilies();
  }, []);
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);
  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(2); // Mobile: 1 image
      } else if (window.innerWidth < 1024) {
        setVisibleImages(3); // Tablet: 2 images
      } else {
        setVisibleImages(4); // Desktop: 3 images
      }
    };
    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []); // Show 4 images at a time (2 full + 2 halves)

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };



  return (
    <>
      <div className="container px-7 mx-auto text-gray-900 font-dmsans">
        <div className="flex flex-col text-center w-full mb-20 pt-10">
          <h1 className="sm:text-5xl text-2xl   font-bold title-font mb-4 text-gray-900">
            Families We’ve <span className="italic font-playfair ">Served</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            When you work with us, you are a part of a bigger picture that values local communities, fostering meaningful relationships with everyone involved.
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-full mx-auto mb-10">
        {/* Image Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleImages)}%)`,
              width: `${images.length * (100 / visibleImages)}%`,
            }}
          >
       {images.concat(images).map((img, i) => {
  const isExpanded = expandedIndex === i; // Check if THIS specific item is expanded

  return (
    <div
      key={i}
      className="relative group"
      style={{
        flex: `0 0 ${100 / visibleImages}%`,
        padding: "0 4px",
      }}
    >
      <img
        src={img.url}
        alt={`Slide ${i}`}
        className="w-full h-full object-cover rounded-lg"
        style={{ aspectRatio: "1 / 1" }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        <div className="text-white text-md text-left font-regular italic self-start mb-2">
          {/* Logic: If expanded, show 100 words, else 40 */}
          "{img.title.split(" ").slice(0, isExpanded ? 150 : 40).join(" ")}
          {img.title.split(" ").length > (isExpanded ? 150 : 40) && "..."}"

          {/* Toggle Button */}
          {img.title.split(" ").length > 40 && (
            <span 
              className="ml-2 cursor-pointer underline not-italic text-blue-400" 
              onClick={(e) => {
                e.stopPropagation(); // Prevents clicking the overlay from doing other things
                setExpandedIndex(isExpanded ? null : i);
              }}
            >
              {!isExpanded && "read more"}
            </span>
          )}
        </div>

        {/* Name at bottom-right */}
        <p className="text-white text-sm font-medium self-end pr-4">- {img.name}</p>
      </div>
    </div>
  );
})}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
          onClick={prevSlide}
        >

          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span>Prev</span>
        </button>


        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
          onClick={nextSlide}
        >
          <span>Next</span>

          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>

      </div>
      <div className="flex justify-center mb-16">
        <button className="inline-flex text-white bg-backgroundColor border-0 py-2 md:py-4 px-6 focus:outline-none   text-lg" onClick={()=> window.location.href = "/contact-us"}>Join Our Happy Families!</button>
      </div>
    </>
  );
};

export default Families;
