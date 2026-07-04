import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 2,
    prefix: "#",
    suffix: "",
    title: "In the Ohio Valley Region",
    description:
      "Ranked among the top for unmatched real estate expertise and community impact.",
    featured: true,
  },
  {
    value: 550+,
    suffix: "+",
    title: "Deals Closed",
    description:
      "Every transaction reflects trust, precision and a client-first approach.",
  },
  {
    value: 106,
    suffix: "+",
    title: "Clients Served",
    description:
      "Helping buyers and sellers confidently navigate every step of their journey.",
  },
  {
    value: 20,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Two decades of experience helping buyers and sellers achieve exceptional results",
    wide: true,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const NumberSpeak = () => {
  return (
    <section className="relative overflow-hidden bg-[#130d0d] py-24">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-56 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#A61E22]/10 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <p className="uppercase tracking-[0.35em] text-[#A61E22] font-semibold text-sm">

            OUR RESULTS

          </p>

          <h2 className="mt-4 text-white text-4xl md:text-6xl font-bold leading-tight">

            The Numbers{" "}

            <span className="font-playfair italic font-normal text-[#A61E22]">

              Speak

            </span>

            <br />

            For Themselves

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl">

            Every number tells a story of trust, successful transactions and
            relationships we've built throughout the Ohio Valley.

          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-16"
        >

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#A61E22]/40
                hover:shadow-[0_30px_80px_rgba(166,30,34,0.18)]
                ${
                  stat.featured
                    ? "lg:col-span-2"
                    : stat.wide
                    ? "lg:col-span-2"
                    : ""
                }
              `}
            >

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 lg:p-10">

                {/* Number */}<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

  <div>

    <motion.h3
      whileHover={{ scale: 1.04 }}
      className="
        text-6xl
        md:text-7xl
        lg:text-8xl
        font-black
        tracking-tight
        text-white
      "
    >
      {stat.prefix}

      <CountUp
        end={stat.value}
        duration={2.2}
        enableScrollSpy
        scrollSpyOnce
      />

      {stat.suffix}
    </motion.h3>

    <div className="mt-6 h-1 w-16 rounded-full bg-[#A61E22]" />

    <h4 className="mt-6 text-2xl font-semibold text-white">
      {stat.title}
    </h4>

    <p className="mt-4 max-w-2xl text-base leading-8 text-gray-400">
      {stat.description}
    </p>

  </div>

</div>

{/* Decorative Corner */}

<div
  className="
    absolute
    top-0
    right-0
    h-40
    w-40
    rounded-full
    bg-[#A61E22]/10
    blur-3xl
    transition-opacity
    duration-500
    opacity-0
    group-hover:opacity-100
  "
/>

{/* Bottom Accent */}

<div
  className="
    absolute
    bottom-0
    left-0
    h-1
    w-0
    bg-[#A61E22]
    transition-all
    duration-500
    group-hover:w-full
  "
/>

</div>

</motion.div>

))}

</motion.div>

</div>

</section>
);
};

export default NumberSpeak;