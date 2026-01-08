import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Page1 from "./page1";
import { logoUrl } from "../assets/allImg";

const navLinksLeft = [
    { title: "Home", href: "/" },
    { title: "Buy", href: "/buy" },
    { title: "Sell", href: "/sell" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const navLinksRight = [
    { title: "Properties", href: "/properties" },
    { title: "Resources", href: "/resources" },
  ];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  

  const location = useLocation();
useEffect(() => {
  const links = [...navLinksLeft, ...navLinksRight];
  const active = links.find((link) => link.href === location.pathname);
  if (active) {
    setActiveLink(active.title);
  }
}, [location.pathname]);



  
  return (
    <>
      {/* Navbar Animation */}
      <motion.nav
  initial={{ opacity: 0, y: -70 }} // Start higher for a more noticeable effect
  animate={{ opacity: 1, y: 0 }} // Smooth slide-down
  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }} // Smooth and natural
  className="bg-backgroundColor font-inter border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md"
>

        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 md:px-6">
          {/* Left Nav Links */}
          <ul className="hidden md:flex space-x-6">
            {navLinksLeft.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className={`text-white hover:text-gray-300 ${activeLink === link.title ? "underline underline-offset-4":""}`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <Link to="/" className="flex">
            <img src={logoUrl} className="h-12 lg:h-14 ml-4 md:ml-0" alt="Company Logo" />
          </Link>

          {/* Right Nav Links + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinksRight.map((link, index) => (
              <Link key={index} to={link.href} className={`text-white hover:text-gray-300 ${activeLink === link.title ? "underline underline-offset-4"  :''}`}>
                {link.title}
              </Link>
            ))}
            <Link to='/contact-us'>
            <button className="text-black bg-white hover:bg-gray-300 font-medium  text-sm px-4 py-2 rounded-md">
              Talk to our Team!
            </button>
            </Link>
          </div>

          {/* Mobile CTA + Hamburger Menu */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Talk to our Team! - Left of Hamburger */}
            <Link to='/contact-us'>
            <button className="text-black bg-white hover:bg-gray-300 font-medium rounded-md text-sm px-4 py-2">
              Talk to our Team!
            </button>
            </Link>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-gray-700"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }} // Start hidden & above
              animate={{ opacity: 1, y: 0 }} // Slide down smoothly
              exit={{ opacity: 0, y: -30 }} // Slide up on exit
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
              className="md:hidden bg-backgroundColor absolute w-full left-0 top-16 shadow-lg"
            >
              <ul className="font-medium p-4 space-y-4">
                {[...navLinksLeft, ...navLinksRight].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-white hover:text-blue-300  ${activeLink === link.title ? "underline underline-offset-4"  :''}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <div className="pt-16">
  {!location.pathname.startsWith("/pdf-viewer") && !location.pathname.startsWith("/terms-of-use") && !location.pathname.startsWith("/properties/") && !location.pathname.startsWith("/details/properties") && 
  !location.pathname.startsWith("/resources/blogs/") && !location.pathname.startsWith("/cookie-policy") && !location.pathname.startsWith("/privacy-policy") && 
  !location.pathname.startsWith("/dmca-notice") && !location.pathname.startsWith("/fair-housing") && !location.pathname.startsWith("/accessibility-policy") && (
    <Page1 page={activeLink} />
  )}
</div>
    </>
  );
};

export default Navbar;
