import React from 'react';
import Skills from '../components/Skills';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const SkillsPage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }} className="pt-20">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;