import React from "react";
import { logoUrl } from "../assets/allImg";

const LoadingScreen = ({ progress }) => {


  return (
    <div className="fixed inset-0 bg-red-600 flex flex-col items-center justify-center text-white z-50">
      {/* Logo at the center */}
      <img src={logoUrl} alt="logo" className="w-40 h-40 object-contain mb-6" loading="lazy" />

      {/* Progress Percentage above taskbar */}
      <div className="absolute bottom-20 left-10 w-full h-4">
        <p className="text-2xl xl:text-4xl font-semibold text-left">{progress}%</p>
      </div>
      {/* Taskbar-style Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-8 ">
        <div
          className="bg-white h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
