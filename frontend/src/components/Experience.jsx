import React, { useState } from 'react';
import { experience } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = experience[activeTab];
  const [ref, isRevealed] = useScrollReveal();

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveTab((i) => (i + 1) % experience.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveTab((i) => (i - 1 + experience.length) % experience.length);
    }
  };

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-24 xl:px-32 max-w-4xl mx-auto">
      <h2 className="numbered-heading" data-number="2">
        Where I've Worked
      </h2>

      <div ref={ref} className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} flex flex-col sm:flex-row`}>
        <div
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
          className="flex sm:flex-col overflow-x-auto sm:overflow-visible border-b sm:border-b-0 sm:border-l-2 border-navy-lightest sm:min-w-[180px] mb-2 sm:mb-0"
        >
          {experience.map((job, i) => (
            <button
              key={job.company}
              role="tab"
              id={`tab-${i}`}
              aria-selected={activeTab === i}
              aria-controls={`panel-${i}`}
              tabIndex={activeTab === i ? 0 : -1}
              onClick={() => setActiveTab(i)}
              className={`shrink-0 sm:shrink text-left whitespace-nowrap px-4 py-3 font-mono text-xs border-b-2 sm:border-b-0 sm:border-l-2 -mb-px sm:mb-0 sm:-ml-0.5 transition-colors duration-200 ${
                activeTab === i
                  ? 'text-green border-green bg-navy-light/60'
                  : 'text-slate border-navy-lightest hover:bg-navy-light/40 hover:text-slate-lightest'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="sm:pl-8 pt-6 sm:pt-0 flex-1">
          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
          >
            <h3 className="text-xl font-semibold text-slate-lightest mb-1">
              {active.role} <span className="text-green">@ {active.company}</span>
            </h3>
            <p className="font-mono text-xs text-slate-light mb-6">{active.range}</p>
            <ul className="space-y-3 m-0 p-0 list-none">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="relative pl-6 text-slate leading-relaxed">
                  <span className="absolute left-0 text-green">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
