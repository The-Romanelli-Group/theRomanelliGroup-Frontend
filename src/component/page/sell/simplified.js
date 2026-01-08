import React from "react";
import { simplified_step1, simplified_step2, simplified_step3, simplified_step4, simplified_step5, simplified_step6 } from "../../../assets/allImg";
import { link } from "framer-motion/client";

const steps = [
  {
    step: "Step 01",
    title: "Request a Free Valuation",
    description:
      "Start by understanding your home’s worth in today’s market. We’ll provide a detailed valuation tailored to your property.",
    button: "Get Your Valuation",
    link:"/",
    target:"_Self",
    imgSrc: simplified_step1,
  },
  {
    step: "Step 02",
    title: "Schedule a Call with us!",
    description:
      "Talk to our experts to discuss your property goals and get a tailored selling strategy.",
    button: "Contact Us",
    imgSrc: simplified_step2,
    link:"/contact-us",
    target:"_Self",
  },
  {
    step: "Step 03",
    title: "Get Your Home Market-Ready",
    description:
      "From staging tips to minor repairs, explore our expert resources to maximize your home’s appeal.",
    button: "Visit Resource Hub",
    imgSrc: simplified_step3,
    link:"/resources",
    target:"_Self",
  },
  {
    step: "Step 04",
    title: "List & Market",
    description:
      "Your property will be showcased to the right audience with stunning visuals, targeted ads, and expert strategies.",
    button: "List My Home",
    imgSrc: simplified_step4,
    link:"/contact-us",
    target:"_Self"
  },
  {
    step: "Step 05",
    title: "Negotiate & Close",
    description:
      "We’ll handle negotiations and paperwork, ensuring you get the best deal while staying stress-free.",
    button: "Start Searching",
    imgSrc: simplified_step5,
    link:"/properties",
    target:"_Self"
  },
  {
    step: "Step 06",
    title: "Celebrate",
    description:
      "Congratulations! With your sale complete, it’s time to move forward with confidence.",
    button: "Share Your Success",
    imgSrc: simplified_step6,
    link:"https://share.google/13Gj3qs24RJ3dtIub",
    target:"_Blank"
  },
];

const Simplified = () => {
  return (
    <div className="bg-backgroundColor">
    <div className="container mx-auto lg:px-24 px-5  py-16 relative bg-backgroundColor">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Selling Your Home, 
          <span className="italic  font-playfair ">{" "}Simplified</span>
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
        We make selling your property easy, efficient, and rewarding. Follow these simple steps to get started.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Vertical Line in Center */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-800 h-full hidden md:block`}></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Circle Indicator in Middle */}
            <div className={`absolute left-1/2 transform ${index<2?"bg-red-800":"bg-red-300"} -translate-x-1/2 w-10 h-10  flex items-center justify-center text-white font-bold z-10`}>
             
            </div>

            {/* Image Section */}
            <div className="w-full md:w-5/12 p-4 flex justify-center">
              <div className="w-auto h-auto  rounded-lg overflow-hidden">
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step Info */}
            <div
              className={`w-full md:w-5/12 p-4 text-center md:text-left ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <button className="text-lg bg-red-800 px-2 py-1 font-semibold text-white" >
                {step.step}
              </button>
              <h2 className="text-2xl lg:text-4xl font-semibold text-white mt-2">
                {step.title}
              </h2>
              <p className="text-white mt-2">{step.description}</p>
              <button className="text-sm bg-white px-4 py-2 font-semibold text-black mt-2 cursor-pointer" onClick={() => {
                if(step.link){ window.open(step.link, step.target)} else {window.location.href="#"}
              }}>
                {step.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Simplified;