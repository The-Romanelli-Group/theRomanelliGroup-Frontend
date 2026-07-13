import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import apiServices from "../../../Service/apiService";
import {  ChevronLeft, ChevronRight, Clock3, ArrowUpRight, } from "lucide-react";
import { Link } from "react-router-dom";

const FromOurBlog = ({
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
<section
  className="
    relative
    overflow-hidden
    bg-[#171010]
    py-14 md:py-20
  "
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}

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

      <h2 className="mt-3 text-[32px] md:text-6xl leading-tight font-bold text-white">
        Real Estate{" "}
        <span className="font-playfair italic font-normal text-[#A61E22]">
          Insights
        </span>
      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-300">
        {subtitle}
      </p>
    </motion.div>

    {/* Carousel */}

    <div className="relative mt-10 md:mt-14">

      {/* Previous */}

      <button
        aria-label="Previous articles"
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
          bg-white/90
          backdrop-blur-xl
          border
          border-white/60
          shadow-2xl
          items-center
          justify-center
          text-gray-800
          transition-all
          duration-200
          hover:bg-[#A61E22]
          hover:text-white
          hover:scale-105
        "
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}

      <button
        aria-label="Next articles"
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
          bg-white/90
          backdrop-blur-xl
          border
          border-white/60
          shadow-2xl
          items-center
          justify-center
          text-gray-800
          transition-all
          duration-200
          hover:bg-[#A61E22]
          hover:text-white
          hover:scale-105
        "
      >
        <ChevronRight size={24} />
      </button>

      <div ref={emblaRef} className="overflow-hidden">

        <div className="flex">

          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="
                flex-[0_0_84%]
                sm:flex-[0_0_60%]
                lg:flex-[0_0_33.333%]
                px-2
                md:px-3
              "
            >

              <Link
                to={`/resources/${blog.slug}`}
                className="block h-full"
              >

                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group
                    h-[470px]
                    md:h-[590px]
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    bg-white
                    border
                    border-gray-200
                    shadow-xl
                    flex
                    flex-col
                  "
                >

                  {/* Image */}

                  <div className="relative h-[165px] md:h-[220px] overflow-hidden flex-shrink-0">

                    <img
                      src={blog.image?.url}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-3 left-3 md:top-5 md:left-5 rounded-full bg-white px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-[#A61E22] shadow-lg">
                      {blog.category}
                    </div>

                  </div>

                  {/* Content */}

                  <div className="flex flex-1 flex-col p-5 md:p-7">

                    <h3 className="text-[21px] md:text-[28px] font-bold leading-tight text-gray-900 line-clamp-2 min-h-[56px] md:min-h-[72px]">
                      {blog.title}
                    </h3>

                    <p className="mt-3 md:mt-4 text-[15px] md:text-[17px] leading-6 md:leading-7 text-gray-600 line-clamp-3 min-h-[72px] md:min-h-[84px]">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-5 md:pt-6 border-t border-gray-100">

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock3 size={16} />
                        {blog.readTime} min read
                      </div>

                      <div className="mt-5 md:mt-6 inline-flex items-center gap-2 text-[15px] md:text-[17px] font-semibold text-[#A61E22] transition-all duration-300 group-hover:gap-3">
                        Read Article
                        <ArrowUpRight size={18} />
                      </div>

                    </div>

                  </div>

                </motion.article>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
);
};

export default FromOurBlog;