import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    number: "#2",
    title: "In the Ohio Valley Region",
    description: "Ranked among the top for unmatched real estate expertise and community impact.",
    images: [
      "https://ivang-design.com/svg-load/slider/1.jpg",
      "https://ivang-design.com/svg-load/slider/2.jpg",
      "https://ivang-design.com/svg-load/slider/3.jpg",
      "https://ivang-design.com/svg-load/slider/4.jpg",
    ],
  },
  {
    number: "185+",
    title: "Deals Closed",
    description: "Every transaction reflects trust, precision, and client-first focus.",
    images: [
      "https://ivang-design.com/svg-load/slider/5.jpg",
      "https://ivang-design.com/svg-load/slider/6.jpg",
      "https://ivang-design.com/svg-load/slider/7.jpg",
      "https://ivang-design.com/svg-load/slider/8.jpg",
    ],
  },
  {
    number: "106+",
    title: "Clients Served in 2025",
    description: "Dedicated to making dreams come true, one client at a time.",
    images: [
      "https://ivang-design.com/svg-load/slider/9.jpg",
      "https://ivang-design.com/svg-load/slider/10.jpg",
      "https://ivang-design.com/svg-load/slider/11.jpg",
      "https://ivang-design.com/svg-load/slider/12.jpg",
    ],
  },
  {
    number: "20+",
    title: "Years of Experience",
    description: "Delivering results backed by nearly a decade of experience.",
    images: [
      "https://ivang-design.com/svg-load/slider/13.jpg",
      "https://ivang-design.com/svg-load/slider/14.jpg",
      "https://ivang-design.com/svg-load/slider/15.jpg",
      "https://ivang-design.com/svg-load/slider/16.jpg",
    ],
  },
];

const NumberSpeak = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, stats.length);
  }, []);

  const handleMouseMove = (e, index) => {

    if (imagesRef.current[index]) {
      imagesRef.current[index].forEach((img, imgIndex) => {
        gsap.to(img, {
          x: e.clientX + imgIndex *150 - 40,
          y: e.clientY + imgIndex * 10 ,
          opacity: 1,
          scale: 1,
          duration: 0.3 + imgIndex * 0.1,
          ease: "power2.out",
        });

        // Auto-disappear after 1.5 seconds
        setTimeout(() => {
          gsap.to(img, {
            opacity: 0,
            scale: 0,
            duration: 0.8 + imgIndex * 0.2, // Staggered effect
            ease: "power2.inOut",
          });
        }, 1500);
      });
    }
  };

  const handleMouseLeave = (index) => {

    if (imagesRef.current[index]) {
      imagesRef.current[index].forEach((img, imgIndex) => {
        gsap.to(img, {
          opacity: 0,
          scale: 0,
          duration: 0.8 + imgIndex * 0.2,
          ease: "power2.inOut",
        });
      });
    }
  };

  return (
    <section className="relative text-white body-font bg-backgroundColor py-10 font-dmsans">
      <div className="container pr-5 lg:pr-auto px-0 lg:px-24 mx-auto">
        <div className="flex flex-wrap w-full  mb-8">
          <div className="lg:w-1/2 w-full text-left ml-4 md:ml-7 lg:ml-8">
            <h1 className="sm:text-5xl text-2xl font-semibold  title-font mb-2 text-white">
              The Numbers <span className="font-playfair italic">Speak</span>
            </h1>
            <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-2 text-white">
              for Themselves
            </h1>
          </div>
        </div>
        <div className="relative">
          {stats.map((stat, index) => (
       <section
       key={index}
       className="text-gray-900 body-font transition-all duration-300"
      //  onMouseMove={(e) => handleMouseMove(e, index)}
      //  onMouseLeave={() => handleMouseLeave(index)}
     >
       <div className="px-0 md:px-5 pb-6 mx-auto">
         <div className="flex flex-wrap w-full bg-white mx-3 py-2">
           <div className="w-full md:w-2/3 mb-6 lg:mb-0">
             <h1 className="sm:text-5xl text-2xl title-font mb-2 text-gray-900 text-left px-5 lg:px-8 font-bold">
               {stat.number}
             </h1>
             <h4 className="sm:text-xl text-md font-semibold md:font-medium title-font mb-2 text-gray-900 text-left px-5 lg:px-8">
               {stat.title}
             </h4>
           </div>
           <p className="w-full md:w-1/3 xl:text-xl text-right text-md p-2 pr-5 lg:pr-8 leading-relaxed text-gray-900 xl:mt-5 md:font-medium font-semibold">
             {stat.description}
           </p>
         </div>
       </div>
       
       {/* Floating Images - Only for larger screens */}
       {/* {window.innerWidth > 768 && stat.images.map((imgSrc, imgIndex) => (
         <img
           key={imgIndex}
           ref={(el) => {
             if (!imagesRef.current[index]) imagesRef.current[index] = [];
             imagesRef.current[index][imgIndex] = el;
           }}
           src={imgSrc}
           alt="Hover Preview"
           className="absolute w-36 h-36 rounded-lg shadow-lg transition-transform pointer-events-none opacity-0"
           style={{
             top: "-170px",
             left: "0px",
           }}
         />
       ))} */}
     </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberSpeak;
