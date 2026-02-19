import React from 'react';
import { Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Yash-0810', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/yash-tripathi-0b044b215/', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/yash.h.h', label: 'Instagram' },
    { icon: Mail, url: 'mailto:yashtripahti2020w@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-mono text-xl font-bold text-white mb-2">
              YT<span className="text-[#38FF62]">.</span>
            </h3>
            <p className="text-[#a0a0a0] text-sm">
              © {currentYear} Yash Tripathi. All rights reserved.
            </p>
            <p className="text-[#6a6a6a] text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart size={12} className="text-[#38FF62] fill-[#38FF62]" /> and code
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] border border-[#2a2a2a] p-3 hover:bg-[#38FF62] hover:border-[#38FF62] transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon
                  className="text-[#a0a0a0] group-hover:text-black transition-colors"
                  size={20}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="mt-8 pt-8 border-t border-[#2a2a2a] text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm text-[#a0a0a0] hover:text-[#38FF62] transition-colors uppercase tracking-wider"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;