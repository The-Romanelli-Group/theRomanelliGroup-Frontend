import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoPopUp from './videoPopUp';
import { pop_video } from '../../../assets/allImg';

const SideModal = () => {
    const navigate=useNavigate()
     const [videoPopUp, setVideoPopUp] = useState(false);
    const handleVideoPopUp = () => {
        setVideoPopUp(true)
    }
  return (
    <div>
         <div className={`fixed inset-auto bottom-1 md:bottom-4 flex  right-2 sm:right-4 md:right-10 border-2 border-black md:border-4 h-32 w-20 sm:h-32 sm:w-24 md:h-40 md:w-28 rounded-lg  flex-col items-end justify-end p-1
                 sm:p-2 shadow-lg z-50`}>
                    {/* Video Background */}
                    <div className="absolute inset-0 w-full h-full">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover rounded-lg"
                            onClick={handleVideoPopUp}
                        >
                            <source src={pop_video} type="video/mp4" />
                        </video>
                    </div>
                    {/* Square Button */}
                    <button className="rounded-sm z-10 mb-1" type="button" onClick={handleVideoPopUp}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        >
                            <path d="M3.33301 7.4987V4.9987C3.33301 4.07822 4.0792 3.33203 4.99967 3.33203H7.49967" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.6667 12.5V15C16.6667 15.9205 15.9205 16.6667 15 16.6667H12.5" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 3.33203H15C15.9205 3.33203 16.6667 4.07822 16.6667 4.9987V7.4987" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.49967 16.6667H4.99967C4.0792 16.6667 3.33301 15.9205 3.33301 15V12.5" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* "Let Connect Now" Button */}
                    <button type="button" onClick={()=>{navigate("/contact-us")}} className="absolute right-2 top-1/4 transform -translate-x-3/4 -translate-y-1/2 bg-red-800 text-[7px]  md:text-[10px]  text-white px-1 py-1 md:px-1 md:py-2 border border-black rounded-l-lg rounded-tr-lg shadow-lg">
                        Let's Connect Now
                    </button>

                </div>
                  {videoPopUp && <VideoPopUp video_pop_url={pop_video} close={() => { setVideoPopUp(false) }} />}
    </div>
  )
}

export default SideModal