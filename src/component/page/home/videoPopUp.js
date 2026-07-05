import React, { useRef, useState } from "react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoPopUp = ({ video_pop_url, close }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Start muted so autoplay works across browsers
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    close();
  };

  const handleCTA = () => {
    navigate("/contact-us");
  };
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  return (
  <div
  id="video-popup"  onClick={handleClose}
  tabIndex={-1}
  className="
    fixed
    inset-0
    z-[100]

    flex
    items-center
    justify-center

    md:items-end
    md:justify-end

    md:bottom-4
    md:right-4

    bg-black/40
    md:bg-transparent

    backdrop-blur-[2px]
    md:backdrop-blur-0
  "
>
    <div onClick={(e) => e.stopPropagation()}
      className="
        relative

        overflow-hidden

        rounded-[34px]

        border-[8px]
        border-[#181818]

        bg-black

        shadow-[0_30px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Close */}

      <button
        onClick={handleClose}
        aria-label="Close video"
        className="
          absolute
          top-3
          right-3
          z-20

          flex
          items-center
          justify-center

          w-8
          h-8

          rounded-full

          bg-white/95

          shadow-lg

          hover:bg-[#A61E22]
          hover:text-white

          transition
        "
      >
        ✕
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
            w-[90vw]
            max-w-[380px]
            h-[82vh]

            md:w-[230px]
            md:h-[410px]

            object-cover
          "
        >
          <source src={video_pop_url} type="video/mp4" />
        </video>

        {/* Mute */}

        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="
            absolute
            top-3
            left-3

            flex
            items-center
            justify-center

            w-9
            h-9

            rounded-full

            bg-white/90
            backdrop-blur

            shadow-lg

            hover:scale-105
            transition
          "
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="black"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M3 9v6a1 1 0 001 1h4l5 5V3L8 8H4a1 1 0 00-1 1z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="black"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 3.75L6 9H3v6h3l5.25 5.25V3.75zM17.25 8.25A6 6 0 0121 12a6 6 0 01-3.75 3.75M15 5.25a9 9 0 010 13.5"
              />
            </svg>
          )}
        </button>

        {/* CTA */}

        <div className="absolute left-4 right-4 bottom-4">

          <button
            type="button"
            onClick={handleCTA}
            className="
              w-full

              rounded-xl

              bg-[#A61E22]

              py-3

              text-sm
              font-semibold
              text-white

              shadow-xl

              transition

              hover:bg-[#8F181C]
            "
          >
            Book Free Consultation
          </button>

        </div>

      </div>
    </div>
  </div>
);
};

export default VideoPopUp;
