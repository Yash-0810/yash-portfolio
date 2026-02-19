import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  const experience = {
    company: 'HighRadius Private Limited',
    position: 'ABM Marketing Intern',
    duration: 'July 2024 - December 2024',
    location: 'Remote',
    responsibilities: [
      'Collaborated on Account-Based Marketing strategies to target high-value accounts and optimize campaign performance',
      'Conducted data analysis to identify key accounts and assess engagement metrics',
      'Designed and executed personalized marketing initiatives to drive lead conversion',
      'Utilized prospecting tools such as LinkedIn Sales Navigator, ZoomInfo, and LeadIQ to identify and segment target accounts',
      'Contributed to building a high-quality lead pipeline through strategic account targeting',
    ],
  };

  return (
    <section id="experience" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            Work Experience
          </span>
        </div>

        <div className="max-w-4xl">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-12">
            Professional
            <br />
            <span className="text-[#38FF62]">Journey</span>
          </h2>

          {/* Experience Card */}
          <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8 hover:border-[#38FF62] transition-all duration-300">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="bg-[#38FF62] p-4 mt-1">
                <Briefcase className="text-black" size={32} />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-mono text-2xl font-bold text-white mb-2">{experience.position}</h3>
                  <h4 className="text-xl text-[#38FF62] mb-3">{experience.company}</h4>
                  <div className="flex flex-wrap gap-4 text-[#a0a0a0] text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h5 className="font-mono text-sm uppercase tracking-wider text-white mb-4">Key Responsibilities</h5>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#a0a0a0]">
                        <span className="text-[#38FF62] mt-1 flex-shrink-0">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;