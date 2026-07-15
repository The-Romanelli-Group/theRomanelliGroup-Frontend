import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Families = () => {
  const [families, setFamilies] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    duration: 22,
  });

  useEffect(() => {
    const fetchFamilies = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_FEATURE_LISTINGS}/served-families?populate=Image`
        );

        const mapped = (data?.data ?? []).map((family) => ({
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
      } finally {
        setLoading(false);
      }
    };

    fetchFamilies();
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const familyCards = useMemo(
    () =>
      families.map((family, index) => (
        <div
          key={index}
          className="
            min-w-[90%]
            sm:min-w-[65%]
            lg:min-w-[31%]
            px-4
          "
        >
          <article
            className="
              group
              h-[520px]
              overflow-hidden
              rounded-[28px]
              border
              border-gray-200
              bg-white
              shadow-xl
hover:shadow-2xl
            transition-all
duration-300
hover:-translate-y-2
              flex
              flex-col
            "
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={family.image}
                alt={family.name}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
              <div className="text-3xl md:text-4xl text-[#A61E22] leading-none font-playfair">
                “
              </div>

                          <p
              className={`
                mt-3
                flex-1
                italic
                text-gray-600
                leading-7
                ${expanded[index] ? "" : "line-clamp-4"}
              `}
            >
              {family.quote}
            </p>
{family.quote?.length > 180 && (
  <button
    onClick={() =>
      setExpanded((prev) => ({
        ...prev,
        [index]: !prev[index],
      }))
    }
    className="mt-2 text-sm font-semibold text-[#A61E22] hover:underline"
  >
    {expanded[index] ? "Show Less" : "Read More"}
  </button>
)}
              <div className="mt-5">
                <div className="h-px bg-gray-200 mb-4" />

                <h3 className="text-lg font-semibold text-gray-900">
                  {family.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Happy Client
                </p>
              </div>
            </div>
          </article>
        </div>
      )),
    [families]
  );

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-[520px] rounded-[28px] bg-gray-100 animate-pulse" />
        </div>
      </section>
    );
  }

   return (
<section className="py-8 md:py-12 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto px-5 lg:px-8">

              <motion.div
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.6}}
            className="max-w-3xl mx-auto text-center"
            >

        <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">

              CLIENT STORIES

              </p>

            <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">

              Stories From Our{" "}

              <span className="font-playfair italic font-normal text-[#A61E22]">

              Clients

              </span>

              </h2>

                  <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">

                  Real experiences from buyers and sellers who trusted
                  The Romanelli Group with one of life's biggest decisions.

                  </p>

                </motion.div>

                   <div className="relative mt-8 md:mt-12">

  {/* Left Arrow */}
  <button
  aria-label="Previous testimonial"
  onClick={scrollPrev}
  disabled={!emblaApi}
  className="
    hidden
    md:flex
    absolute
    left-[-28px]
    lg:left-[-60px]
    top-[42%]
    -translate-y-1/2
    z-20
    w-14
    h-14
    rounded-full
    bg-white/90
    backdrop-blur-xl
    shadow-2xl
    items-center
    justify-center
    text-gray-800
    transition-all
    duration-200
    hover:bg-[#A61E22]
    hover:text-white
    hover:scale-105
    active:scale-95
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
>
  <ChevronLeft size={24} />
</button>

  {/* Right Arrow */}
  <button
  aria-label="Next testimonial"
  onClick={scrollNext}
  disabled={!emblaApi}
  className="
    hidden
    md:flex
    absolute
    right-[-28px]
    lg:right-[-60px]
    top-[42%]
    -translate-y-1/2
    z-20
    w-14
    h-14
    rounded-full
    bg-white/90
    backdrop-blur-xl
    shadow-2xl
    items-center
    justify-center
    text-gray-800
    transition-all
    duration-200
    hover:bg-[#A61E22]
    hover:text-white
    hover:scale-105
    active:scale-95
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
>
  <ChevronRight size={24} />
</button>

  <div
    ref={emblaRef}
    className="overflow-hidden"
  >
    <div className="flex">
      {families.map((family, index) => (
        <div
          key={index}
          className="
            min-w-[90%]
            sm:min-w-[65%]
            lg:min-w-[31%]
            px-4
          "
        >
          <article
            className="
              group
              h-[520px]
              overflow-hidden
              rounded-[28px]
              border
              border-gray-200
              bg-white
              shadow-xl
hover:shadow-2xl
              transition-all
duration-300
hover:-translate-y-2
              flex
              flex-col
            "
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={family.image}
                alt={family.name}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div
  className="
    absolute
    top-4
    left-4
    bg-[#A61E22]
    text-white
    text-[10px]
    md:text-xs
    font-semibold
    uppercase
    tracking-wide
    px-3
    py-2
    rounded-full
    shadow-md
  "
>
  Happy Client
</div>
            </div>

            {/* Content */}
           <div className="flex flex-col flex-1 p-5 md:p-6">

              <div className="text-4xl text-[#A61E22] leading-none font-playfair">
                “
              </div>

              <p
                className="
    mt-2
    flex-1
    italic
    text-[15px]
    md:text-base
    text-gray-600
    leading-6 md:leading-7
    line-clamp-4
  "
>
              >
                {family.quote}
              </p>

              <div className="mt-5">

                <div className="h-px bg-gray-200 mb-4" />

                <h3 className="font-semibold text-base md:text-lg text-gray-900">
                  {family.name}
                </h3>

              
              </div>

            </div>
          </article>
        </div>
      ))}
    </div>
  </div>
</div>

                         <div className="mt-6 md:mt-8 flex justify-center">

                          <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: .98 }}
                          onClick={() => (window.location.href = "/contact-us")}
                          className="
                          rounded-full
                          bg-[#A61E22]
                          px-8 md:px-10
                            py-3 md:py-4
                            text-sm md:text-base
                          text-white
                          font-semibold
                          shadow-lg
                          hover:shadow-xl
                          transition-all
                          "
                          >

                          Become Our Next Success Story

                          </motion.button>

                          </div>   {/* CTA */}

</div>   {/* max-w-7xl */}

</section>

);

};

export default Families;