import Cristina from "../../../assets/images/illustrations/Cristina.png";
import Antonio from "../../../assets/images/illustrations/Antonio.png";

import { motion } from "framer-motion";
const Faces = () => {

return (
<section className="py-8 md:py-12 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="max-w-3xl mx-auto text-center"
    >

      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        MEET THE TEAM
      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">
        Meet the{" "}
        <span className="font-playfair italic font-normal text-[#A61E22]">
          Faces
        </span>{" "}
        Behind The Romanelli Group
      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">
        Experienced professionals helping buyers and sellers across Central Ohio
        with local expertise, proven results and a commitment to exceptional service.
      </p>

    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 mt-6 md:mt-10">

      {/* Cristina */}

      <motion.div
        initial={{ opacity: 0, x: -120, scale: .96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .75 }}
      >
        
<div className="relative flex flex-col items-center">

  {/* Soft Glow */}

  <div
    className="
      absolute
      top-14
      w-72
      h-72
      rounded-full
      bg-[#A61E22]/10
      blur-3xl
    "
  />

  {/* Cutout */}

  <motion.img
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ duration: 0.25 }}
    src={Cristina}
    alt="Cristina Romanelli"
    className="
      relative
      z-10
      h-[420px]
      md:h-[520px]
      object-contain
      drop-shadow-2xl
    "
  />

  {/* Info Card */}

  <div
    className="
      relative
      z-30
      -mt-14
      w-full
      rounded-[28px]
      bg-white
      border
      border-gray-200
      shadow-xl
      p-7
      pt-16
      text-center
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
      CEO & Partner
    </div>

    <h3 className="mt-5 text-3xl font-bold text-gray-900">
      Cristina Romanelli
    </h3>

    <p className="mt-5 text-gray-600 leading-6 md:leading-7">
      Partner of The Romanelli Group at Keller Williams Greater Columbus,
      helping Central Ohio families buy and sell with confidence through
      local expertise, integrity and exceptional service.
    </p>

    <div className="mt-8 grid grid-cols-2 gap-3">

      <div className="rounded-2xl bg-gray-50 p-4">

        <p className="text-2xl font-bold text-[#A61E22]">
          600+
        </p>

        <p className="text-sm text-gray-600">
          Homes Sold
        </p>

      </div>

      <div className="rounded-2xl bg-gray-50 p-4">

        <p className="text-2xl font-bold text-[#A61E22]">
          Top 1%
        </p>

        <p className="text-sm text-gray-600">
          Central Ohio
        </p>

      </div>

    </div>

  </div>

</div>

      </motion.div>

      {/* Antonio */}

      <motion.div
        initial={{ opacity: 0, x: 120, scale: .96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .75, delay: .15 }}
      >
<div className="relative flex flex-col items-center">

  {/* Soft Glow */}

  <div
    className="
      absolute
      top-14
      w-72
      h-72
      rounded-full
      bg-[#A61E22]/10
      blur-3xl
    "
  />

  {/* Cutout */}

  <motion.img
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ duration: 0.25 }}
    src={Antonio}
    alt="Antonio Romanelli"
    className="
      relative
      z-10
      h-[420px]
      md:h-[520px]
      object-contain
      drop-shadow-2xl
    "
  />

  {/* Info Card */}

  <div
    className="
      relative
      z-30
      -mt-14
      w-full
      rounded-[28px]
      bg-white
      border
      border-gray-200
      shadow-xl
      p-7
      pt-16
      text-center
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
      CFO & Partner
    </div>

    <h3 className="mt-5 text-3xl font-bold text-gray-900">
      Antonio Romanelli
    </h3>

    <p className="mt-5 text-gray-600 leading-6 md:leading-7">
      Partner of The Romanelli Group specializing in residential and commercial
      real estate throughout Central Ohio, helping families navigate every move
      with confidence and expert guidance.
    </p>

    <div className="mt-8 grid grid-cols-2 gap-3">

      <div className="rounded-2xl bg-gray-50 p-4">

        <p className="text-2xl font-bold text-[#A61E22]">
          600+
        </p>

        <p className="text-sm text-gray-600">
          Transactions
        </p>

      </div>

      <div className="rounded-2xl bg-gray-50 p-4">

        <p className="text-2xl font-bold text-[#A61E22]">
          5+
        </p>

        <p className="text-sm text-gray-600">
          Years Experience
        </p>

      </div>

    </div>

  </div>

</div>
      </motion.div>

    </div>

  </div>

</section>
);

};

export default Faces;