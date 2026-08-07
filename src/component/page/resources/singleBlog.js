import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Footer from "../Default Pages/footer";
import Form from "./single Blog/form";
import { time, trend } from "../../../assets/allImg";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Passed from Resources page
  const relatedResources = location.state?.showData || [];

 const [blog, setBlog] = useState(null);
const [loading, setLoading] = useState(true);

// ==========================================
// Fetch Blog
// ==========================================

useEffect(() => {
  const fetchBlog = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://secure-pleasure-8cb8bfce78.strapiapp.com/api/blogs?filters[id][$eq]=${id}&populate=*`
      );

      const item = response.data.data?.[0];

      if (!item) {
        setBlog(null);
      } else {
        setBlog({
          id: item.id,

          title: item.title || item.Title || "",

          excerpt: item.excerpt || item.Excerpt || "",

          content: item.content || item.Description || "",

          category: item.category || item.Category || "Real Estate",

          tags: item.tags || [],

          featured: item.featured ?? false,

          readTime: item.readTime || item.Read_Timing || 5,

          publishedDate: item.publishedDate || item.Post_Date,

          image:
            item.image?.formats?.large?.url ||
            item.image?.formats?.medium?.url ||
            item.image?.url ||
            item.Image?.url ||
            "",
        });
      }
    } catch (err) {
      console.error("Failed to fetch blog:", err);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  fetchBlog();
}, [id]);

// ==========================================
// Related Articles
// ==========================================

const relatedBlogs = useMemo(() => {
  return relatedResources
    .filter(
      (item) =>
        item.media === "blog" &&
        String(item.id) !== String(id)
    )
    .slice(0, 3);
}, [relatedResources, id]);

// ==========================================
// Loading
// ==========================================

if (loading) {
  return (
    <div className="min-h-screen bg-backgroundColor" />
  );
}

// ==========================================
// Article Not Found
// ==========================================

