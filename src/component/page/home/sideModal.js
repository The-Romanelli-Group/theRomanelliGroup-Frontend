import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Expand } from "lucide-react";

import VideoPopUp from "./videoPopUp";
import { pop_video } from "../../../assets/allImg";

const SideModal = () => {
  const navigate = useNavigate();
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
          bottom-5
          right-5
          z-50

          relative
          overflow-hidden

          w-[90px]
          h-[150px]

          md:w-[120px]
          md:h-[205px]

          cursor-pointer

          rounded-[22px]
          border-[6px]
          border-[#181818]

          bg-black

          shadow-[0_20px_50px_rgba(0,0,0,.30)]

          transition-all
          duration-300

          hover:scale-105
        "
      >
        {/* Video */}

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={pop_video} type="video/mp4" />
        </video>

        {/* Expand Button */}

        <button
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
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            bg-white/90
            backdrop-blur-md

            shadow-lg

            transition

            hover:scale-105
          "
        >
          <Expand size={16} />
        </button>

        {/* CTA */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/contact-us");
          }}
          className="
            absolute
            left-1/2
            bottom-12
            -translate-x-1/2

            whitespace-nowrap

            rounded-full

            bg-[#A61E22]

            px-3
            py-1.5

            text-[10px]
            md:text-xs

            font-semibold
            text-white

            shadow-lg

            transition-all

            hover:bg-[#8F181C]
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