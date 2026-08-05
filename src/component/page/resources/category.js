import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { time, trend } from "../../../assets/allImg";

const Category = ({ resourceState }) => {
  const navigate = useNavigate();

  const {
    search,
    activeSearch,
    filters,
    contentType,
    setContentType,
  } = resourceState;

  // ===========================
  // State
  // ===========================

  const [blogs, setBlogs] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  // ===========================
  // Fetch Blogs
  // ===========================

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        "https://secure-pleasure-8cb8bfce78.strapiapp.com/api/blogs?populate=*"
      );

      const mappedBlogs = response.data.data.map((item) => ({
        id: item.id,

        media: "blog",

        type: "image",

        src:
          item.image?.formats?.medium?.url ||
          item.image?.formats?.large?.url ||
          item.image?.url ||
          "",

        title: item.title,

        timing: `${item.readTime} min read`,

        description: item.title,

        longDescription:
          item.excerpt ||
          item.content?.replace(/<[^>]+>/g, "").slice(0, 150) ||
          "",

        category: item.category,

        tags: item.tags,

        featured: item.featured,

        slug: item.slug,

        button: "Read Now",

        createdAt: item.publishedDate || item.createdAt,
      }));

      setBlogs(mappedBlogs);
    } catch (err) {
      console.error(err);
    }
  };

  // ===========================
  // Fetch Instagram
  // ===========================

  const fetchInstagramVideos = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_FEATURE_LISTINGS}/instagram-datas?populate=*`
      );

      const mappedInstagram = response.data.data.map((item) => ({
        id: item.id,

        media: "instagram",

        type: "image",

        title: "Instagram Reel",

        description: item.description,

        timing: item.views,

        src:
          item.thumbnail?.formats?.medium?.url ||
          item.thumbnail?.url ||
          "",

        url: item.reel_link,

        button: "Watch on Instagram",

        createdAt: item.createdAt,
      }));

      setInstagram(mappedInstagram);
    } catch (err) {
      console.error(err);
    }
  };

  // ===========================
  // Initial Load
  // ===========================

  useEffect(() => {
    Promise.all([
      fetchBlog(),
      fetchInstagramVideos(),
    ]);
  }, []);

  // ===========================
  // Combined Resources
  // ===========================

  const allResources = useMemo(() => {
    return [...blogs, ...instagram];
  }, [blogs, instagram]);

  // ===========================
  // Quick Tabs
  // ===========================

  const tabFilteredResources = useMemo(() => {
    switch (contentType) {
      case "blog":
        return blogs;

      case "instagram":
        return instagram;

      default:
        return allResources;
    }
  }, [
    contentType,
    blogs,
    instagram,
    allResources,
  ]);

  // ===========================
  // Search + Filters
  // ===========================

  const filteredResources = useMemo(() => {
    let data = [...tabFilteredResources];

    // Keyword Search (only after clicking Search)
    if (activeSearch.trim()) {
      const keyword = activeSearch.toLowerCase();

      data = data.filter((item) => {
        return (
          item.title?.toLowerCase().includes(keyword) ||
          item.description?.toLowerCase().includes(keyword) ||
          item.longDescription?.toLowerCase().includes(keyword) ||
          item.category?.toLowerCase().includes(keyword) ||
          item.tags?.some((tag) =>
            String(tag).toLowerCase().includes(keyword)
          )
        );
      });
    }

    // Content Type
    if (filters.type && filters.type !== "All") {
      if (filters.type === "Blog Posts") {
        data = data.filter((x) => x.media === "blog");
      }

      if (filters.type === "Instagram Reels") {
        data = data.filter((x) => x.media === "instagram");
      }
    }

    // Topic
    if (filters.topic) {
      data = data.filter(
        (item) =>
          item.category === filters.topic ||
          item.tags?.includes(filters.topic)
      );
    }

    // Sort
    if (filters.sort === "Latest First") {
      data.sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    if (filters.sort === "Oldest First") {
      data.sort(
        (a, b) =>
          new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    return data;
  }, [
    tabFilteredResources,
    activeSearch,
    filters,
  ]);

  // ===========================
  // Reset Pagination
  // ===========================

  useEffect(() => {
    setVisibleItems(6);
  }, [filteredResources]);

  // ===========================
  // Load More
  // ===========================

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

 return (
  <div className="bg-backgroundColor py-10 md:py-14">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Browse Resources
          </h2>

          <p className="mt-3 text-gray-400">
            {filteredResources.length}{" "}
            {filteredResources.length === 1 ? "resource" : "resources"} available
          </p>
        </div>

        <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur-xl p-1">

          {[
            { value: "all", label: "All" },
            { value: "instagram", label: "Instagram Reels" },
            { value: "blog", label: "Articles" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setContentType(tab.value)}
              className={`rounded-full px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                contentType === tab.value
                  ? "bg-[#A61E22] text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}

        </div>

      </div>

      {/* No Results */}

      {filteredResources.length === 0 ? (

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 py-20 text-center">

          <h3 className="text-2xl font-bold text-white">
            No resources found
          </h3>

          <p className="mt-3 text-gray-400">
            Try changing your search or clearing your filters.
          </p>

        </div>

      ) : (

        <>

          {/* Grid */}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredResources
              .slice(0, visibleItems)
              .map((item) => (

                <div
                  key={`${item.media}-${item.id}`}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#221818] transition-all duration-500 hover:-translate-y-2 hover:border-[#A61E22]/30"
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden aspect-[16/10] bg-[#161111] isolate">

                    <img
                      src={item.src}
                      alt={item.description}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#221818] via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                        {item.media === "blog" ? "Article" : "Reel"}
                      </span>
                    </div>

                    <div className="absolute right-5 top-5">
                      <span className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-xs text-white">

                        <img
                          src={item.media === "blog" ? time : trend}
                          alt=""
                          className="w-4 h-4"
                        />

                        {item.timing}

                      </span>
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-7 flex flex-col h-full">

                    <h3 className="text-2xl font-bold leading-tight text-white transition duration-300 group-hover:text-[#D64B4F] line-clamp-2">
                      {item.description}
                    </h3>

                    <p className="mt-4 text-gray-300 leading-8 line-clamp-3">

                      {item.longDescription ||
                        (item.media === "blog"
                          ? "Discover practical insights, expert advice and actionable strategies to help you confidently navigate today's real estate market."
                          : "Watch quick market updates, expert advice and behind-the-scenes moments from our real estate experts.")}

                    </p>

                    <div className="mt-8">

                      {item.media === "blog" ? (

                        <button
                          onClick={() =>
                            navigate(`/resources/blogs/${item.id}`, {
                              state: {
                                showData: filteredResources,
                              },
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-full bg-[#A61E22] px-7 py-3.5 text-white font-semibold transition duration-300 hover:bg-[#8E1A1D]"
                        >
                          Read Article →
                        </button>

                      ) : (

                        <button
                          onClick={() => window.open(item.url, "_blank")}
                          className="inline-flex items-center gap-2 rounded-full bg-[#A61E22] px-7 py-3.5 text-white font-semibold transition duration-300 hover:bg-[#8E1A1D]"
                        >
                          Watch Reel →
                        </button>

                      )}

                    </div>

                  </div>

                </div>

              ))}

          </div>

          {filteredResources.length > visibleItems && (

            <div className="mt-12 flex justify-center">

              <button
                onClick={loadMore}
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-white font-semibold transition hover:bg-[#A61E22] hover:border-[#A61E22]"
              >
                Load More
              </button>

            </div>

          )}

        </>

      )}

    </div>
  </div>
);
};

export default Category;
