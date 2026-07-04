import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Heart,
  Share2,
} from "lucide-react";

import { useSwipeable } from "react-swipeable";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "./PropertyGallery.css";
const PropertyGallery = ({ image = [] }) => {
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Prevent timeout leaks
  const timeoutRef = useRef(null);

  // Only rebuild slides when images change
  const slides = useMemo(
    () =>
      image.map((img) => ({
        src: img.MediaURL,
      })),
    [image]
  );

  // -------- Thumbnail Optimization --------

  const VISIBLE_THUMBS = 9;

  const start = Math.max(
    0,
    Math.min(
      selected - Math.floor(VISIBLE_THUMBS / 2),
      Math.max(0, image.length - VISIBLE_THUMBS)
    )
  );

  const end = Math.min(start + VISIBLE_THUMBS, image.length);

  const visibleImages = useMemo(
    () => image.slice(start, end),
    [image, start, end]
  );

  // ----------------------------------------

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const changeImage = (newIndex) => {
    if (!image.length) return;

    const wrappedIndex =
      (newIndex + image.length) % image.length;

    if (wrappedIndex === selected) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setFade(false);

    timeoutRef.current = setTimeout(() => {
      setSelected(wrappedIndex);
      setFade(true);
    }, 120);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeImage(selected + 1),
    onSwipedRight: () => changeImage(selected - 1),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  if (!image.length) {
  return (
    <div className="w-full h-[520px] rounded-3xl bg-gray-200 animate-pulse" />
  );
}

return (
  <div className="mb-12">

    {/* Hero Image */}

    <div
      {...handlers}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gray-100
        touch-pan-y
        select-none
      "
    >

      <img
        src={image[selected]?.MediaURL}
        alt={`Property image ${selected + 1}`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        onClick={() => setIsFullscreen(true)}
        className={`
          w-full
          h-[300px]
          md:h-[450px]
          xl:h-[560px]
          object-cover
          cursor-pointer
          select-none
          transition-opacity
          duration-200
          ${fade ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/45
          via-black/10
          to-transparent
          pointer-events-none
        "
      />

      {/* Previous */}

      <button
        aria-label="Previous image"
        onClick={() => changeImage(selected - 1)}
        className="
          hidden
          md:flex
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
          items-center
          justify-center
          text-gray-800
          transition-all
          duration-200
          hover:bg-[#A61E22]
          hover:text-white
          hover:scale-110
          active:scale-95
        "
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}

      <button
        aria-label="Next image"
        onClick={() => changeImage(selected + 1)}
        className="
          hidden
          md:flex
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
          items-center
          justify-center
          text-gray-800
          transition-all
          duration-200
          hover:bg-[#A61E22]
          hover:text-white
          hover:scale-110
          active:scale-95
        "
      >
        <ChevronRight size={24} />
      </button>

      {/* Desktop Controls */}

      <div className="absolute bottom-5 right-5 hidden md:flex items-center gap-3">

        {/* Favourite */}

        <button
          aria-label="Save property"
          title="Save property"
          className="
            w-11
            h-11
            rounded-full
            bg-white/90
            backdrop-blur-xl
            shadow-xl
            flex
            items-center
            justify-center
            text-gray-700
            transition-all
            duration-200
            hover:bg-[#A61E22]
            hover:text-white
            hover:scale-110
            active:scale-95
          "
        >
          <Heart size={18} />
        </button>

        {/* Share */}

        <button
          aria-label="Share property"
          title="Share property"
          className="
            w-11
            h-11
            rounded-full
            bg-white/90
            backdrop-blur-xl
            shadow-xl
            flex
            items-center
            justify-center
            text-gray-700
            transition-all
            duration-200
            hover:bg-[#A61E22]
            hover:text-white
            hover:scale-110
            active:scale-95
          "
        >
          <Share2 size={18} />
        </button>

        {/* Fullscreen */}

        <button
          aria-label="View fullscreen gallery"
          title="Fullscreen"
          onClick={() => setIsFullscreen(true)}
          className="
            w-11
            h-11
            rounded-full
            bg-white/90
            backdrop-blur-xl
            shadow-xl
            flex
            items-center
            justify-center
            text-gray-700
            transition-all
            duration-200
            hover:bg-[#A61E22]
            hover:text-white
            hover:scale-110
            active:scale-95
          "
        >
          <Maximize2 size={18} />
        </button>

        {/* Counter */}

        <div
          className="
            flex
            items-center
            px-4
            h-11
            rounded-full
            bg-black/65
            backdrop-blur-xl
            text-white
            shadow-xl
            text-sm
            font-medium
          "
        >
          {selected + 1} <span className="mx-1 text-white/60">of</span> {image.length}
        </div>

      </div>
             
    {/* Mobile Dots */}

    <div className=" md:hidden
    absolute
    bottom-5
    left-0
    right-0
    flex
    justify-center">
      <div className="flex items-center gap-2">
        {image.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to image ${index + 1}`}
            onClick={() => changeImage(index)}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                selected === index
                  ? "w-8 h-2 bg-[#A61E22]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }
            `}
          />
        ))}
      </div>
    </div>
          </div>

    {/* Desktop Filmstrip */}

    <div
      className="
        hidden
        md:flex
        gap-3
        mt-5
        overflow-x-auto
        pb-2
        scrollbar-hide
      "
    >
      {visibleImages.map((img, i) => {
            const index = start + i;
        <button
          key={img.MediaURL || index}
          onClick={() => changeImage(index)}
          aria-label={`View image ${index + 1}`}
          className={`
            flex-shrink-0
            rounded-2xl
            overflow-hidden
            border-2
            transition-all
            duration-300
            ${
              selected === index
                ? "border-[#A61E22] shadow-xl scale-105"
                : "border-transparent opacity-80 hover:opacity-100 hover:scale-[1.03]"
            }
          `}
        >
          <img
            src={img.MediaURL}
            alt={`Thumbnail ${index + 1}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="
              w-28
              h-20
              object-cover
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </button>
     );
      })}
    </div>


    <Lightbox
      open={isFullscreen}
      close={() => setIsFullscreen(false)}
      index={selected}
      slides={slides}
      plugins={[Zoom]}
      on={{
        view: ({ index }) => setSelected(index),
      }}
      carousel={{
        finite: false,
        preload: 3,
        padding: "40px",
        spacing: "8%",
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 250,
        keyboardMoveDistance: 60,
      }}
    />
  </div>
);

  
};

export default PropertyGallery;