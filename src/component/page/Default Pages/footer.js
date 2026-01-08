import React from 'react'
import kw from "../../../assets/kw.png"
import instagram from "../../../assets/Instagram.png"
import youtube from "../../../assets/YouTube.png"
import facebook from "../../../assets/Facebook.png"
import tiktok from "../../../assets/TikTok.png"
import { Link, useLocation } from 'react-router-dom'
import { logoUrl } from '../../../assets/allImg'

const Footer = () => {
    const location =useLocation()
    const socialLinks = [
        { src: youtube, href: "https://www.youtube.com/channel/UC6JTBB3S5QoOpknrvT16s7Q", alt: "YouTube" },
        { src: kw, href: "https://theromanelligroup.kw.com/", alt: "KW" },
        { src: instagram, href: "https://www.instagram.com/theromanelligroup_realtors/?hl=en", alt: "Instagram" },
        { src: facebook, href: "https://www.facebook.com/romanellihomes", alt: "Facebook" },
        { src: tiktok, href: "https://www.tiktok.com/@the.romanelli.gro", alt: "TikTok" },
    ];
    return (
        <>
        <header className={`text-gray-600 body-font ${location?.pathname === '/resources' || location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "bg-white": "bg-backgroundColor"}  `}>
            <div className="container mx-auto flex  flex-wrap pt-5 flex-col md:flex-row items-center px-0 lg:px-24">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <img className="w-6 mr-5 h-auto hover:opacity-75 transition-opacity" src={link.src} alt={link.alt} />
                        </a>
                    ))}
                </nav>

                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img className={`w-24 h-auto ${location?.pathname === '/resources' || location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "invert": ""}`} src={logoUrl} alt='logo' />
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end">
                    {/* <button  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className={`inline-flex items-center ${location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "bg-black text-white  hover:bg-gray-500":"bg-gray-100 text-gray-900  hover:bg-gray-200"}  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0`}>Back To Top
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9997 24V8M15.9997 8L9.33301 14.6667M15.9997 8L22.6663 14.6667" stroke={`${location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "white" : "black"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button> */}
                </div>
                <hr className="bg-white h-[2px] w-full opacity-80 px-5 xl:px-24 mt-3" />
            
            </div>
             <div className="container mx-auto px-4 lg:px-24 footer-container">
            <div className="flex flex-col lg:flex-row items-center pt-0">
               
                <div className="lg:w-1/4 flex items-center justify-center lg:justify-start mb-2 lg:mb-0">
                    <p className='text-sm lg:text-lg pb-2 pt-3 text-white text-center lg:text-left'>© 2024 - The Romanelli Group</p>
                </div>

            
                <div className="flex flex-wrap text-white w-full lg:w-3/4 title-font font-medium items-center justify-center lg:justify-start lg:pl-20 sm:pl-10 mb-4 md:mb-0 space-x-1 text-xs lg:text-base footer-links">
                    <a href="/cookie-policy" target='_blank' className="hover:text-gray-300">Cookie Policy</a>
                    <span className="separator">|</span>
                    <a href="/terms-of-use" target='_blank' className="hover:text-gray-300">Terms Of Use</a>
                    <span className="separator">|</span>
                    <a href="/privacy-policy" target='_blank' className="hover:text-gray-300">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="/dmca-notice" target='_blank' className="hover:text-gray-300">DMCA</a>
                    <span className="separator">|</span>
                    <a href="/fair-housing" target='_blank' className="hover:text-gray-300">Fair Housing</a>
                    <span className="separator">|</span>
                    <a href="/accessibility-policy" target='_blank' className="hover:text-gray-300">Accessibility</a>
                </div>
            </div>
        </div>
          
        </header>
        </>
    )
}

export default Footer