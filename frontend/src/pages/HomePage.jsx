import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;