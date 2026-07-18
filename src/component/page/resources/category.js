import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { time, trend} from '../../../assets/allImg';
import { useNavigate } from 'react-router-dom';


const Category = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [showData, setShowData] = useState([]);
  const [selectBlog, setSelectBlog] = useState([]);
  const [selectinstagram, setSelectInstragram] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  const navigate = useNavigate();

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
          item.Image?.formats?.medium?.url ||
          item.Image?.url ||
          "",
        title: "Blog Post",
        timing: `${item.Read_Timing} min read`,
        description: item.Title,
        longDescription:
          item.Description
            ?.replace(/<[^>]+>/g, "")
            ?.slice(0, 100) || "",
        button: "Read Now",
      }));

      setSelectBlog(mappedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // ===========================
  // Fetch Instagram Reels
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
      }));

      setSelectInstragram(mappedInstagram);
    } catch (error) {
      console.error("Error fetching Instagram reels:", error);
    }
  };

  useEffect(() => {
    fetchInstagramVideos();
  }, []);

  // ===========================
  // Update Resources
  // ===========================
  useEffect(() => {
    if (selectedArea === "instagram") {
      setShowData(selectinstagram);
    } else if (selectedArea === "blog") {
      setShowData(selectBlog);
    } else {
      setShowData([...selectBlog, ...selectinstagram]);
    }
  }, [selectedArea, selectBlog, selectinstagram]);

  // Reset pagination when changing tabs
  useEffect(() => {
    setVisibleItems(6);
  }, [selectedArea]);

  // ===========================
  // Load More
  // ===========================
  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

 return (
  <div className="bg-backgroundColor py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {/* Top Bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Browse Resources
          </h2>

          <p className="mt-2 text-[15px] md:text-base text-gray-400">
            {showData.length} resources available
          </p>
        </div>

        <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur-xl p-1">
          {["all", "instagram", "blog"].map((tab) => {
            const label =
              tab === "all"
                ? "All"
                : tab === "instagram"
                ? "Instagram Reels"
                : "Articles";

            return (
              <button
                key={tab}
                onClick={() => setSelectedArea(tab)}
                className={`
                  rounded-full
                  px-5
                  md:px-6
                  py-2.5
                  text-sm
                  md:text-base
                  font-medium
                  transition-all
                  duration-300
                  ${
                    selectedArea === tab
                      ? "bg-[#A61E22] text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {showData?.slice(0, visibleItems).map((item, idx) => (
            <div
              key={idx}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#221818]
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Media */}
              <div className="relative h-64 overflow-hidden">

                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Type */}
                <div className="absolute top-5 left-5">
                  <span className="rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {item.media === "blog" ? "Article" : "Reel"}
                  </span>
                </div>

                {/* Timing */}
                <div className="absolute top-5 right-5">
                  <span className="flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs text-white">
                    <img
                      src={item.media === "blog" ? time : trend}
                      alt=""
                      className="w-4 h-4"
                    />
                    {item.timing}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">

                <h3 className="line-clamp-2 text-xl md:text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#D64B4F]">
                  {item.description}
                </h3>

                <p className="mt-4 flex-1 text-[15px] leading-7 text-gray-300 line-clamp-3">
                  {item.longDescription
                    ? item.longDescription
                    : item.media === "blog"
                    ? "Discover practical insights, expert advice, and actionable strategies to help you confidently navigate today's real estate journey."
                    : "Watch quick market updates, expert tips, and behind-the-scenes content from our real estate team."}
                </p>

                <div className="mt-6">
                  {item.button === "Read Now" ? (
                    <button
                      onClick={() =>
                        navigate(`/resources/blogs/${item.id}`, {
                          state: { showData },
                        })
                      }
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#A61E22]
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:bg-[#8E1A1D]
                        hover:shadow-xl
                      "
                    >
                      Read Article
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => window.open(item.url, "_blank")}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#A61E22]
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:bg-[#8E1A1D]
                        hover:shadow-xl
                      "
                    >
                      Watch Reel
                      <span>→</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Load More */}
        {showData.length > visibleItems && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                px-8
                py-3
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-[#A61E22]
                hover:border-[#A61E22]
              "
            >
              Load More
            </button>
          </div>
        )}

      </div>

    </div>
  </div>
);
};

export default Category;
