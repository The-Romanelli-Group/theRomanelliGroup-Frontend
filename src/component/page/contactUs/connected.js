import React from 'react';
import kw from "../../../assets/kw.png";
import instagram from "../../../assets/Instagram.png";
import youtube from "../../../assets/YouTube.png";
import facebook from "../../../assets/Facebook.png";
import { connect_url1, connect_url2, connect_url3, connect_url4 } from '../../../assets/allImg';

const Connected = () => {
  const socialLinks = [
    { src: youtube, href: "https://www.youtube.com/channel/UC6JTBB3S5QoOpknrvT16s7Q", alt: "YouTube" },
    { src: instagram, href: "https://www.instagram.com/theromanelligroup_realtors/?hl=en", alt: "Instagram" },
    { src: facebook, href: "https://www.facebook.com/romanellihomes", alt: "Facebook" },
  ];

  const contactDetails = [
    {
      icon: connect_url1,
      title: "Visit Our Office",
      description: "Find us right in the heart of Central Ohio.",
      action: "View on Google Maps",
      actionLink: "https://share.google/13Gj3qs24RJ3dtIub", // Add the actual link here
      target:"_Blank"
    },
    {
      icon: connect_url2,
      title: "We’re Just a Call Away",
      description: "Reach out for any questions—big or small!",
      action: "Call Us Now",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: connect_url3,
      title: "You Can Reach Us",
      description: "Monday - Friday: 9:00 AM - 5:00 PM | Saturday: 10:00 AM - 2:00 PM",
      action: "Closed on Sundays, but feel free to drop an email!",
    },
    {
      icon: connect_url4,
      title: "Find Us on Social Media",
      description: "Stay updated with our latest listings and tips.",
      action: socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img
            className="w-8 h-auto hover:opacity-75 transition-opacity"
            src={link.src}
            alt={link.alt}
          />
        </a>
      )),
    },
  ];

  return (
    <div>
      <section className="text-gray-600 px-5 lg:px-24 body-font overflow-hidden bg-backgroundColor">
        <div className="flex flex-col text-center w-full mt-10 mb-10 text-white">
          <h1 className="sm:text-4xl text-2xl font-bold title-font">
            Let’s Stay <span className="italic font-playfair ">Connected</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl mt-5">
            Whether you’re ready to buy, sell, or simply have questions, we’re here to help every step of the way.
          </p>
        </div>
<div className="container px-4 sm:px-6 lg:px-8 mx-auto py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
    {contactDetails.map((detail, index) => (
      <div key={index} className="w-full">
        <div className="min-h-[250px] sm:min-h-[280px] lg:min-h-[300px] xl:min-h-[300px] w-full p-5 sm:p-6 text-left border-2 bg-white flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:border-red-800/20">
          
          {/* Icon */}
          <div className="bg-red-800 text-white p-3 absolute left-4 top-4 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src={detail.icon} 
              alt={detail.title}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </div>
          
          {/* Title */}
          <h3 className="mt-16 text-lg sm:text-xl font-bold text-gray-900  transition-colors duration-300">
            {detail.title}
          </h3>
          
          {/* Description */}
          <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
            {detail.description}
          </p>
          
          {/* Action / Social Links */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            {detail.actionLink ? (
              <a
                href={detail.actionLink}
                target={detail.target || '_self'}
                className="inline-flex items-center text-black underline font-semibold text-sm sm:text-base  transition-colors duration-200"
                rel={detail.target === '_blank' ? 'noopener noreferrer' : undefined}
              >
                {detail.action}
                {detail.target === '_blank' && (
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ) : detail.socialLinks ? (
              // Social links section
              <div className="flex items-center space-x-4">
                {detail.socialLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-200"
                  >
                    <img
                      className="w-7 h-7 sm:w-8 sm:h-8"
                      src={link.src}
                      alt={link.alt}
                    />
                  </a>
                ))}
              </div>
            ) : (
              // Regular text action (no link)
              <span className="text-sm flex gap-2 text-gray-900">
                {detail.action}
              </span>
            )}
          </div>
          
        </div>
      </div>
    ))}
  </div>
</div>
      </section>
    </div>
  );
};

export default Connected;