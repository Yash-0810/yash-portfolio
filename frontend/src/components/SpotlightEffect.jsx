import React, { useEffect, useRef } from 'react';

const SpotlightEffect = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(56, 255, 98, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default SpotlightEffect;