import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import {
  simplified_step1,
  simplified_step2,
  simplified_step3,
  simplified_step4,
  simplified_step5,
  simplified_step6,
} from "../../../assets/allImg";

const steps = [
  {
    step: "Step 01",
    title: "Discover Your Home's Value",
    description:
      "Get a professional home valuation based on today's Central Ohio market so you can price your home with confidence.",
    button: "Get Your Home Valuation",
    link: "/",
    target: "_self",
    imgSrc: simplified_step1,
  },
  {
    step: "Step 02",
    title: "Meet With Our Team",
    description:
      "We'll learn about your goals, timeline and priorities, then create a personalized strategy for a successful sale.",
    button: "Schedule a Consultation",
    link: "/contact-us",
    target: "_self",
    imgSrc: simplified_step2,
  },
  {
    step: "Step 03",
    title: "Prepare Your Home",
    description:
      "From staging advice to professional photography and pricing strategy, we'll help your home make the best first impression.",
    button: "Explore Seller Resources",
    link: "/resources",
    target: "_self",
    imgSrc: simplified_step3,
  },
  {
    step: "Step 04",
    title: "Launch & Market",
    description:
      "Your home is professionally marketed through photography, video, MLS exposure, social media and targeted advertising.",
    button: "See Our Marketing",
    link: "/contact-us",
    target: "_self",
    imgSrc: simplified_step4,
  },
  {
    step: "Step 05",
    title: "Negotiate & Close",
    description:
      "We'll negotiate every offer, manage inspections, paperwork and every detail until your sale is complete.",
    button: "Start Selling",
    link: "/contact-us",
    target: "_self",
    imgSrc: simplified_step5,
  },
  {
    step: "Step 06",
    title: "Celebrate Your Success",
    description:
      "Congratulations! Your home has sold. We'd love to hear about your experience and celebrate your next chapter.",
    button: "Leave a Review",
    link: "https://share.google/13Gj3qs24RJ3dtIub",
    target: "_blank",
    imgSrc: simplified_step6,
  },
];

const Simplified = () => {
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
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >

      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        SELLING PROCESS
      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">

        Your Roadmap to{" "}

        <span className="font-playfair italic font-normal text-[#A61E22]">
          a Successful Sale
        </span>

      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">

        From your first consultation to closing day, we'll guide you
        through every step with expert advice, proven marketing and a
        strategy tailored to your goals.

      </p>

    </motion.div>

    {/* Timeline */}

    <div ref={timelineRef} className="relative mt-16">

      {/* Progress Line */}

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
          className="absolute inset-0 bg-[#A61E22]"
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

          {/* Timeline Number */}

          <motion.div
            whileInView={{
              scale: [0.8, 1.15, 1],
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              absolute
              left-[calc(50%-24px)]
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

          {/* Image */}
                    {/* Image */}

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

          {/* Content */}

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

export default Simplified; 