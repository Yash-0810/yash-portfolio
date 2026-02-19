import React from 'react';
import { Download, FileCode, Sparkles, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import AnimatedBackground from '../components/AnimatedBackground';
import SpotlightEffect from '../components/SpotlightEffect';

const DownloadPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/yash-portfolio-complete.zip';
    link.download = 'yash-portfolio-complete.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    { icon: FileCode, text: 'Complete React source code' },
    { icon: Sparkles, text: 'Animated background with particles' },
    { icon: Package, text: 'All 8 pages fully functional' },
    { icon: FileCode, text: '50+ Shadcn UI components' },
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SpotlightEffect />
      <div style={{ position: 'relative', zIndex: 2 }} className="pt-20">
        <section className="section bg-[#0a0a0a] relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Section Label */}
              <div className="mb-12">
                <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
                  Download
                </span>
              </div>

              <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6">
                Download
                <br />
                <span className="text-[#38FF62]">Portfolio</span>
              </h1>

              <p className="text-[#a0a0a0] text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Get the complete source code of this stunning portfolio website with all the amazing animations and effects!
              </p>

              {/* Download Button */}
              <div className="mb-16">
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#38FF62] via-[#2AE052] to-[#38FF62] opacity-75 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-gradient-xy"></div>
                  <Button
                    onClick={handleDownload}
                    className="relative bg-[#38FF62] hover:bg-[#2AE052] text-black font-mono uppercase tracking-wider px-12 py-8 text-lg font-semibold border-0"
                    style={{ borderRadius: '0' }}
                  >
                    <Download size={24} className="mr-3" />
                    Download Now
                  </Button>
                </div>
                <p className="text-[#6a6a6a] text-sm mt-4 font-mono">
                  Package Size: ~77KB
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8 text-left hover:border-[#38FF62] transition-all">
                  <h3 className="font-mono text-xl font-bold text-[#38FF62] mb-6">
                    ✨ What's Included
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#a0a0a0]">
                        <feature.icon className="text-[#38FF62] mt-1 flex-shrink-0" size={20} />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-[#a0a0a0]">
                      <Sparkles className="text-[#38FF62] mt-1 flex-shrink-0" size={20} />
                      <span>Spotlight & glowing effects</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#a0a0a0]">
                      <Package className="text-[#38FF62] mt-1 flex-shrink-0" size={20} />
                      <span>README with setup instructions</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8 text-left hover:border-[#38FF62] transition-all">
                  <h3 className="font-mono text-xl font-bold text-[#38FF62] mb-6">
                    🚀 Quick Setup
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-[#0a0a0a] p-4 border border-[#2a2a2a]">
                      <p className="text-xs text-[#6a6a6a] mb-2 font-mono">STEP 1</p>
                      <code className="text-[#38FF62] font-mono text-sm">unzip yash-portfolio-complete.zip</code>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 border border-[#2a2a2a]">
                      <p className="text-xs text-[#6a6a6a] mb-2 font-mono">STEP 2</p>
                      <code className="text-[#38FF62] font-mono text-sm">cd frontend && yarn install</code>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 border border-[#2a2a2a]">
                      <p className="text-xs text-[#6a6a6a] mb-2 font-mono">STEP 3</p>
                      <code className="text-[#38FF62] font-mono text-sm">yarn start</code>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 border border-[#2a2a2a]">
                      <p className="text-xs text-[#6a6a6a] mb-2 font-mono">STEP 4</p>
                      <code className="text-[#38FF62] font-mono text-sm">Open http://localhost:3000</code>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Tech Stack */}
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8 text-left">
                <h3 className="font-mono text-xl font-bold text-white mb-6">
                  Tech Stack Included
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'React 19',
                    'React Router',
                    'Tailwind CSS',
                    'Shadcn UI',
                    'Lucide Icons',
                    'Canvas API',
                    'CSS Animations',
                    'Responsive Design',
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] text-[#a0a0a0] font-mono text-sm hover:border-[#38FF62] hover:text-[#38FF62] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DownloadPage;
