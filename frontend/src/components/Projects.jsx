import React from 'react';
import { Github, Layers } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import GlowingBorder from './GlowingBorder';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Finance Management System',
      category: 'Web Application',
      description:
        'A comprehensive finance tracker to manage income and expenses effortlessly. Track transactions with detailed descriptions, generate insightful reports (daily, weekly, monthly, annual), and export data to CSV. Supports multiple payment methods including cash, UPI, card, and bank transfers.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'CSV Export'],
      github: 'https://github.com/Yash-0810/ytb-saving',
      date: '2024',
      type: 'Personal Project',
      highlights: ['100% Secure', 'Instant Reports', 'Multi-Payment Support'],
    },
    {
      id: 2,
      title: 'Brain Tumor Detection Using CNN',
      category: 'AI/ML',
      description:
        'Developed an AI-powered system to classify MRI scans into tumor types using a Convolutional Neural Network. Achieved 98% accuracy in tumor detection and classification.',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Tkinter', 'NumPy', 'CNN'],
      mentor: 'Prof. Sujata Swain',
      date: 'April 2025',
      type: 'Major Project',
      highlights: ['98% Accuracy', 'MRI Classification', 'Deep Learning'],
    },
    {
      id: 3,
      title: 'Online Music Streaming Platform',
      category: 'Web Development',
      description:
        'Built a collaborative music listening platform with virtual rooms. Users can create rooms, share IDs, and join sessions. Admins control playback while participants engage through real-time comments.',
      technologies: ['React.js', 'Express.js', 'Socket.io', 'Redis', 'JioSaavan API'],
      mentor: 'Prof. Chittranjan Pradhan',
      date: 'April 2024',
      type: 'Minor Project',
      highlights: ['Real-time Sync', 'Virtual Rooms', 'Live Comments'],
    },
    {
      id: 4,
      title: 'Employee Management System',
      category: 'Software Development',
      description:
        'Designed and developed a comprehensive employee management system using Object-Oriented Programming principles. Features a GUI built with Tkinter and database integration.',
      technologies: ['Python', 'SQL', 'SQLite', 'Tkinter', 'OOP'],
      mentor: 'Prof. Moumita Das Parui',
      date: 'January 2021',
      type: 'Academic Project',
      highlights: ['CRUD Operations', 'Database Integration', 'GUI Interface'],
    },
  ];

  return (
    <section id="projects" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            Projects
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-4">
            Featured
            <br />
            <span className="text-[#38FF62]">Work</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">A collection of projects showcasing my skills in web development, AI, and software engineering.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlowingBorder
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-[#2a2a2a]">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-[#38FF62] p-3">
                    <Layers className="text-black" size={24} />
                  </div>
                  <Badge variant="outline" className="border-[#38FF62] text-[#38FF62] font-mono text-xs">
                    {project.type}
                  </Badge>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2 group-hover:text-[#38FF62] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a0a0a0] font-mono uppercase tracking-wider">{project.category}</p>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs font-mono text-[#38FF62] border border-[#38FF62] px-2 py-1">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-white mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#2a2a2a] text-[#a0a0a0] text-xs font-mono border-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <div className="mb-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-transparent border-2 border-[#38FF62] text-[#38FF62] hover:bg-[#38FF62] hover:text-black font-mono uppercase tracking-wider text-xs transition-all"
                        style={{ borderRadius: '0' }}
                      >
                        <Github size={16} className="mr-2" />
                        View on GitHub
                      </Button>
                    </a>
                  </div>
                )}

                {/* Footer */}
                <div className="pt-4 border-t border-[#2a2a2a] text-xs text-[#a0a0a0]">
                  {project.mentor && (
                    <p>
                      <span className="font-mono">Mentor:</span> {project.mentor}
                    </p>
                  )}
                  <p className="mt-1">
                    <span className="font-mono">Date:</span> {project.date}
                  </p>
                </div>
              </div>
            </GlowingBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
