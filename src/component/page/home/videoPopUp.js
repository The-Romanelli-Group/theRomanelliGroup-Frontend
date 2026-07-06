import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Volume2, VolumeX } from "lucide-react";

const VideoPopUp = ({ video_pop_url, close }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Start muted so autoplay is allowed
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

  // Unmute and play once the popup opens
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);

      videoRef.current.play().catch((err) => {
        console.log("Autoplay with sound blocked:", err);
      });
    }
  }, []);

  // Close on Escape
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
    id="video-popup"
    onClick={handleClose}
    tabIndex={-1}
    className="fixed inset-0 z-[999] flex items-center justify-center pt-8 md:pt-0 md:items-end md:justify-end md:bottom-4 md:right-4 bg-black/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-0"
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
          <VolumeX size={18} strokeWidth={2.2} className="text-white" />
        ) : (
          <Volume2 size={18} strokeWidth={2.2} className="text-white" />
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
          <source src={video_pop_url} type="video/webm" />
        </video>

        {/* Close */}

        <button
          onClick={handleClose}
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
);
};

export default VideoPopUp;
