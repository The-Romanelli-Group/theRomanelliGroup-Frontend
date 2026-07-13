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
  actionLink: "tel:+17408163112", // ← real phone number with country code
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
<section className="bg-white py-16 md:py-20 overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    {/* Header */}

    <div className="max-w-3xl mx-auto text-center">

      <p className="uppercase tracking-[0.35em] text-[#A61E22] text-sm font-semibold">
        GET IN TOUCH
      </p>

      <h2 className="mt-3 text-[30px] md:text-6xl leading-tight font-bold text-gray-900">
        Let's Stay{" "}
        <span className="font-playfair italic font-normal text-[#A61E22]">
          Connected
        </span>
      </h2>

      <p className="mt-4 text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">
        Whether you're buying, selling or simply have questions,
        our team is here to help every step of the way.
      </p>

    </div>

    {/* Cards */}

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

      {contactDetails.map((detail, index) => (

        <div
          key={index}
          className="
            group
            h-full
            rounded-[28px]
            bg-white
            border
            border-gray-200
            shadow-xl
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >

          {/* Icon */}

          <div
            className="
              w-16
              h-16
              rounded-full
              bg-[#A61E22]
              flex
              items-center
              justify-center
              shadow-lg
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >

            <img
              src={detail.icon}
              alt={detail.title}
              className="w-7 h-7 object-contain"
            />

          </div>

          {/* Title */}

          <h3 className="mt-8 text-2xl font-bold text-gray-900">

            {detail.title}

          </h3>

          {/* Description */}

          <p className="mt-4 text-gray-600 leading-7 min-h-[90px]">

            {detail.description}

          </p>

          {/* Footer */}

          <div className="mt-auto pt-6 border-t border-gray-100">

            {detail.actionLink ? (

              <a
                href={detail.actionLink}
                target={detail.target || "_self"}
                rel={detail.target === "_blank" ? "noopener noreferrer" : undefined}
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-[#A61E22]
                  transition-all
                  duration-300
                  group-hover:gap-3
                "
              >

                {detail.action}

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </a>

            ) : Array.isArray(detail.action) ? (

              <div className="flex gap-4">

                {detail.action}

              </div>

            ) : (

              <p className="text-sm font-medium text-gray-900">

                {detail.action}

              </p>

            )}

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
);
};

export default Connected;
