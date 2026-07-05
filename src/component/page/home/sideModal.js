import React, { useState } from "react";
import { Expand } from "lucide-react";

import VideoPopUp from "./videoPopUp";
import { pop_video } from "../../../assets/allImg";

const SideModal = () => {
  const [videoPopUp, setVideoPopUp] = useState(false);

  const handleVideoPopUp = () => {
    setVideoPopUp(true);
  };

  return (
    <>
      <div
        onClick={handleVideoPopUp}
        className="
          fixed
          bottom-2
          md:bottom-5

          right-2
          sm:right-4
          md:right-8

          z-50

          cursor-pointer

          w-[88px]
          h-[150px]

          sm:w-[96px]
          sm:h-[160px]

          md:w-[118px]
          md:h-[205px]

          overflow-hidden

          rounded-[22px]

          border-[5px]
          border-[#181818]

          bg-black

          shadow-[0_20px_45px_rgba(0,0,0,.30)]

          transition-transform
          duration-300
        "
      >
        {/* Video */}

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={pop_video} type="video/mp4" />
        </video>

        {/* Expand Button */}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoPopUp();
          }}
          className="
            absolute
            bottom-3
            right-3
            z-10

            flex
            items-center
            justify-center

            w-8
            h-8

            rounded-full

            bg-white/95
            backdrop-blur-md

            shadow-lg
          "
        >
          <Expand size={16} className="text-gray-900" />
        </button>

        {/* Sticker */}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoPopUp();
          }}
          className="
            absolute

            top-1/3
            right-0

           translate-x-[48%]
            -translate-y-1/2

            whitespace-nowrap

            rounded-l-xl
            rounded-tr-xl
            rounded-br-xl

            border
            border-black/10

            bg-[#A61E22]

            px-3
            py-2

            text-[10px]
            md:text-xs

            font-semibold
            text-white

            shadow-xl

            transition-all
            duration-300
          "
        >
          Let's Connect
        </button>
      </div>

      {videoPopUp && (
        <VideoPopUp
          video_pop_url={pop_video}
          close={() => setVideoPopUp(false)}
        />
      )}
    </>
  );
};

export default SideModal;