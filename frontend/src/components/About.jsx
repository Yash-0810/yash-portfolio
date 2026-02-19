import React from 'react';
import { User, Target, Award } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-[#38FF62] transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-[#1a1a1a] p-2 border-2 border-white w-full max-w-[400px]">
                <img
                  src="https://drive.google.com/thumbnail?id=1SJ70B9AcC8NtBhRaBwX2nAOhl3KDyl5i&sz=w1000"
                  alt="Yash Tripathi"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?name=Yash+Tripathi&size=400&background=38FF62&color=0a0a0a&bold=true&font-size=0.4';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div>
            <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-6">
              Building Digital
              <br />
              <span className="text-[#38FF62]">Solutions</span>
            </h2>

            <div className="space-y-4 text-[#a0a0a0] text-base md:text-lg leading-relaxed mb-8">
              <p>
                I'm a B.Tech student at KIIT Bhubaneswar with a passion for creating innovative digital solutions.
                My journey in technology spans full-stack web development, artificial intelligence, and data-driven
                marketing strategies.
              </p>
              <p>
                With hands-on experience in building scalable web applications using React.js and Express.js, I've
                also delved deep into AI, developing a Brain Tumor Detection system with 98% accuracy using
                Convolutional Neural Networks.
              </p>
              <p>
                As an ABM Marketing Intern at HighRadius, I combined my technical skills with marketing analytics
                to optimize campaign performance and drive lead conversion through data-driven strategies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6 text-center hover:border-[#38FF62] transition-colors">
                <User className="text-[#38FF62] mx-auto mb-2" size={32} />
                <div className="font-mono text-2xl font-bold text-white mb-1">7.5</div>
                <div className="text-xs text-[#a0a0a0] uppercase">CGPA</div>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6 text-center hover:border-[#38FF62] transition-colors">
                <Target className="text-[#38FF62] mx-auto mb-2" size={32} />
                <div className="font-mono text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-xs text-[#a0a0a0] uppercase">Projects</div>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6 text-center hover:border-[#38FF62] transition-colors">
                <Award className="text-[#38FF62] mx-auto mb-2" size={32} />
                <div className="font-mono text-2xl font-bold text-white mb-1">537</div>
                <div className="text-xs text-[#a0a0a0] uppercase">AIR Rank</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;