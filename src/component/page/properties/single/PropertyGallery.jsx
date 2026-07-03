import { useState } from "react";
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

const [selected, setSelected] = useState(0);
const [isFullscreen, setIsFullscreen] = useState(false);

const slides = image.map((img) => ({
  src: img.MediaURL,
}));

const handlers = useSwipeable({
  onSwipedLeft: () =>
    setSelected((prev) => (prev + 1) % image.length),

  onSwipedRight: () =>
    setSelected((prev) => (prev - 1 + image.length) % image.length),

  preventScrollOnSwipe: true,
  trackTouch: true,
  trackMouse: false,
});

  return (
    <div className="mb-12">
      {/* Hero Image */}
     <div
  {...handlers}
  className="relative overflow-hidden rounded-3xl bg-gray-100 touch-pan-y select-none"
>

  <img
    src={image[selected]?.MediaURL}
    alt=""
    loading="eager"
    draggable={false}
    onClick={() => setIsFullscreen(true)}
    className="
      w-full
      h-[300px]
      md:h-[450px]
      xl:h-[560px]
      object-cover
      transition-all
      duration-300
      cursor-pointer
    "
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

  {/* Desktop Previous */}

  <button
    onClick={() =>
      setSelected((selected - 1 + image.length) % image.length)
    }
    className="
      hidden
      md:flex
      absolute
      left-5
      top-1/2
      -translate-y-1/2
      w-12
      h-12
      rounded-full
      bg-white/90
      backdrop-blur-lg
      shadow-xl
      items-center
      justify-center
      transition-all
      duration-200
      hover:bg-[#A61E22]
      hover:text-white
      hover:scale-105
    "
  >
    <ChevronLeft size={22} />
  </button>

  {/* Desktop Next */}

  <button
    onClick={() =>
      setSelected((selected + 1) % image.length)
    }
    className="
      hidden
      md:flex
      absolute
      right-5
      top-1/2
      -translate-y-1/2
      w-12
      h-12
      rounded-full
      bg-white/90
      backdrop-blur-lg
      shadow-xl
      items-center
      justify-center
      transition-all
      duration-200
      hover:bg-[#A61E22]
      hover:text-white
      hover:scale-105
    "
  >
    <ChevronRight size={22} />
  </button>

  {/* Desktop Controls */}

  <div className="absolute bottom-5 right-5 hidden md:flex items-center gap-2">

    <button
      className="
        w-11
        h-11
        rounded-full
        bg-white/90
        backdrop-blur
        shadow-lg
        flex
        items-center
        justify-center
        transition-all
        hover:bg-[#A61E22]
        hover:text-white
      "
    >
      <Heart size={18} />
    </button>

    <button
      className="
        w-11
        h-11
        rounded-full
        bg-white/90
        backdrop-blur
        shadow-lg
        flex
        items-center
        justify-center
        transition-all
        hover:bg-[#A61E22]
        hover:text-white
      "
    >
      <Share2 size={18} />
    </button>

    <button
      onClick={() => setIsFullscreen(true)}
      className="
        w-11
        h-11
        rounded-full
        bg-white/90
        backdrop-blur
        shadow-lg
        flex
        items-center
        justify-center
        transition-all
        hover:bg-[#A61E22]
        hover:text-white
      "
    >
      <Maximize2 size={18} />
    </button>

    <div className="px-3 py-2 rounded-full bg-black/70 text-white text-sm font-medium">
      {selected + 1} / {image.length}
    </div>

  </div>

  {/* Mobile Counter */}

  <div
    className="
      md:hidden
      absolute
      bottom-4
      right-4
      px-3
      py-1.5
      rounded-full
      bg-black/60
      text-white
      text-xs
      font-medium
    "
  >
    {selected + 1} / {image.length}
  </div>

</div>
      {/* Mobile Dots */}
      <div className="flex md:hidden justify-center gap-2 mt-4">
        {image.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`transition-all duration-300 ${
              selected === index
                ? "w-6 h-2 rounded-full bg-[#A61E22]"
                : "w-2 h-2 rounded-full bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Desktop Thumbnails */}
      <div className="hidden md:flex gap-3 mt-4 overflow-x-auto pb-2">
        {image.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`
              flex-shrink-0
              overflow-hidden
              rounded-xl
              border-2
              transition-all
              ${
                selected === index
                  ? "border-[#A61E22]"
                  : "border-transparent"
              }
            `}
          >
                        <img
                src={img.MediaURL}
                loading="lazy"
              alt=""
              className="
                w-24
                h-20
                object-cover
                transition-all
                duration-200
                hover:scale-[1.04]
              "
            />
          </button>
        ))}
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
    preload: 2,
    padding: "32px",
    spacing: "6%",
  }}
  controller={{
    closeOnBackdropClick: true,
  }}
  zoom={{
    maxZoomPixelRatio: 3,
    zoomInMultiplier: 2,
    doubleTapDelay: 250,
    doubleClickDelay: 250,
    keyboardMoveDistance: 60,
    wheelZoomDistanceFactor: 120,
  }}
  render={{
    buttonPrev: ({ previous, disabled }) => (
      <button
        onClick={previous}
        disabled={disabled}
        className="
          hidden
          md:flex
          absolute
          left-6
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
          hover:bg-[#A61E22]
          hover:text-white
          transition-all
          duration-200
          disabled:opacity-30
        "
      >
        <ChevronLeft size={26} />
      </button>
    ),

    buttonNext: ({ next, disabled }) => (
      <button
        onClick={next}
        disabled={disabled}
        className="
          hidden
          md:flex
          absolute
          right-6
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
          hover:bg-[#A61E22]
          hover:text-white
          transition-all
          duration-200
          disabled:opacity-30
        "
      >
        <ChevronRight size={26} />
      </button>
    ),

    buttonClose: ({ close }) => (
      <button
        onClick={close}
        className="
          absolute
          top-6
          right-6
          w-12
          h-12
          rounded-full
          bg-white/90
          backdrop-blur-xl
          shadow-xl
          flex
          items-center
          justify-center
          text-2xl
          text-gray-800
          hover:bg-[#A61E22]
          hover:text-white
          transition-all
        "
      >
        ×
      </button>
    ),
  }}
/>
    </div>
  );
};

export default PropertyGallery;