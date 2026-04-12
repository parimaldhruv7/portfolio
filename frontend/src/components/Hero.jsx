import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-5xl w-full">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-cyan-400 text-lg font-medium mb-4">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {['React', 'Node.js', 'Next.js', 'MongoDB', 'TypeScript', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-400" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 rounded-lg backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 text-white font-semibold hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;