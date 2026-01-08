import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "./single Blog/form";
import { time, trend } from "../../../assets/allImg";
import Footer from "../Default Pages/footer";
import LoadingScreen from "../../../loading/loadingScreen";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const passedItem = location.state?.showData; // 👈 full list here
  const [blog, setBlog] = useState(null);
  const showData = passedItem?.filter((item) => item.id != id);

  useEffect(() => {
    axios
      .get(
        `https://secure-pleasure-8cb8bfce78.strapiapp.com/api/blogs?filters[id][$eq]=${id}&populate=*`
      )
      .then((res) => setBlog(res.data.data[0]))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p><LoadingScreen progress={90}/></p>;

  return (
    <>
      <div className="pt-20 px-4 sm:px-8 lg:px-24 bg-backgroundColor">
        {/* Blog Categories */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-wrap gap-2 text-gray-900">
            <div className="bg-white px-4 py-1 text-sm sm:text-base">
              Home Buying Tips
            </div>
            <div className="bg-white px-4 py-1 text-sm sm:text-base">
              Market Trends
            </div>
          </div>
        </div>

        {/* Blog Title & Meta */}
        <h1 className="text-center py-4 text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          {blog.Title}
        </h1>
        <p className="text-center pb-4 text-white text-sm sm:text-base">
        {new Date(blog?.Post_Date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })} | {blog.Read_Timing} minutes To Read
        </p>

        {/* Blog Image */}
        <img
          src={blog?.Image?.url}
          alt="blog"
          className="w-full max-h-[500px] object-cover rounded-lg"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 text-left">
          {/* Left Column - Blog Text */}
          <div className="lg:col-span-2 text-white">
            <div
              className="prose prose-invert max-w-none prose-sm sm:prose-base"
              dangerouslySetInnerHTML={{ __html: blog?.Description }}
            />
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-1">
            <Form />
          </div>
        </div>

        {/* Related Blogs */}
        <section className="body-font text-white mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                You Might Also{" "}
                <span className="italic font-dmsans">Like</span>
              </div>
              <p className="text-sm sm:text-base mt-1">
                Hand-picked articles to help you make informed decisions.
              </p>
            </div>
            <button
              className="px-4 py-2 bg-white text-backgroundColor text-sm sm:text-base rounded shadow"
              onClick={() => {
                navigate("/resources");
              }}
            >
              View All
            </button>
          </div>

          {/* Related Grid */}
          <div className="relative overflow-hidden mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {showData?.slice(0, 3)?.map((item, idx) => (
                <div key={idx} className="relative w-full rounded-lg overflow-hidden">
                  {/* Media */}
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.src}
                      className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/50 text-white">
                    {/* Tag + Time */}
                    <div className="absolute top-2 left-2 bg-white py-1 px-2 text-xs sm:text-sm text-black font-semibold rounded">
                      {item.title}
                    </div>
                    <div className="absolute flex items-center top-2 right-2 bg-white py-1 px-2 text-xs sm:text-sm text-black font-semibold rounded">
                      <img
                        src={item?.media === "blog" ? time : trend}
                        className="w-4 h-4 mr-1"
                        alt="icon"
                      />
                      {item.timing}
                    </div>

                    {/* Description */}
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-left">
                      {item.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      {item.button === "Read Now" ? (
                        <button
                          onClick={() =>
                            navigate(`/resources/blogs/${item.id}`, {
                              state: { showData },
                            })
                          }
                          className="flex-1 bg-red-700 py-2 text-sm sm:text-base font-semibold text-white transition hover:bg-red-800 rounded"
                        >
                          {item.button}
                        </button>
                      ) : (
                        <button
                          onClick={() => window.open(item.url, "_blank")}
                          className="flex-1 bg-red-700 py-2 text-sm sm:text-base font-semibold text-white transition hover:bg-red-800 rounded"
                        >
                          {item.button}
                        </button>
                      )}

                      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 flex items-center justify-center transition hover:bg-red-800 rounded">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.333 14.665L14.666 1.332M14.666 1.332H2.666M14.666 1.332V13.332"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlog;
