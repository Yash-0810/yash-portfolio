import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yashtripahti2020w@gmail.com',
      link: 'mailto:yashtripahti2020w@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 809 329 4061',
      link: 'tel:+918093294061',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhubaneswar, India',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Yash-0810',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yash-tripathi-0b044b215/',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/yash.h.h',
    },
  ];

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-[#38FF62] text-xs md:text-sm uppercase tracking-widest border border-[#38FF62] px-3 py-1 inline-block">
            Contact
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-white mb-4">
            Let's
            <br />
            <span className="text-[#38FF62]">Connect</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-[#1a1a1a] border-[#2a2a2a] p-6 hover:border-[#38FF62] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#38FF62] p-3">
                      <info.icon className="text-black" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-[#38FF62] transition-colors font-mono"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-mono">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6">
              <h3 className="font-mono text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2a2a2a] p-4 hover:bg-[#38FF62] transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-[#a0a0a0] group-hover:text-black transition-colors" size={24} />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-8">
            <h3 className="font-mono text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-[#a0a0a0] uppercase tracking-wider mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#38FF62] font-mono"
                  style={{ borderRadius: '0' }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-[#a0a0a0] uppercase tracking-wider mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#38FF62] font-mono"
                  style={{ borderRadius: '0' }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-[#a0a0a0] uppercase tracking-wider mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#38FF62] font-mono"
                  style={{ borderRadius: '0' }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-[#a0a0a0] uppercase tracking-wider mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#38FF62] font-mono resize-none"
                  style={{ borderRadius: '0' }}
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#38FF62] hover:bg-[#2AE052] text-black font-mono uppercase tracking-wider py-6 text-sm font-semibold border-0"
                style={{ borderRadius: '0' }}
              >
                <Send size={18} className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;