import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{personalInfo.name}</h3>
            <p className="text-white/60 leading-relaxed">
              Full Stack Developer specializing in building scalable fintech, telecom, and AI platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/60 hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/60 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              </li>
              <li className="text-white/60">{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} {personalInfo.name}. Built with{' '}
            <Heart size={14} className="inline text-red-400" /> using React & Tailwind CSS
          </p>
          
          {/* Social Links - placeholder for future */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
