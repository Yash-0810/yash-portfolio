import React from 'react';
import Certificates from '../components/Certificates';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const CertificatesPage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }} className="pt-20">
        <Certificates />
      </div>
    </div>
  );
};

export default CertificatesPage;