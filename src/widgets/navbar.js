import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Page1 from "./page1";
import { logoUrl } from "../assets/allImg";
import LeadModal from "../component/page/LeadForm/LeadModal"; 

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
  const [showLeadModal, setShowLeadModal] = useState(false);
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
  initial={false}
className="fixed top-0 left-0 w-full z-[99999] bg-backgroundColor/90 backdrop-blur-lg border-b border-white/10 shadow-lg font-inter transition-all duration-300"
>
 
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 md:px-6">
          {/* Left Nav Links */}
          <ul className="hidden md:flex space-x-6">
           {navLinksLeft.map((link, index) => (
    <li key={index} className="relative">

        <Link
            to={link.href}
           className="relative text-white font-medium hover:text-white transition-colors duration-300"
        >
            {link.title}

            {activeLink === link.title && (
                <motion.div
                    layoutId="navbarUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                    }}
                />
            )}

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
    <div key={index} className="relative">

        <Link
            to={link.href}
           className="relative text-white font-medium hover:text-white transition-colors duration-300"
        >
            {link.title}

            {activeLink === link.title && (
                <motion.div
                    layoutId="navbarUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                    }}
                />
            )}

        </Link>

    </div>
))}
          <button
  onClick={() => setShowLeadModal(true)}
  className="
    h-11
    px-6
    bg-[#A61E22]
    hover:bg-[#8D181B]
    text-white
    rounded-xl
    shadow-lg
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-xl
    active:scale-[0.98]
    inline-flex
    items-center
    justify-center
    gap-2
    font-semibold
    text-sm
  "
>
  Talk to our Team!
</button>
          </div>

          {/* Mobile CTA + Hamburger Menu */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Talk to our Team! - Left of Hamburger */}
           <button
  onClick={() => {
    setShowLeadModal(true);
    setIsMenuOpen(false);
  }}
  className="
inline-flex
items-center
justify-center
h-10
px-5
rounded-xl
bg-[#A61E22]
hover:bg-[#8D181B]
text-white
text-sm
font-semibold
shadow-lg
transition-all
duration-300
hover:scale-[1.02]
active:scale-[0.98]
"
>
 Talk to our Team!
</button>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-gray-700"
              onClick={toggleMenu}
            >
              <motion.div
    animate={isMenuOpen ? "open" : "closed"}
    className="w-6 h-6 flex flex-col justify-center gap-1.5"
>

    <motion.span
        variants={{
            closed: {
                rotate: 0,
                y: 0,
            },
            open: {
                rotate: 45,
                y: 7,
            },
        }}
        className="block h-0.5 bg-white rounded-full"
    />

    <motion.span
        variants={{
            closed: {
                opacity: 1,
            },
            open: {
                opacity: 0,
            },
        }}
        className="block h-0.5 bg-white rounded-full"
    />

    <motion.span
        variants={{
            closed: {
                rotate: 0,
                y: 0,
            },
            open: {
                rotate: -45,
                y: -7,
            },
        }}
        className="block h-0.5 bg-white rounded-full"
    />

</motion.div>
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
<AnimatePresence>

    {isMenuOpen && (

        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-backgroundColor/95 backdrop-blur-xl rounded-b-3xl border-t border-white/10 shadow-2xl overflow-hidden"
        >

            <div className="px-6 py-6">

                {[...navLinksLeft, ...navLinksRight].map((link) => (

                    <Link
                        key={link.title}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-white/10 transition-all duration-300 ${
                            activeLink === link.title
                                ? "text-white font-semibold"
                                : "text-gray-300 hover:text-white"
                        }`}
                    >

                        <span className="text-lg">
                            {link.title}
                        </span>

                        {activeLink === link.title && (
                            <motion.div
                                layoutId="mobileActive"
                                className="w-2 h-2 rounded-full bg-red-600"
                            />
                        )}

                    </Link>

                ))}

                {/* Mobile CTA */}

                <button
                    onClick={() => {
                        setShowLeadModal(true);
                        setIsMenuOpen(false);
                    }}
                    className="
                        mt-8
                        w-full
                        h-12
                        rounded-xl
                        bg-[#A61E22]
                        hover:bg-[#8D181B]
                        text-white
                        font-semibold
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-[1.01]
                        active:scale-[0.98]
                        "
                >
                 Book Free Consultation
                </button>

            </div>

        </motion.div>

    )}

</AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <div className="pt-16">
  {!location.pathname.startsWith("/pdf-viewer") && 
  !location.pathname.startsWith("/terms-of-use") && 
  !location.pathname.startsWith("/properties/") && 
  !location.pathname.startsWith("/details/properties") && 
  !location.pathname.startsWith("/resources/blogs/") && 
  !location.pathname.startsWith("/cookie-policy") && 
  !location.pathname.startsWith("/privacy-policy") && 
  !location.pathname.startsWith("/dmca-notice") && 
  !location.pathname.startsWith("/fair-housing") && 
  !location.pathname.startsWith("/accessibility-policy") && 
  !location.pathname.startsWith("/resources") &&
  (
    <Page1 page={activeLink} />
  )}
</div>
<LeadModal
    open={showLeadModal}
    onClose={() => setShowLeadModal(false)}
/>
    </>
  );
};

export default Navbar;
