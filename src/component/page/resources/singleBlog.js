import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Footer from "../Default Pages/footer";
import Form from "./single Blog/form";

import { time } from "../../../assets/allImg";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Passed from Resources page
  const relatedResources = location.state?.showData || [];

 const [blog, setBlog] = useState(null);

// ==========================================
// Fetch Blog
// ==========================================

useEffect(() => {
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://secure-pleasure-8cb8bfce78.strapiapp.com/api/blogs?filters[id][$eq]=${id}&populate=*`
      );

      const item = response.data.data?.[0];

      if (!item) {
        setBlog(null);
        return;
      }

      setBlog({
        id: item.id,

        title: item.title || item.Title || "",

        excerpt: item.excerpt || item.Excerpt || "",

        content: item.content || item.Description || "",

        category: item.category || item.Category || "Real Estate",

        tags: item.tags || [],

        featured: item.featured ?? false,

        readTime:
          item.readTime ||
          item.Read_Timing ||
          5,

        publishedDate:
          item.publishedDate ||
          item.Post_Date,

        image:
          item.image?.formats?.large?.url ||
          item.image?.formats?.medium?.url ||
          item.image?.url ||
          item.Image?.url ||
          "",
      });
    } catch (err) {
      console.error("Failed to fetch blog:", err);
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

  <section className="bg-backgroundColor pt-24 pb-16">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Categories */}

      <div className="flex flex-wrap justify-center gap-3">
        {(blog.tags?.length ? blog.tags : [blog.category || "Real Estate"]).map(
          (tag, index) => (
            <span
              key={index}
              className="rounded-full bg-[#A61E22]/15 border border-[#A61E22]/30 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#D64B4F]"
            >
              {tag}
            </span>
          )
        )}
      </div>

      {/* Title */}

      <h1 className="mt-8 text-center font-Montserrat text-4xl md:text-6xl font-bold leading-tight text-white max-w-5xl mx-auto">
        {blog.title}
      </h1>

      {/* Meta */}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm md:text-base">

        <span>
          {blog.publishedDate
            ? new Date(blog.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Recently Published"}
        </span>

        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>

        <span className="flex items-center gap-2">
          <img
            src={time}
            alt=""
            className="w-4 h-4"
          />

          {blog.readTime || 5} min read
        </span>

      </div>

      {/* Hero Image */}

      <div className="mt-14 overflow-hidden rounded-[32px] border border-white/10">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full object-cover"
        />

      </div>

    </div>

  </section>
   {/* ================================================= */}
{/* ARTICLE */}
{/* ================================================= */}

<section className="bg-backgroundColor pb-24">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

      {/* LEFT */}

      <article className="lg:col-span-8">

        {/* Excerpt */}

        {blog.excerpt && (
          <div className="mb-10 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <p className="text-xl leading-9 text-gray-200">
              {blog.excerpt}
            </p>
          </div>
        )}

        {/* Blog Content */}

        <div
          className="
            prose
            prose-invert
            prose-lg
            max-w-none

            prose-headings:text-white
            prose-headings:font-bold

            prose-p:text-gray-300
            prose-p:leading-9

            prose-li:text-gray-300
            prose-li:leading-8

            prose-a:text-[#D64B4F]
            prose-strong:text-white

            prose-img:rounded-2xl
          "
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

      </article>

      {/* RIGHT */}

      <aside className="lg:col-span-4">

        <div className="sticky top-28">

          <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <h3 className="text-3xl font-bold text-white">
              Let's Talk
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              Thinking about buying or selling in Central Ohio?
              Our team is here to help.
            </p>

            <div className="mt-8">
              <Form />
            </div>

          </div>

        </div>

      </aside>

    </div>

  </div>

</section>
      {/* ================================================= */}
    {/* RELATED ARTICLES */}
    {/* ================================================= */}

    <section className="bg-backgroundColor pb-24">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Continue Reading
            </h2>

            <p className="mt-3 text-gray-400">
              More expert insights to help you navigate Central Ohio real estate.
            </p>
          </div>

          <button
            onClick={() => navigate("/resources")}
            className="rounded-full border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-[#A61E22]"
          >
            View All Articles
          </button>

        </div>

        {relatedBlogs.length > 0 ? (

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {relatedBlogs.map((item) => (

              <div
                key={item.id}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#221818] transition-all duration-300 hover:-translate-y-2 hover:border-[#A61E22]/40"
              >

                {/* Image */}

                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.description}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-64 w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                <div className="p-7">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-[#A61E22]/15 px-3 py-1 text-xs uppercase tracking-widest text-[#D64B4F]">
                      {item.title}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-gray-400">

                      <img
                        src={item.media === "blog" ? time : trend}
                        alt=""
                        className="w-4 h-4"
                      />

                      {item.timing}

                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold leading-tight text-white">
                    {item.description}
                  </h3>

                  <button
                    onClick={() =>
                      navigate(`/resources/blogs/${item.id}`, {
                        state: {
                          showData: relatedResources,
                        },
                      })
                    }
                    className="mt-8 inline-flex items-center rounded-full bg-[#A61E22] px-6 py-3 font-semibold text-white transition hover:bg-[#8E1A1D]"
                  >
                    Read Article
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="mt-12 rounded-[30px] border border-white/10 bg-white/5 p-10 text-center">

            <h3 className="text-2xl font-semibold text-white">
              No related articles found.
            </h3>

            <button
              onClick={() => navigate("/resources")}
              className="mt-6 rounded-full bg-[#A61E22] px-7 py-3 font-semibold text-white transition hover:bg-[#8E1A1D]"
            >
              Browse All Resources
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