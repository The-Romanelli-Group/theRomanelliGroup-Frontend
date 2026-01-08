import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          This website uses cookies to enhance your browsing experience. By continuing to use our site or clicking "Accept," you agree to our{' '}
          <Link target='_blank' to="/cookie-policy" className="underline hover:text-gray-300">Cookie Policy</Link>,{' '}
          <Link target='_blank' to="/terms-of-use" className="underline hover:text-gray-300">Terms of Use</Link>,{' '}
          <Link target='_blank' to="/privacy-policy" className="underline hover:text-gray-300">Privacy Policy</Link>,{' '}
          <Link target='_blank' to="/dmca-notice" className="underline hover:text-gray-300">DMCA Notice</Link>,{' '}
          <Link target='_blank' to="/fair-housing" className="underline hover:text-gray-300">Fair Housing Statement</Link>, and{' '}
          <Link target='_blank' to="/accessibility-policy" className="underline hover:text-gray-300">Accessibility Policy</Link>.
        </div>
        <button
          onClick={handleAccept}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-sm font-medium whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;