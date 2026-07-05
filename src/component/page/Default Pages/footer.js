import React from "react";
import { ArrowUp } from "lucide-react";

import kw from "../../../assets/kw.png";
import instagram from "../../../assets/Instagram.png";
import youtube from "../../../assets/YouTube.png";
import facebook from "../../../assets/Facebook.png";
import tiktok from "../../../assets/TikTok.png";

import { useLocation } from "react-router-dom";

import { logoUrl } from "../../../assets/allImg";

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
    <header
      className={`text-gray-600 body-font ${
        location?.pathname === "/resources" ||
        location?.pathname.startsWith("/properties/") ||
        location?.pathname.startsWith("/details/")
          ? "bg-white"
          : "bg-backgroundColor"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-6 px-5 lg:px-24">

        {/* Social */}

        <nav className="flex lg:w-2/5 items-center justify-center lg:justify-start mb-5 md:mb-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 rounded-full p-2 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              <img
                className="w-6 h-6"
                src={link.src}
                alt={link.alt}
              />
            </a>
          ))}
        </nav>

        {/* Logo */}

        <div className="flex order-first lg:order-none lg:w-1/5 justify-center mb-5 md:mb-0">
          <img
            className={`w-24 h-auto ${
              location?.pathname === "/resources" ||
              location?.pathname.startsWith("/properties/") ||
              location?.pathname.startsWith("/details/")
                ? "invert"
                : ""
            }`}
            src={logoUrl}
            alt="The Romanelli Group"
          />
        </div>

        {/* Back To Top */}

        <div className="lg:w-2/5 flex justify-center lg:justify-end mt-2 lg:mt-0">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to Top"
            className={`group inline-flex items-center gap-3 rounded-full border px-3 py-3 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
              location?.pathname === "/resources" ||
              location?.pathname.startsWith("/properties/") ||
              location?.pathname.startsWith("/details/")
                ? "bg-white/80 border-gray-200 text-gray-900 hover:bg-white"
                : "bg-black/40 border-white/15 text-white hover:bg-black/60"
            }`}
          >
            <span className="hidden md:block text-sm font-medium tracking-wide">
              Back to Top
            </span>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A61E22] text-white transition-transform duration-300 group-hover:-translate-y-0.5">
              <ArrowUp size={18} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        <hr
          className={`w-full mt-6 ${
            location?.pathname === "/resources" ||
            location?.pathname.startsWith("/properties/") ||
            location?.pathname.startsWith("/details/")
              ? "border-gray-200"
              : "border-white/15"
          }`}
        />
      </div>

      {/* Bottom */}

      <div className="container mx-auto px-5 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between py-5">

          <div className="mb-4 lg:mb-0">
            <p
              className={`text-sm lg:text-base ${
                location?.pathname === "/resources" ||
                location?.pathname.startsWith("/properties/") ||
                location?.pathname.startsWith("/details/")
                  ? "text-gray-600"
                  : "text-white"
              }`}
            >
              © 2024 - The Romanelli Group
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-2 text-xs lg:text-sm ${
              location?.pathname === "/resources" ||
              location?.pathname.startsWith("/properties/") ||
              location?.pathname.startsWith("/details/")
                ? "text-gray-600"
                : "text-white"
            }`}
          >
            <a href="/cookie-policy" target="_blank" className="hover:text-[#A61E22] transition-colors">Cookie Policy</a>
            <span>|</span>

            <a href="/terms-of-use" target="_blank" className="hover:text-[#A61E22] transition-colors">Terms of Use</a>
            <span>|</span>

            <a href="/privacy-policy" target="_blank" className="hover:text-[#A61E22] transition-colors">Privacy Policy</a>
            <span>|</span>

            <a href="/dmca-notice" target="_blank" className="hover:text-[#A61E22] transition-colors">DMCA</a>
            <span>|</span>

            <a href="/fair-housing" target="_blank" className="hover:text-[#A61E22] transition-colors">Fair Housing</a>
            <span>|</span>

            <a href="/accessibility-policy" target="_blank" className="hover:text-[#A61E22] transition-colors">Accessibility</a>
          </div>

        </div>
      </div>
    </header>
  </>
);
}

export default Footer