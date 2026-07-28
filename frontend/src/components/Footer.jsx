import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

const Footer = () => {
  return (
    <footer className="py-10 px-6 text-center">
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.map(({ name, url, icon }) => {
          const Icon = iconMap[icon];
          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-slate hover:text-green transition-colors duration-300"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
      <p className="font-mono text-xs text-slate">
        Designed &amp; Built by {personalInfo.name}
      </p>
      <p className="font-mono text-xs text-slate/70 mt-1">
        © {new Date().getFullYear()} · React &amp; Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
