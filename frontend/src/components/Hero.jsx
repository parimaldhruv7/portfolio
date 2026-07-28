import React from 'react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-24 xl:px-32 max-w-4xl"
    >
      <p className="font-mono text-green text-base sm:text-lg mb-5 animate-fade-in-up">
        Hi, my name is
      </p>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-lightest mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {personalInfo.name}.
      </h1>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {personalInfo.title}.
      </h2>
      <p className="text-slate text-lg max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {personalInfo.tagline}. I specialize in React.js &amp; Node.js, with deep
        experience in WebSockets, GraphQL, and real-time systems — currently based in{' '}
        {personalInfo.location}.
      </p>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <button
          onClick={() => scrollToSection('#projects')}
          className="inline-block px-8 py-4 rounded border border-green text-green font-mono text-sm hover:bg-green/10 transition-all duration-300"
        >
          Check out my work!
        </button>
      </div>
    </section>
  );
};

export default Hero;
