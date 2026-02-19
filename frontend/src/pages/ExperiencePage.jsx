import React from 'react';
import Experience from '../components/Experience';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }} className="pt-20">
        <Experience />
      </div>
    </div>
  );
};

export default ExperiencePage;