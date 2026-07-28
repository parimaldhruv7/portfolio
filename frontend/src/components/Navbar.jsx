import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/mock';
import Logo from './Logo';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled ? 'bg-navy/85 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]' : 'bg-navy/85 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-full flex items-center justify-between font-mono">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="inline-block hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300"
          aria-label="home"
        >
          <Logo size={44} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ol className="flex items-center gap-1 m-0 p-0 list-none counter-reset-item">
            {navLinks.map((link, i) => (
              <li key={link.name} className="text-xs">
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-3 py-2 text-slate-lightest hover:text-green transition-colors duration-200"
                >
                  <span className="text-green mr-1">0{i + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-xs rounded border border-green text-green hover:bg-green/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-green p-2 z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-navy-light shadow-2xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ol className="flex flex-col items-center gap-6 m-0 p-0 list-none font-mono">
          {navLinks.map((link, i) => (
            <li key={link.name} className="text-lg">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-lightest hover:text-green transition-colors duration-200"
              >
                <span className="text-green mr-1 text-sm">0{i + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
        </ol>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="px-6 py-3 text-sm rounded border border-green text-green hover:bg-green/10 transition-all duration-300 font-mono"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
