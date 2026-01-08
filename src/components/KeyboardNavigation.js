import { useEffect } from 'react';

const KeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip navigation
      if (e.key === 'Tab' && e.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink && document.activeElement === skipLink) {
          e.preventDefault();
          const mainContent = document.querySelector('#main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      }
      
      // Escape key to close modals/overlays
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"]:not([hidden])');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="close"], .close-button');
          if (closeButton) {
            closeButton.click();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a 
      href="#main-content" 
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
      style={{ position: 'absolute', left: '-9999px' }}
      onFocus={(e) => { e.target.style.left = '0'; }}
      onBlur={(e) => { e.target.style.left = '-9999px'; }}
    >
      Skip to main content
    </a>
  );
};

export default KeyboardNavigation;