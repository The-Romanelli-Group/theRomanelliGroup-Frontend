import React, { useState } from "react";
import { Expand } from "lucide-react";

import VideoPopUp from "./videoPopUp";
import { pop_video } from "../../../assets/allImg";

const SideModal = () => {
    console.log("Floating video:", pop_video);
  const [videoPopUp, setVideoPopUp] = useState(false);

  const handleVideoPopUp = () => {
    setVideoPopUp(true);
  };
return (
  <>
    <div
      className="
        fixed
       bottom-8
       md:bottom-8

        right-2
        sm:right-4
        md:right-8

        z-[9999]
      "
    >
      {/* Phone */}

      <div
        onClick={handleVideoPopUp}
        className="
          relative

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
          <source src={pop_video} type="video/webm" />
        </video>

        {/* Expand Button */}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoPopUp();
          }}
          className="
            hidden md:flex

            absolute
            bottom-2
            right-2

            z-20

            items-center
            justify-center

            w-9
            h-9

            rounded-full

            bg-black/35
            backdrop-blur-md

            border
            border-white/20

            text-white

            shadow-lg
          "
        >
          <Expand
            size={18}
            strokeWidth={2.2}
            className="text-white"
          />
        </button>
      </div>

      {/* Let's Connect Sticker */}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleVideoPopUp();
        }}
        className="
          absolute

          top-1/4
          right-[70px]

          md:right-[95px]

          -translate-y-1/2

          bg-[#A61E22]

          text-white

          text-[8px]
          md:text-[10px]

          font-medium

          px-2
          py-1

          md:px-3
          md:py-2

          rounded-l-lg
          rounded-tr-lg

          border
          border-black/20

          shadow-xl

          whitespace-nowrap

          transition-all
          duration-300
        "
      >
        Listen Up
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