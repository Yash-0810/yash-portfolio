import React from 'react';
import About from '../components/About';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const AboutPage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }} className="pt-20">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;