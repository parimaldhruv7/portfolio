import React from 'react';
import { skills, personalInfo } from '../data/mock';
import Logo from './Logo';
import useScrollReveal from '../hooks/useScrollReveal';

const featuredSkills = skills
  .filter((s) => s.level === 'Expert')
  .map((s) => s.name)
  .slice(0, 10);

const About = () => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-24 xl:px-32 max-w-4xl mx-auto">
      <h2 className="numbered-heading" data-number="1">
        About Me
      </h2>

      <div
        ref={ref}
        className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} grid grid-cols-1 md:grid-cols-5 gap-10`}
      >
        <div className="md:col-span-3 space-y-4 text-slate leading-relaxed">
          <p>
            Hello! I'm <span className="text-slate-lightest font-medium">{personalInfo.name}</span>, a{' '}
            {personalInfo.title.toLowerCase()} based in {personalInfo.location} who enjoys turning
            complex problems into scalable, real-time products. I specialize in {' '}
            <span className="text-slate-lightest">React.js</span> and{' '}
            <span className="text-slate-lightest">Node.js</span>, and I'm most at home building
            systems that move data instantly — think WebSockets, GraphQL, and live dashboards.
          </p>
          <p>
            Over the years I've shipped production platforms across fintech, telecom, and AI —
            from a real-time trading app with millisecond updates, to admin dashboards monitoring
            50K+ users, to AI-assisted learning platforms and IoT safety systems. I care about
            performance, secure architecture, and interfaces that feel effortless to use.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 p-0 list-none font-mono text-sm">
            {featuredSkills.map((skill) => (
              <li key={skill} className="relative pl-5 text-slate">
                <span className="absolute left-0 text-green">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 flex items-start justify-center md:justify-end">
          <div className="relative w-full max-w-[260px] group">
            <div className="absolute inset-0 border-2 border-green rounded translate-x-3.5 translate-y-3.5 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative bg-green/10 border border-green/30 rounded aspect-square flex flex-col items-center justify-center text-center p-6">
              <Logo size={96} />
              <span className="mt-4 text-xs font-mono text-slate">
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
