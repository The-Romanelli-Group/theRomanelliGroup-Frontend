import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Families = () => {
  const [families, setFamilies] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
  });

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_FEATURE_LISTINGS}/served-families?populate=Image`
        );

        const mapped = response.data.data.map((family) => ({
          image:
            family.Image?.formats?.small?.url ||
            family.Image?.formats?.thumbnail?.url ||
            family.Image?.url ||
            "",

          quote: family.Title,

          name: family.Name,
        }));

        setFamilies(mapped);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFamilies();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  return (
<section className="py-24 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto px-5 lg:px-8">

<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
className="text-center max-w-3xl mx-auto"
>

<p className="uppercase tracking-[0.35em] text-[#A61E22] font-semibold text-sm">
CLIENT STORIES
</p>

<h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">

Stories From Our{" "}

<span className="font-playfair italic font-normal text-[#A61E22]">
Clients
</span>

</h2>

<p className="mt-6 text-lg text-gray-600 leading-8">

Real experiences from buyers and sellers who trusted The Romanelli Group with
one of life's biggest decisions.

</p>

</motion.div>



<<div className="relative">

  {/* Previous */}

  <button
    onClick={scrollPrev}
    aria-label="Previous testimonial"
    className="
      absolute
      left-4
      lg:left-6
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      rounded-full
      bg-white/95
      backdrop-blur
      shadow-xl
      border
      border-gray-200
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:bg-[#A61E22]
      hover:border-[#A61E22]
      hover:text-white
      hover:scale-110
    "
  >
    <ChevronLeft size={22} strokeWidth={2.2} />
  </button>

  {/* Next */}

  <button
    onClick={scrollNext}
    aria-label="Next testimonial"
    className="
      absolute
      right-4
      lg:right-6
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      rounded-full
      bg-white/95
      backdrop-blur
      shadow-xl
      border
      border-gray-200
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:bg-[#A61E22]
      hover:border-[#A61E22]
      hover:text-white
      hover:scale-110
    "
  >
    <ChevronRight size={22} strokeWidth={2.2} />
  </button>

  <div
    className="overflow-hidden"
    ref={emblaRef}
  >

<div className="flex">
  {families.map((family, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
    }}
    className="
      min-w-[92%]
      sm:min-w-[70%]
      lg:min-w-[33.333%]
      px-3
    "
  >

    <article
      className="
        group
        overflow-hidden
        rounded-[30px]
        bg-white
        border
        border-gray-200
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-500
        h-full
      "
    >

      {/* Image */}

      <div className="relative overflow-hidden aspect-[4/5]">

        <img
          src={family.image}
          alt={family.name}
          loading="lazy"
          decoding="async"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      </div>

      {/* Content */}

      <div className="p-7">

        <div className="text-[#A61E22] text-3xl mb-4">
          “
        </div>

        <p
          className="
            text-gray-700
            leading-8
            line-clamp-5
            italic
            min-h-[160px]
          "
        >
          {family.quote}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h4 className="font-semibold text-lg text-gray-900">
              {family.name}
            </h4>

            <div className="mt-2 h-1 w-12 rounded-full bg-[#A61E22]" />

          </div>

          <div
            className="
              w-11
              h-11
              rounded-full
              bg-[#A61E22]/10
              text-[#A61E22]
              flex
              items-center
              justify-center
              font-bold
              transition-all
              duration-300
              group-hover:bg-[#A61E22]
              group-hover:text-white
            "
          >
            ★
          </div>

        </div>

      </div>

    </article>

  </motion.div>
))}

</div>

</div>

<div className="flex justify-center mt-16">

  <motion.button
    whileHover={{
      scale: 1.03,
    }}
    whileTap={{
      scale: 0.98,
    }}
    onClick={() => (window.location.href = "/contact-us")}
    className="
      rounded-full
      bg-[#A61E22]
      px-10
      py-4
      text-white
      font-semibold
      shadow-lg
      hover:shadow-xl
      transition-all
    "
  >
    Become Our Next Success Story
  </motion.button>

</div>

</div>
</div>

</section>
);

};

export default Families;

        