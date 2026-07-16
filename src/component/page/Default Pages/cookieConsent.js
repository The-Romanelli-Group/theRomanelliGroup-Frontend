import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_VERSION = "v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (consent !== CONSENT_VERSION) {
      setVisible(true);
    }
  }, []);

  const closeBanner = () => {
    localStorage.setItem("cookieConsent", CONSENT_VERSION);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-0 bottom-5 z-[9999] px-5 lg:px-8"
        >
          <div
            className="
              max-w-7xl
              mx-auto
              rounded-[28px]
              border
              border-gray-200
              bg-white/95
              backdrop-blur-xl
              shadow-xl
              p-7
            "
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              {/* Text */}

              <div className="text-[15px] md:text-lg leading-6 md:leading-7 text-gray-600">
                <p className="font-bold text-gray-900 mb-2">
                  We value your privacy.
                </p>

                This website uses cookies to improve your browsing experience.
                By continuing to use our website or clicking{" "}
                <strong>Accept All</strong>, you agree to our{" "}

                <Link
                  target="_blank"
                  to="/cookie-policy"
                  className="text-[#A61E22] hover:underline"
                >
                  Cookie Policy
                </Link>
                ,{" "}

                <Link
                  target="_blank"
                  to="/terms-of-use"
                  className="text-[#A61E22] hover:underline"
                >
                  Terms of Use
                </Link>
                ,{" "}

                <Link
                  target="_blank"
                  to="/privacy-policy"
                  className="text-[#A61E22] hover:underline"
                >
                  Privacy Policy
                </Link>
                ,{" "}

                <Link
                  target="_blank"
                  to="/dmca-notice"
                  className="text-[#A61E22] hover:underline"
                >
                  DMCA Notice
                </Link>
                ,{" "}

                <Link
                  target="_blank"
                  to="/fair-housing"
                  className="text-[#A61E22] hover:underline"
                >
                  Fair Housing Statement
                </Link>
                {" "}and{" "}

                <Link
                  target="_blank"
                  to="/accessibility-policy"
                  className="text-[#A61E22] hover:underline"
                >
                  Accessibility Policy
                </Link>
                .
              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={closeBanner}
                  className="
                    rounded-full
                    border
                    border-gray-300
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-gray-700
                    hover:bg-gray-100
                    transition-all
                    duration-300
                  "
                >
                  Only Necessary
                </button>

                <button
                  onClick={closeBanner}
                  className="
                    rounded-full
                    bg-[#A61E22]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;