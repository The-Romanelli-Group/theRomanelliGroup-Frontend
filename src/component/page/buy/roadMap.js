import {  motion, useScroll, useSpring, useTransform,  } from "framer-motion";
import { useRef } from "react";
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
      "Once you are prequalified, get in touch with our expert realtors, so they can understand what you are looking for and help you better.",
    button: "Start a Conversation",
    imgSrc: roadMapstep2,
    link:"/contact-us",
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

  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
  <section className="py-8 md:py-12 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto px-5 lg:px-8">
      {/* Header */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .6 }}
  className="max-w-3xl mx-auto text-center"
>

  <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
    BUYING PROCESS
  </p>

  <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">

    Your Roadmap to{" "}

    <span className="font-playfair italic font-normal text-[#A61E22]">
      Homeownership
    </span>

  </h2>

  <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">

    From financing to closing day, we'll guide you through every step
    so buying your next home feels simple, exciting and stress-free.

  </p>

</motion.div>

      {/* Timeline */}
   <div ref={timelineRef} className="relative mt-16">
        {/* Vertical Line in Center */}
       <div
  className="
    absolute
    left-1/2
    top-0
    bottom-0
    hidden
    md:block
    w-[3px]
    -translate-x-1/2
    rounded-full
    bg-gray-200
    overflow-hidden
  "
>

  <motion.div
    style={{
      scaleY: lineScale,
      transformOrigin: "top",
    }}
    className="
      absolute
      inset-0
      bg-[#A61E22]
    "
  />

</div>

        {steps.map((step, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.6,
      delay: index * 0.12,
    }}
    className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-28 ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >

    {/* Milestone */}

<motion.div
  whileInView={{
    scale: [0.8, 1.15, 1],
  }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
 className="
  absolute
  left-1/2
  top-1/2

  -translate-x-1/2
  -translate-y-1/2

  hidden
  md:flex

  items-center
  justify-center

  w-12
  h-12

  rounded-full

  bg-[#A61E22]

  border-4
  border-white

  shadow-xl

  text-white
  font-bold

  z-20
"
>
  {index + 1}
</motion.div>
            {/* Image Section */}
           <div className="w-full md:w-5/12 p-4 flex justify-center">

  <motion.div
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    transition={{ duration: 0.25 }}
    className="
      group

      w-[250px]
      md:w-[280px]

      h-[320px]
      md:h-[360px]

      rounded-[28px]

      overflow-hidden

      bg-white

      border
      border-gray-200

      shadow-xl
    "
  >

    <img
      src={step.imgSrc}
      alt={step.title}
      className="
        w-full
        h-full
        object-cover

        transition-transform
        duration-700

        group-hover:scale-105
      "
    />

  </motion.div>

</div>

            {/* Step Info */}

<div
  className={`w-full md:w-5/12 p-4 ${
    index % 2 === 0 ? "md:text-right" : "md:text-left"
  }`}
>

  <div
    className="
      rounded-[28px]
      bg-white
      border
      border-gray-200
      shadow-xl
      p-8
    "
  >

    <div
      className="
        inline-flex
        rounded-full
        bg-[#A61E22]
        text-white
        text-xs
        font-semibold
        uppercase
        tracking-wide
        px-4
        py-2
      "
    >
      {step.step}
    </div>

    <h3 className="mt-5 text-3xl font-bold text-gray-900">
      {step.title}
    </h3>

    <p className="mt-5 text-gray-600 leading-6 md:leading-7">
      {step.description}
    </p>

    <button
      onClick={() => window.open(step.link, step.target)}
      className="
        mt-8
        inline-flex
        items-center
        rounded-xl
        bg-[#A61E22]
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:bg-[#8D181B]
        hover:scale-[1.02]
      "
    >
      {step.button}
    </button>

  </div>

</div>
             </motion.div>
        ))}
      </div>
   </div>

</section>
  );
};

export default RoadMap;
