import React from 'react';
import { Github, Linkedin, Mail, Phone, Instagram, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fadeIn">
            <span className="inline-block font-mono text-[#38FF62] text-sm md:text-base uppercase tracking-widest border border-[#38FF62] px-4 py-2">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="font-mono font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fadeInUp">
            YASH TRIPATHI
          </h1>

          {/* Title */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#a0a0a0] mb-4">
              Full Stack Developer & AI Enthusiast
            </h2>
            <div className="h-[2px] w-32 bg-[#38FF62] mx-auto"></div>
          </div>

          {/* Description */}
          <p
            className="text-[#a0a0a0] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            B.Tech student passionate about building innovative solutions with modern web technologies and AI.
            Experienced in full-stack development, machine learning, and ABM marketing strategies.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/Yash-0810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] hover:text-[#38FF62] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-tripathi-0b044b215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] hover:text-[#38FF62] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:yashtripahti2020w@gmail.com"
              className="text-[#a0a0a0] hover:text-[#38FF62] transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+918093294061"
              className="text-[#a0a0a0] hover:text-[#38FF62] transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.instagram.com/yash.h.h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] hover:text-[#38FF62] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* CTA Buttons with Glowing Effect */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38FF62] via-[#2AE052] to-[#38FF62] opacity-75 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-gradient-xy"></div>
              <Link to="/contact">
                <Button
                  className="relative bg-[#38FF62] hover:bg-[#2AE052] text-black font-mono uppercase tracking-wider px-8 py-6 text-sm font-semibold border-0 min-w-[200px]"
                  style={{ borderRadius: '0' }}
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
            <Link to="/about">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-mono uppercase tracking-wider px-8 py-6 text-sm font-semibold min-w-[200px]"
                style={{ borderRadius: '0' }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="/about">
          <ArrowDown className="text-[#38FF62]" size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
