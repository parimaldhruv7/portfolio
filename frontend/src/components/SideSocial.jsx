import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/mock';

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

const SideSocial = () => {
  return (
    <div className="hidden lg:flex fixed left-8 xl:left-10 bottom-0 z-20 flex-col items-center">
      <ul className="flex flex-col items-center gap-5 m-0 p-0 list-none">
        {socialLinks.map(({ name, url, icon }) => {
          const Icon = iconMap[icon];
          return (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-slate hover:text-green hover:-translate-y-1 inline-block transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="w-px h-24 bg-slate mt-6" />
    </div>
  );
};

export default SideSocial;
