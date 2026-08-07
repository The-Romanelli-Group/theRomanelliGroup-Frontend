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

          title: item.title,

          excerpt: item.excerpt,

          content: item.content,

          category: item.category,

          tags: item.tags || [],

          featured: item.featured,

          readTime: item.readTime,

          publishedDate: item.publishedDate,

          image:
            item.image?.formats?.large?.url ||
            item.image?.formats?.medium?.url ||
            item.image?.url ||
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
  };

return (
  <>
    <section className="bg-backgroundColor pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Category */}

        <div className="flex justify-center">

          <span className="rounded-full bg-[#A61E22]/15 border border-[#A61E22]/30 px-5 py-2 text-sm font-semibold tracking-[0.15em] uppercase text-[#D64B4F]">

            {blog.category || "Real Estate"}

          </span>

        </div>

        {/* Title */}

        <h1 className="mt-8 text-center text-4xl md:text-6xl font-bold leading-tight text-white max-w-5xl mx-auto">

          {blog.title}

        </h1>

        {/* Meta */}

        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-400">

          <span>

            {blog.publishedDate
              ? new Date(blog.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Recently Published"}

          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />

          <span className="flex items-center gap-2">

            <img
              src={time}
              alt=""
              className="w-4 h-4"
            />

            {blog.readTime} min read

          </span>

        </div>

        {/* Hero Image */}

        <div className="mt-14 overflow-hidden rounded-[36px] border border-white/10">

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
          />

        </div>

      </div>

    </section>

    {/* ====================================== */}

    {/* ARTICLE */}

    {/* ====================================== */}

    <section className="bg-backgroundColor pb-24">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* LEFT */}

          <article className="lg:col-span-8">

            {blog.excerpt && (

              <div className="mb-10 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                <p className="text-xl leading-9 text-gray-200">

                  {blog.excerpt}

                </p>

              </div>

            )}

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
      </div>
      <Footer />
    </>
  );
};

export default SingleBlog;
