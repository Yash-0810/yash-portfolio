import React from 'react';
import Education from '../components/Education';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const EducationPage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }} className="pt-20">
        <Education />
      </div>
    </div>
  );
};

export default EducationPage;