if (!blog) {
  return (
    <>
      <div className="bg-backgroundColor min-h-screen flex items-center justify-center px-5">
        <div className="text-center max-w-lg">

          <h1 className="text-4xl font-bold text-white">
            Article Not Found
          </h1>

          <p className="mt-4 text-gray-400">
            This article may have been removed or the link is incorrect.
          </p>

          <button
            onClick={() => navigate("/resources")}
            className="mt-8 rounded-full bg-[#A61E22] px-8 py-3 font-semibold text-white transition hover:bg-[#8E1A1D]"
          >
            Back to Resources
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}
return (
<>
  {/* ================================================= */}
  {/* HERO */}
  {/* ================================================= */}

  <section className="bg-backgroundColor pt-32 md:pt-40 pb-14 md:pb-20">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Category */}

      <div className="flex flex-wrap justify-center gap-3">

        {(blog.tags?.length ? blog.tags : [blog.category || "Real Estate"]).map(
          (tag, index) => (
            <span
              key={index}
              className="rounded-full border border-[#A61E22]/30 bg-[#A61E22]/15 px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#D64B4F]"
            >
              {tag}
            </span>
          )
        )}

      </div>

      {/* Title */}

      <h1 className="mt-6 md:mt-8 max-w-5xl mx-auto text-center font-Montserrat text-[34px] leading-tight md:text-6xl lg:text-7xl font-bold text-white">

        {blog.title}

      </h1>

      {/* Meta */}

      <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[15px] md:text-base text-gray-400">

        <span>
          {blog.publishedDate
            ? new Date(blog.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Recently Published"}
        </span>

        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-500"></span>

        <span className="flex items-center gap-2">

          <img
            src={time}
            alt=""
            className="w-4 h-4"
          />

          {blog.readTime || 5} min read

        </span>

      </div>

      {/* Featured Image */}

      <div className="mt-10 md:mt-14 overflow-hidden rounded-[28px] md:rounded-[36px] shadow-2xl border border-white/10">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover"
        />

      </div>

    </div>

  </section>

  {/* ================================================= */}
  {/* ARTICLE */}
  {/* ================================================= */}

  <section className="bg-white py-14 md:py-20">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* LEFT */}

        <article className="lg:col-span-8">

          {blog.excerpt && (

            <div className="mb-10 md:mb-12 rounded-[28px] border border-gray-200 bg-gray-50 p-6 md:p-8">

              <p className="text-lg md:text-xl leading-8 md:leading-9 text-gray-700">

                {blog.excerpt}

              </p>

            </div>

          )}

          <div
            className="
              prose
              prose-lg
              max-w-none

              prose-headings:font-Montserrat
              prose-headings:text-gray-900
              prose-headings:font-bold

              prose-h2:mt-12
              prose-h3:mt-10

              prose-p:text-gray-700
              prose-p:leading-8

              prose-li:text-gray-700
              prose-li:leading-8

              prose-a:text-[#A61E22]
              prose-a:no-underline
              hover:prose-a:underline

              prose-strong:text-gray-900

              prose-img:rounded-[20px]
              prose-img:shadow-lg
            "
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

        </article>

        {/* RIGHT */}

        <aside className="lg:col-span-4">

          <div className="sticky top-28">

            <div className="rounded-[30px] border border-gray-200 bg-white shadow-xl p-7 md:p-8">

              <span className="inline-flex rounded-full bg-[#A61E22]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#A61E22]">

                Need Guidance?

              </span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">

                Ready to Make Your Next Move?

              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Whether you're buying your first home, selling your current one,
                or simply have questions about the Central Ohio market, our team
                is here to help.

              </p>

              <button
                onClick={() => navigate("/contact-us")}
                className="mt-8 w-full rounded-2xl bg-[#A61E22] py-4 font-semibold text-white transition duration-300 hover:bg-[#8E1A1D]"
              >
                Talk With Our Team
              </button>

              <button
                onClick={() => navigate("/properties")}
                className="mt-4 w-full rounded-2xl border border-gray-300 bg-white py-4 font-semibold text-gray-900 transition duration-300 hover:bg-gray-100"
              >
                Browse Properties
              </button>

            </div>

          </div>

        </aside>

      </div>

    </div>

  </section>
     {/* ================================================= */}
{/* RELATED ARTICLES */}
{/* ================================================= */}

<section className="bg-backgroundColor py-14 md:py-20">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    {/* Section Header */}

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

      <div>

        <span className="font-Montserrat text-[#A61E22] text-sm font-semibold uppercase tracking-[0.18em]">
          Keep Reading
        </span>

        <h2 className="mt-3 font-Montserrat text-[32px] md:text-5xl font-bold leading-tight text-white">
          Related Articles
        </h2>

        <p className="mt-4 max-w-xl text-[15px] md:text-lg leading-7 text-gray-400">
          Continue exploring expert advice, market updates and practical
          insights from our team.
        </p>

      </div>

      <button
        onClick={() => navigate("/resources")}
        className="rounded-full bg-[#A61E22] px-7 py-4 font-semibold text-white transition duration-300 hover:bg-[#8E1A1D]"
      >
        View All Resources
      </button>

    </div>

    {relatedBlogs.length > 0 ? (

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {relatedBlogs.map((item) => (

          <article
            key={item.id}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#1B1B1B] transition duration-300 hover:-translate-y-2 hover:border-[#A61E22]/40"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={item.src}
                alt={item.title}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

            {/* Content */}

            <div className="p-6">

              <div className="flex items-center justify-between">

                <span className="rounded-full bg-[#A61E22]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#D64B4F]">
                  {item.category || "Real Estate"}
                </span>

                <span className="flex items-center gap-2 text-sm text-gray-400">

                  <img
                    src={time}
                    alt=""
                    className="w-4 h-4"
                  />

                  {item.timing}

                </span>

              </div>

              <h3 className="mt-5 font-Montserrat text-2xl font-bold leading-snug text-white line-clamp-2">
                {item.title}
              </h3>

              {item.longDescription && (

                <p className="mt-4 text-gray-400 leading-7 line-clamp-3">
                  {item.longDescription}
                </p>

              )}

              <button
                onClick={() =>
                  navigate(`/resources/blogs/${item.id}`, {
                    state: {
                      showData: relatedResources,
                    },
                  })
                }
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#D64B4F] transition-all duration-300 hover:gap-4"
              >
                Read Article

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </button>

            </div>

          </article>

        ))}

      </div>

    ) : (

      <div className="mt-12 rounded-[28px] border border-white/10 bg-white/5 p-10 md:p-14 text-center">

        <h3 className="font-Montserrat text-3xl font-bold text-white">
          No Related Articles
        </h3>

        <p className="mt-3 text-gray-400">
          Explore our full resource library for more insights.
        </p>

        <button
          onClick={() => navigate("/resources")}
          className="mt-8 rounded-full bg-[#A61E22] px-7 py-4 font-semibold text-white transition duration-300 hover:bg-[#8E1A1D]"
        >
          Browse Resources
        </button>

      </div>

    )}

  </div>

</section>

<Footer />

</>
);
};

export default SingleBlog;