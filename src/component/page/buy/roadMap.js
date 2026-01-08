import { link } from "framer-motion/client";
import {roadMapstep1, roadMapstep2, roadMapstep3, roadMapstep4} from "../../../assets/allImg"

const steps = [
  {
    step: "Step 01",
    title: "Get Prequalified",
    description:
      "Prequalify to show you're serious about buying. This step ensures you're ready to act fast when you find 'the one'.",
    button: "Start Prequalification",
    imgSrc: roadMapstep1,
    link:"https://apply.nfmlending.com/app/mcua",
    target:"_Blank"
  },
  {
    step: "Step 02",
    title: "Start Your Journey",
    description:
      "Complete a quick form to share your goals, then book a consultation to plan your next steps—simple & stress-free.",
    button: "Browse Properties",
    imgSrc: roadMapstep2,
    link:"/properties",
    target:"_Self"
  },
  {
    step: "Step 03",
    title: "Find the One",
    description:
      "Start exploring properties that match your goals and lifestyle. Whether resale or new construction, the choice is yours.",
    button: "Find properties",
    imgSrc: roadMapstep3,
    link  :"/properties",
    target:"_Self"
  },
  {
    step: "Step 04",
    title: "How We Win",
    description:
      "Discover our winning strategy—proven methods, expert insights, and a track record of success.",
    button: "How We Win",
    imgSrc: roadMapstep4,
    link: "/pdf-viewer",
    target:"_blank"
  },
];

const RoadMap = () => {
  return (
    <div className="container mx-auto lg:px-24 px-5 py-16 relative">
      {/* Header */}
      <div className="text-center">
        <h1 className="md:text-5xl text-2xl   font-bold mb-4 text-gray-900">
          Your RoadMap to{" "}
          <span className="italic font-playfair">The Perfect Property</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We’ve simplified the homebuying process into four easy steps. Let’s get you closer to your dream home with confidence!
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
              <div className="w-[229px] h-[300px]  rounded-lg overflow-hidden">
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
              <button className="text-lg bg-red-800 px-2 py-1 font-semibold text-white">
                {step.step}
              </button>
              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                {step.title}
              </h2>
              <p className="text-gray-600 mt-2">{step.description}</p>
              <button 
                className="text-sm bg-black px-4 py-2 font-semibold text-white mt-2"
                onClick={() => {
                  window.open(step.link, step.target);
                }}
              >
                {step.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;