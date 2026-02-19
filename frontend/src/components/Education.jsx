import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Kalinga Institute of Industrial Technology',
      location: 'Bhubaneswar',
      year: '2021 - 2025',
      cgpa: '7.5/10',
      achievement: 'AIR 537 in KIITEE 2021 - Merit-based Scholarship',
    },
    {
      degree: 'CBSE Class XII',
      institution: 'Delhi Public School North Kolkata',
      location: 'Kolkata',
      year: '2021',
      cgpa: '83.0%',
    },
    {
      degree: 'CBSE Class X',
      institution: 'Delhi Public School North Kolkata',
      location: 'Kolkata',
      year: '2019',
      cgpa: '82.0%',
    },
  ];

  const achievements = [
    {
      title: 'KIITEE 2021 Merit Scholarship',
      description: 'Secured All India Rank 537 and received merit-based scholarship',
      icon: Award,
    },
    {
      title: 'HackerRank Certifications',
      description: 'Earned Basic and Intermediate Problem Solving certificates',
      icon: Award,
    },
    {
      title: 'Full Stack Development',
      description: 'Completed comprehensive Full Stack Web Development course from Udemy',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            Education
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-4">
            Academic
            <br />
            <span className="text-[#38FF62]">Background</span>
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden hover:border-[#38FF62] transition-all duration-300"
              >
                <div className="flex">
                  {/* Left Accent Bar */}
                  <div className="w-2 bg-[#38FF62]"></div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="font-mono text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <h4 className="text-lg text-[#38FF62] mb-2">{edu.institution}</h4>
                        <p className="text-[#a0a0a0] text-sm">{edu.location}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-[#a0a0a0] text-sm mb-2">
                            <Calendar size={16} />
                            <span>{edu.year}</span>
                          </div>
                          <div className="font-mono text-2xl font-bold text-[#38FF62]">{edu.cgpa}</div>
                        </div>
                      </div>
                    </div>
                    {edu.achievement && (
                      <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                        <div className="flex items-start gap-2 text-[#38FF62]">
                          <Award size={18} className="mt-1 flex-shrink-0" />
                          <span className="text-sm">{edu.achievement}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Scholastic Achievements */}
        <div>
          <h3 className="font-mono text-2xl font-bold text-white mb-8">Scholastic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#2a2a2a] p-6 hover:border-[#38FF62] transition-all duration-300">
                <div className="bg-[#38FF62] w-12 h-12 flex items-center justify-center mb-4">
                  <achievement.icon className="text-black" size={24} />
                </div>
                <h4 className="font-mono text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-[#a0a0a0] text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;