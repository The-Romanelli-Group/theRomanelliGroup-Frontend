import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!showScrollTop) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center ${location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "bg-black text-white hover:bg-gray-500" : "bg-gray-100 text-gray-900 hover:bg-gray-200"} border-0 py-1 px-3 focus:outline-none rounded text-base shadow-lg`}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9997 24V8M15.9997 8L9.33301 14.6667M15.9997 8L22.6663 14.6667" stroke={`${location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "white" : "black"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;