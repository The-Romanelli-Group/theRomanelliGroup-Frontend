import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Heart, Share2 } from "lucide-react";

const PropertyGallery = ({ image = [] }) => {
  const [selected, setSelected] = useState(0);

  if (!image.length) {
    return (
      <div className="w-full h-[520px] rounded-3xl bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="mb-10">

      {/* Hero Image */}
      <div className="relative overflow-hidden rounded-3xl bg-gray-100">

        <img
          src={image[selected]?.MediaURL}
          alt=""
          className="
            w-full
            h-[300px]
            md:h-[450px]
            xl:h-[560px]
            object-cover
          "
        />

        {/* Left */}
        <button
          onClick={() =>
            setSelected((selected - 1 + image.length) % image.length)
          }
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            w-11
            h-11
            rounded-full
            bg-white/90
            backdrop-blur
            shadow-xl
            flex
            items-center
            justify-center
            hover:scale-105
            transition
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right */}
        <button
          onClick={() =>
            setSelected((selected + 1) % image.length)
          }
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            w-11
            h-11
            rounded-full
            bg-white/90
            backdrop-blur
            shadow-xl
            flex
            items-center
            justify-center
            hover:scale-105
            transition 
          "
        >
          <ChevronRight size={22} />
        </button>

        {/* Bottom Right Controls */}
        <div className="absolute bottom-5 right-5 flex items-center gap-2">

          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center">
            <Heart size={18} />
          </button>

          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center">
            <Share2 size={18} />
          </button>

          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center">
            <Maximize2 size={18} />
          </button>

          <div className="px-3 py-2 rounded-full bg-black/60 text-white text-sm">
            {selected + 1} / {image.length}
          </div>

        </div>

      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

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
              alt=""
              className="
                w-24
                h-20
                object-cover
                hover:opacity-80
              "
            />
          </button>

        ))}

      </div>

    </div>
  );
};

export default PropertyGallery;