import React, { useEffect, useState } from "react";
import { logoUrl } from "../assets/allImg";

const messages = [
  "Finding your next home...",
  "Searching Central Ohio MLS...",
  "Matching active listings...",
  "Preparing beautiful photos...",
  "Almost there..."
];

const LoadingScreen = ({ location = "" }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [dot, setDot] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 900);

    const dotTimer = setInterval(() => {
      setDot((prev) => (prev + 1) % 3);
    }, 350);

    return () => {
      clearInterval(messageTimer);
      clearInterval(dotTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#8F1D21] flex items-center justify-center px-6">

      <div className="text-center max-w-md w-full">

        <img
          src={logoUrl}
          alt="The Romanelli Group"
          className="w-28 md:w-36 mx-auto mb-8"
        />

        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Finding your next home
        </h2>

        {location && (
          <p className="mt-3 text-white/80 text-base md:text-lg">
            📍 {location}
          </p>
        )}

        <p className="mt-8 text-white/90 text-lg md:text-xl">
          {messages[messageIndex]}
        </p>

        <div className="flex justify-center gap-3 mt-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                dot === i ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default LoadingScreen;