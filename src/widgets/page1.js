import React, { useEffect, useRef } from "react";
import {
  video_url1,
  video_url2,
  video_url3,
  video_url4,
  video_url5,
} from "../assets/allImg";
import Pages from "./pages";

const Page1 = ({ page }) => {
  const videoRef = useRef(null);

  let video_url;

  switch (page) {
    case "Home":
      video_url = video_url1;
      break;
    case "Buy":
      video_url = video_url2;
      break;
    case "Sell":
      video_url = video_url3;
      break;
    case "Contact Us":
      video_url = video_url4;
      break;
    case "Properties":
      video_url = video_url5;
      break;
    case "Resources":
      video_url = video_url1;
      break;
    default:
      video_url = video_url1;
  }

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    if (!video.currentSrc.includes(video_url.split("/").pop())) {
      video.src = video_url;
      video.load();
    }

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    document.addEventListener("visibilitychange", playVideo);
    window.addEventListener("focus", playVideo);

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
      window.removeEventListener("focus", playVideo);
    };
  }, [video_url]);

  return (
    <div className="mainVideo transition-opacity duration-500">
      <section className="relative w-full min-h-[78vh] md:min-h-screen flex items-center justify-center text-white body-font">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <Pages page={page} />
      </section>
    </div>
  );
};

export default Page1;