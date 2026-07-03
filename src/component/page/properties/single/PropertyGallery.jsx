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

const PropertyGallery = ({ image = [] }) => {
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = image.map((img) => ({
    src: img.MediaURL,
  }));

  const changeImage = (newIndex) => {
    if (newIndex === selected) return;

    setFade(false);

    setTimeout(() => {
      setSelected(newIndex);
      setFade(true);
    }, 170);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      changeImage((selected + 1) % image.length),

    onSwipedRight: () =>
      changeImage((selected - 1 + image.length) % image.length),

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
        alt=""
        loading="eager"
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

      {/* Desktop Previous */}

      <button
        onClick={() =>
          changeImage((selected - 1 + image.length) % image.length)
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
          changeImage((selected + 1) % image.length)
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
       
      {/* Bottom Right Controls */}

      <div className="absolute bottom-5 right-5 hidden md:flex items-center gap-3">

        {/* Counter */}

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            h-11
            rounded-full
            bg-black/65
            backdrop-blur-xl
            text-white
            shadow-xl
          "
        >
          <span className="text-sm font-semibold">
            {selected + 1}
          </span>

          <span className="text-white/60">/</span>

          <span className="text-sm">
            {image.length}
          </span>

          <span className="text-xs text-white/70 ml-1">
            Photos
          </span>
        </div>

         {/* Mobile Bottom Bar */}

      <div className="md:hidden flex items-center justify-between mt-4">

        {/* Dots */}

        <div className="flex items-center gap-2">

          {image.map((_, index) => (

            <button
              key={index}
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

        {/* Favourite */}

        <button
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
            hover:scale-105
          "
        >
          <Heart size={18} />
        </button>

        {/* Share */}

        <button
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
            hover:scale-105
          "
        >
          <Share2 size={18} />
        </button>

        {/* Fullscreen */}

        <button
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
            hover:scale-105
          "
        >
          <Maximize2 size={18} />
        </button>

      </div>
</div>
       

        {/* View All */}

        <button
          onClick={() => setIsFullscreen(true)}
          className="
            px-4
            py-2
            rounded-full
            bg-black/70
            backdrop-blur-xl
            text-white
            text-xs
            font-medium
            shadow-lg
            hover:bg-[#A61E22]
            transition-all
            duration-200
          "
        >
          {selected + 1} / {image.length} • View All
        </button>

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

        {image.map((img, index) => (

          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`
              flex-shrink-0
              rounded-2xl
              overflow-hidden
              transition-all
              duration-300
              border-2
              ${
                selected === index
                  ? "border-[#A61E22] shadow-xl scale-105"
                  : "border-transparent opacity-80 hover:opacity-100 hover:scale-[1.03]"
              }
            `}
          >

            <img
              src={img.MediaURL}
              loading="lazy"
              alt=""
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
        render={{
          buttonPrev: ({ previous, disabled }) => (
            <button
              onClick={previous}
              disabled={disabled}
              className="
                hidden
                md:flex
                absolute
                left-8
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
                right-8
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