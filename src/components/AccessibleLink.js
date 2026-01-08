import React from 'react';
import { Link } from 'react-router-dom';

const AccessibleLink = ({ 
  to, 
  href, 
  children, 
  className = '', 
  ariaLabel,
  onClick,
  external = false,
  ...props 
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick(e);
    }
  };

  // External link
  if (external || href) {
    return (
      <a
        href={href || '#'}
        className={className}
        aria-label={ariaLabel || children}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link
        to={to}
        className={className}
        aria-label={ariaLabel || children}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Button-like link
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel || children}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      {...props}
    >
      {children}
    </button>
  );
};

export default AccessibleLink;