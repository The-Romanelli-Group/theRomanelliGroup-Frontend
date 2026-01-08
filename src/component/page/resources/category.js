import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { time, trend} from '../../../assets/allImg';
import { useNavigate } from 'react-router-dom';


const Category = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [showData, setShowData] = useState([]);
  // const [selectyoutube, setSelectYoutube] = useState([]); // YouTube disabled
  const [selectBlog, setSelectBlog] = useState([]);
  const [selectinstagram, setSelectInstragram] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const navigate = useNavigate();

  // ✅ Fetch Blogs from Strapi
  const fetchBlog = async () => {
    try {
      const response = await axios.get("https://secure-pleasure-8cb8bfce78.strapiapp.com/api/blogs?populate=*");
      const data = response.data.data;
      const mappedBlogs = data.map((item) => ({
        id: item.id,
        media: "blog",
        type: "image",
        src:
          item.Image?.formats?.medium?.url ||
          item.Image?.url
            ? item.Image.url
            : "",
        title: "Blog Post",
        timing: `${item.Read_Timing} min read`,
        description: item.Title,
        longDescription: item.Description.replace(/<[^>]+>/g, "").slice(0, 100),
        button: "Read Now",
      }));
      setSelectBlog(mappedBlogs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  // ❌ YouTube section temporarily disabled
  /*
  const fetchYoutubeVidoes = async () => { ... }
  useEffect(() => {
    fetchYoutubeVidoes();
  }, []);
  */

  // ✅ Instagram - for now use static JSON (you’ll provide this later)
  const fetchInstagramVidoes = async () => {
    try {
      // Instead of API call, we’ll use your local JSON later
      // Example placeholder:

      const response = await axios.get(`${process.env.REACT_APP_FEATURE_LISTINGS}/instagram-datas?populate=*`);
      const apiData = response.data.data;
      const mappedInstagram = apiData.map(item => ({
        id: item.id,
        media: "image",
        type: "image",
        title: "Instagram Reel",
        description: item.description,
        timing: item.views,
        src: item.thumbnail?.formats?.medium?.url ||
          item.thumbnail?.url
            ? item.thumbnail.url
            : "",
        url: item.reel_link,
        button: "Watch on Instagram"
      }));
      
      setSelectInstragram(mappedInstagram);
    } catch (error) {
      console.error("Error fetching Instagram reels:", error);
    }
  };

  useEffect(() => {
    fetchInstagramVidoes();
  }, []);

  // ✅ Update display logic (YouTube removed)
  useEffect(() => {
    if (selectedArea === "instagram") {
      setShowData(selectinstagram);
    } else if (selectedArea === "all") {
      setShowData([...selectBlog, ...selectinstagram]);
    } else if (selectedArea === "blog") {
      setShowData(selectBlog);
    }
  }, [selectedArea, selectinstagram, selectBlog]);

  const loadMore = () => setVisibleItems(visibleItems + 6);

  return (
    <div className="bg-backgroundColor">
      <div className="container mx-auto lg:px-24 px-5 py-16 relative bg-backgroundColor">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Explore By
            <span className="italic font-playfair"> Category</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-4">
            Find the content you need with ease—browse by topic to stay informed and inspired.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:w-full mx-auto leading-relaxed text-base">
            <button
              onClick={() => setSelectedArea("all")}
              className={`inline-flex py-2 px-4 sm:px-6 ${
                selectedArea === "all" ? "text-white bg-red-800" : "text-black bg-white"
              } text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedArea("instagram")}
              className={`inline-flex py-2 px-4 sm:px-6 ${
                selectedArea === "instagram" ? "text-white bg-red-800" : "text-black bg-white"
              } text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              Instagram Reels
            </button>
            <button
              onClick={() => setSelectedArea("blog")}
              className={`inline-flex py-2 px-4 sm:px-6 ${
                selectedArea === "blog" ? "text-white bg-red-800" : "text-black bg-white"
              } text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="relative overflow-hidden mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {showData?.slice(0, visibleItems).map((item, idx) => (
              <div key={idx} className="relative w-full">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white">
                  <div className="absolute top-2 left-2 bg-white py-1 px-2 text-black font-semibold">
                    {item.title}
                  </div>
                  <div className="absolute flex items-center top-2 right-2 bg-white py-1 px-2 text-black font-semibold">
                    <img src={item.media === "blog" ? time : trend} className="w-5 h-5 mr-1" alt="icon" />
                    {item.timing}
                  </div>

                  <p className="text-xl sm:text-xl font-normal mb-3 text-left">
                    {item.description.split(" ").slice(0, 10).join(" ")}
{item.description.split(" ").length > 10 && " ..."}
                  </p>

                  <div className="flex gap-2">
                    {item.button === "Read Now" ? (
                      <button
                        onClick={() => navigate(`/resources/blogs/${item.id}`, { state: { showData } })}
                        className="flex-1 bg-red-700 py-2 text-sm sm:text-lg font-semibold text-white transition hover:bg-red-800"
                      >
                        {item.button}
                      </button>
                    ) : (
                      <button
                        onClick={() => window.open(item.url, "_blank")}
                        className="flex-1 bg-red-700 py-2 text-sm sm:text-lg font-semibold text-white transition hover:bg-red-800"
                      >
                        {item.button}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        {showData.length > visibleItems && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMore}
              className="inline-flex py-2 px-4 sm:px-6 bg-white text-black text-base sm:text-lg"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
