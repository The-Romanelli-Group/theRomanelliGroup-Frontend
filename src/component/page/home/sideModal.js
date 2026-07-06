import React, { useRef, useState, useEffect } from "react";
import { Expand, X, Volume2, VolumeX } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { pop_video } from "../../../assets/allImg";

const SideModal = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const openVideo = () => {
    setIsExpanded(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    setIsExpanded(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleCTA = () => {
    navigate("/contact-us");
  };

  useEffect(() => {
    if (isExpanded && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);

      videoRef.current.play().catch(() => {});
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
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
       onClick={openVideo}
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
  openVideo();
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
  openVideo();
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
{isExpanded && (
  <div
    id="video-popup"
    onClick={closeVideo}
    tabIndex={-1}
    className="fixed inset-0 z-[9999] flex items-center justify-center pt-8 md:pt-0 md:items-end md:justify-end md:bottom-4 md:right-4 bg-black/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-0"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative overflow-hidden rounded-[34px] border-[8px] border-[#181818] bg-black shadow-[0_30px_60px_rgba(0,0,0,.35)]"
    >
      {/* Mute */}

      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute top-3.5 left-3.5 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white shadow-lg"
      >
        {isMuted ? (
          <VolumeX size={18} strokeWidth={2.2} />
        ) : (
          <Volume2 size={18} strokeWidth={2.2} />
        )}
      </button>

      {/* Video */}

      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload"
          className="
            w-[88vw]
            max-w-[360px]
            h-[72vh]
            md:w-[230px]
            md:h-[410px]
            object-cover
          "
        >
          <source src={pop_video} type="video/webm" />
        </video>

        {/* Close */}

        <button
          onClick={closeVideo}
          aria-label="Close video"
          className="absolute top-3.5 right-3.5 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white shadow-lg"
        >
          <X size={20} strokeWidth={2.4} />
        </button>

        {/* CTA */}

        <div className="absolute left-4 right-4 bottom-4">
          <button
            type="button"
            onClick={handleCTA}
            className="w-full rounded-xl bg-[#A61E22] py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#8F181C]"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
)}   
  </>
);
};

export default SideModal;