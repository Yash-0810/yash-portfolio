import React from 'react';
import { FileCheck, ExternalLink, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Internship Certificate',
      issuer: 'HighRadius Private Limited',
      description: 'ABM Marketing Intern - Successfully completed 6-month internship program',
      date: 'December 2024',
      link: 'https://drive.google.com/file/d/16sgOu5AKSkwik2ks_p19k3TbJiPlmtT_/view?usp=sharing',
      type: 'Internship',
    },
    {
      id: 2,
      title: 'Problem Solving Certificates',
      issuer: 'HackerRank',
      description: 'Basic and Intermediate Problem Solving - Data Structures and Algorithms',
      date: '2024',
      certificateIds: ['3407879B745F', '85AD31BFFF49'],
      link: 'https://drive.google.com/file/d/18t7TOWFFwZv0s6TcIi5TW5nNeI_d4CrI/view?usp=sharing',
      type: 'Certification',
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      description: 'Comprehensive course covering modern web development technologies',
      date: '2024',
      certificateId: 'UC-58297abc-0c02-498e-b59e-4d0b36f6729b',
      type: 'Course',
    },
    {
      id: 4,
      title: 'Degree Certificate',
      issuer: 'KIIT Bhubaneswar',
      description: 'Bachelor of Technology - Official degree documentation',
      date: '2025',
      link: 'https://drive.google.com/file/d/1gj9HhBOfTjN8n-OKZkJxD4OZ0H-aDxAI/view?usp=sharing',
      type: 'Degree',
    },
  ];

  return (
    <section id="certificates" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            Certificates
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-4">
            Certifications &<br />
            <span className="text-[#38FF62]">Credentials</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">
            Professional certifications and academic credentials validating technical expertise and continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <Card
              key={certificate.id}
              className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden hover:border-[#38FF62] transition-all duration-300 group"
            >
              {/* Header */}
              <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-[#38FF62] p-3">
                    {certificate.type === 'Degree' ? (
                      <Award className="text-black" size={28} />
                    ) : (
                      <FileCheck className="text-black" size={28} />
                    )}
                  </div>
                  <span className="font-mono text-xs text-[#a0a0a0] border border-[#2a2a2a] px-3 py-1">
                    {certificate.type}
                  </span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-2 group-hover:text-[#38FF62] transition-colors">
                  {certificate.title}
                </h3>
                <p className="text-[#38FF62] text-sm font-semibold">{certificate.issuer}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-[#a0a0a0] text-sm mb-4">{certificate.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#a0a0a0]">Issue Date:</span>
                    <span className="font-mono text-white">{certificate.date}</span>
                  </div>
                  {certificate.certificateId && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#a0a0a0]">Certificate ID:</span>
                      <span className="font-mono text-[#38FF62] text-xs">{certificate.certificateId}</span>
                    </div>
                  )}
                  {certificate.certificateIds && (
                    <div className="text-sm">
                      <span className="text-[#a0a0a0]">Certificate IDs:</span>
                      <div className="mt-1 space-y-1">
                        {certificate.certificateIds.map((id, idx) => (
                          <div key={idx} className="font-mono text-[#38FF62] text-xs">
                            {id}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {certificate.link && (
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-mono uppercase tracking-wider text-xs mt-4"
                      style={{ borderRadius: '0' }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Certificate
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;