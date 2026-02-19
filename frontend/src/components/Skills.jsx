import React from 'react';
import { Code, Database, Wrench, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: Wrench,
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Express.js', 'PyTorch', 'OpenCV', 'NumPy', 'Tkinter', 'Socket.io'],
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      skills: ['SQL', 'SQLite', 'Redis', 'MongoDB'],
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Analytics',
      skills: ['LinkedIn Sales Navigator', 'ZoomInfo', 'LeadIQ', 'ABM Strategies', 'Data Analysis'],
    },
  ];

  const additionalSkills = [
    'Data Structures & Algorithms',
    'Convolutional Neural Networks',
    'Machine Learning',
    'Deep Learning',
    'Image Processing',
    'REST APIs',
    'Real-time Communication',
    'Account-Based Marketing',
    'Lead Generation',
    'Campaign Optimization',
  ];

  return (
    <section id="skills" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            Skills
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-4">
            Technical
            <br />
            <span className="text-[#38FF62]">Expertise</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">
            A comprehensive toolkit spanning development, AI/ML, databases, and marketing technologies.
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border-[#2a2a2a] p-8 hover:border-[#38FF62] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#38FF62] p-3">
                  <category.icon className="text-black" size={28} />
                </div>
                <h3 className="font-mono text-xl font-bold text-white pt-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-[#2a2a2a] bg-[#0a0a0a] text-[#a0a0a0] hover:border-[#38FF62] hover:text-[#38FF62] transition-colors font-mono text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8">
          <h3 className="font-mono text-xl font-bold text-white mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="text-sm font-mono text-[#38FF62] border border-[#38FF62] px-4 py-2 hover:bg-[#38FF62] hover:text-black transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;