import React from 'react';

const AccessibleButton = ({ 
  children, 
  onClick, 
  className = '', 
  ariaLabel,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      if (onClick) onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel || children}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;