import React from 'react';
import { personalInfo } from '../data/mock';

const SideEmail = () => {
  return (
    <div className="hidden lg:flex fixed right-8 xl:right-10 bottom-0 z-20 flex-col items-center">
      <a
        href={`mailto:${personalInfo.email}`}
        className="text-slate hover:text-green hover:-translate-y-1 font-mono text-xs tracking-widest transition-all duration-300"
        style={{ writingMode: 'vertical-rl' }}
      >
        {personalInfo.email}
      </a>
      <div className="w-px h-24 bg-slate mt-6" />
    </div>
  );
};

export default SideEmail;
