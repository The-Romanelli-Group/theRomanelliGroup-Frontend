import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "../loading/loadingScreen";
import { video_url1,video_url2,video_url3,video_url4,video_url5 } from "../assets/allImg";
import Pages from "./pages";

const Page1 = ({ page }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  let interval;
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
    video_url = null; // optional: handle unknown pages
}
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  // Always keep video muted
  video.muted = true;
  
  const playPromise = video.play();
  
  if (playPromise !== undefined) {
    playPromise
      .catch(err => {
        console.warn('Muted autoplay blocked:', err);
      });
  }
}, []);

useEffect(() => {
  // Reset loading state when page changes
  setLoading(true);
  setProgress(0);
  
  const video = videoRef.current;
  if (!video || !video_url) return;
  
  video.src = video_url;
  video.load();
}, [page, video_url]);
    

  useEffect(() => {
    interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) return oldProgress; // Stop at 90%
        return oldProgress + 5;
      });
    }, 300);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  


  

  // 🔹 When the video starts loading (packets should be in Network tab)
  const handleVideoStart = () => {
    setProgress(50); // Start progress at 50% when video request starts
  };

  const handleVideoProgress = (e) => {
    if (e.target.buffered.length > 0) {
      const buffered = Math.round(e.target.buffered.end(0));
      const duration = e.target.duration;
      const realProgress = 50 + (buffered / duration) * 45; // Continue from 50% to 95%
      setProgress(Math.round(Math.min(realProgress, 95))); // Round to remove decimals
    }
  };

  const handleVideoReady = () => {
    setProgress(100);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && <LoadingScreen progress={progress} />}
      {/* Always render video in background */}
      <div  className="mainVideo" style={{ visibility: loading ? "hidden" : "visible" }}>
        <section className="relative w-full min-h-screen flex items-center justify-center text-white body-font overflow-hidden">
          <div className="absolute inset-0 w-full h-[100%]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto" // Force early loading
              className="w-full h-full object-cover"
              onLoadStart={handleVideoStart} // Start loading
              onProgress={handleVideoProgress} // Track buffering progress
              onCanPlayThrough={handleVideoReady} // Once video is ready to play
            >
              <source src={video_url} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          {/* Content */}
         <Pages page={page}/>
        </section>
      
      </div>
    </>
  );
};

export default Page1;
