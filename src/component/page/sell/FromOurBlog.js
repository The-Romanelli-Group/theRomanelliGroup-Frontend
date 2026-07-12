import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const SellSmarter = ({
  category = "",
  subtitle = "Discover expert advice, local market updates and practical guides to help you make smarter real estate decisions.",
}) => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {

  const loadBlogs = async () => {

    try {

      setLoading(true);

      const response = await apiServices.get(
        "authentication",
        "/blogs?populate=image&sort=publishedDate:desc"
      );

      console.log(response);

      setBlogs(response.data || []);

    } catch (err) {

      console.error("Failed to load blogs:", err);

    } finally {

      setLoading(false);

    }

  };

  loadBlogs();

}, [category]);

  return (
<section className="py-12 bg-backgroundColor overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >

      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        FROM OUR BLOG
      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-white">

        Real Estate{" "}

        <span className="font-playfair italic font-normal text-[#A61E22]">
          Insights
        </span>

      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300">

        {subtitle}

      </p>

    </motion.div>

    <div className="relative mt-10">

  {/* Left Arrow */}

  <button
    onClick={() => emblaApi?.scrollPrev()}
    className="
      hidden
      md:flex
      absolute
      left-[-28px]
      lg:left-[-60px]
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      rounded-full
      bg-white
      shadow-xl
      items-center
      justify-center
      hover:bg-[#A61E22]
      hover:text-white
      transition-all
      duration-300
    "
  >
    <ChevronLeft size={24} />
  </button>

  {/* Right Arrow */}

  <button
    onClick={() => emblaApi?.scrollNext()}
    className="
      hidden
      md:flex
      absolute
      right-[-28px]
      lg:right-[-60px]
      top-1/2
      -translate-y-1/2
      z-20
      w-14
      h-14
      rounded-full
      bg-white
      shadow-xl
      items-center
      justify-center
      hover:bg-[#A61E22]
      hover:text-white
      transition-all
      duration-300
    "
  >
    <ChevronRight size={24} />
  </button>

  <div
    ref={emblaRef}
    className="overflow-hidden"
  >

    <div className="flex">

      {blogs.map((blog) => (

        <div
          key={blog.id}
          className="
            min-w-[88%]
            sm:min-w-[60%]
            lg:min-w-[31%]
            px-4
          "
        >

        <motion.article
  whileHover={{
    y: -8,
  }}
  transition={{ duration: 0.25 }}
  className="
    group
    h-full
    overflow-hidden
    rounded-[28px]
    bg-white
    shadow-xl
    border
    border-gray-200
  "
>

  {/* Image */}

  <div className="relative overflow-hidden">

    <img
      src={blog.image?.url}
      alt={blog.title}
      className="
        h-[240px]
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
    />

    <div
      className="
        absolute
        top-5
        left-5
        rounded-full
        bg-white/95
        px-4
        py-2
        text-[11px]
        font-semibold
        uppercase
        tracking-wider
        text-[#A61E22]
        shadow-lg
      "
    >
      {blog.category}
    </div>

  </div>

  {/* Content */}

  <div className="flex h-[270px] flex-col p-7">

    <h3
      className="
        text-2xl
        font-bold
        leading-tight
        text-gray-900
      "
    >
      {blog.title}
    </h3>

    <p
      className="
        mt-4
        text-gray-600
        leading-7
        line-clamp-3
      "
    >
      {blog.excerpt}
    </p>

    <div className="mt-auto">

      <div
        className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
        "
      >
        <Clock3 size={16} />

        {blog.readTime} min read

      </div>

      <button
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#A61E22]
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        Read Article

        <ArrowUpRight size={18} />

      </button>

    </div>

  </div>

</motion.article>

        </div>

      ))}

    </div>

  </div>

</div>

</div>

</section>
  ),
};

export default SellSmarter;