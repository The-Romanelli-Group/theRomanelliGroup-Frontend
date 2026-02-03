import React, { useEffect, useState } from 'react'

const Carousel = ({ image }) => {
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(2);
      } else if (window.innerWidth < 1024) {
        setVisibleImages(3);
      } else {
        setVisibleImages(4);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  useEffect(() => {
    if (image && loadedCount >= visibleImages) {
      setImagesLoaded(true);
    }
  }, [loadedCount, image, visibleImages]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available';
    setLoadedCount(prev => prev + 1);
  };

  const nextSlide = () => {
    if (!image) return;
    setIndex((prevIndex) => {
      const maxIndex = image.length - visibleImages;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    if (!image) return;
    setIndex((prevIndex) => {
      const maxIndex = image.length - visibleImages;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  useEffect(() => {
    if (!image) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [image]);

  if (!image || image.length === 0) {
    return (
      <div className="relative w-full max-w-full mx-auto mb-10 h-96 bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-gray-500">Loading images...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full max-w-full mx-auto mb-10">
        {/* Image Container */}
        <div className="overflow-hidden bg-gray-200" style={{ minHeight: '400px' }}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleImages)}%)`,
              width: `100%`,
            }}
          >
            {image?.map((img, i) => (
              <div
                key={i}
                className="relative group"
                style={{
                  flex: `0 0 ${100 / visibleImages}%`,
                  padding: "0 4px",
                }}
              >
                <img
                  src={img.MediaURL}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover cursor-pointer bg-gray-200"
                  style={{ aspectRatio: "1 / 1", minHeight: '400px' }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  onClick={() => {
                    setFullscreenIndex(i);
                    setIsFullscreen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
         {/* Navigation Buttons */}
        <>
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
        </>
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-60"
            onClick={() => setIsFullscreen(false)}
          >
            ×
          </button>
          
          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-60"
            onClick={() => setFullscreenIndex((prev) => (prev - 1 + image.length) % image.length)}
          >
            ‹
          </button>
          
          {/* Image */}
          <img
            src={image[fullscreenIndex]?.MediaURL}
            alt={`Fullscreen ${fullscreenIndex}`}
            className="max-w-auto max-h-[80%] object-contain"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
            }}
          />
          
          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-60"
            onClick={() => setFullscreenIndex((prev) => (prev + 1) % image.length)}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default Carousel