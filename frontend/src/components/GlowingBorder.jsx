import React from 'react';

const GlowingBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#38FF62] via-[#2AE052] to-[#38FF62] rounded-sm opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-xy"></div>
      
      {/* Content */}
      <div className="relative bg-[#1a1a1a] border border-[#2a2a2a]">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;