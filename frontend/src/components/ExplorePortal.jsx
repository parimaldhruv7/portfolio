import React, { useEffect, useState } from 'react';
import { Compass, Github, Linkedin, FileText, Mail, X, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const getSocialUrl = (name) => socialLinks.find((s) => s.name === name)?.url || '#';

const ExplorePortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const scrollToContact = () => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const cards = [
    {
      label: 'GitHub',
      description: 'Check out my code',
      icon: Github,
      href: getSocialUrl('GitHub'),
      external: true
    },
    {
      label: 'LinkedIn',
      description: "Let's connect professionally",
      icon: Linkedin,
      href: getSocialUrl('LinkedIn'),
      external: true
    },
    {
      label: 'Résumé',
      description: 'Download my full résumé',
      icon: FileText,
      href: personalInfo.resumeUrl,
      external: true
    },
    {
      label: 'Get in Touch',
      description: 'Jump to the contact form',
      icon: Mail,
      onClick: scrollToContact
    }
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Explore more ways to connect"
        title="Explore more"
        className="inline-flex items-center justify-center text-slate hover:text-green transition-all duration-300 hover:-translate-y-1 hover:rotate-12"
      >
        <Compass size={20} />
      </button>

      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center p-6 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="explore-portal-heading"
      >
        <div
          className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`relative w-full max-w-lg bg-navy-light border border-navy-lightest rounded-lg p-8 sm:p-10 text-center shadow-[0_30px_60px_-20px_rgba(2,12,27,0.9)] transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 text-slate hover:text-green transition-colors duration-200"
          >
            <X size={20} />
          </button>

          <div className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-green/20 blur-xl animate-pulse" />
            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green/10 border border-green/40 text-green">
              <Sparkles size={26} />
            </span>
          </div>

          <h2 id="explore-portal-heading" className="text-xl sm:text-2xl font-semibold text-slate-lightest mb-2">
            Want to explore more?
          </h2>
          <p className="text-slate text-sm mb-8">
            Here are a few more ways to check out my work or get in touch.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {cards.map(({ label, description, icon: Icon, href, onClick, external }) => {
              const content = (
                <>
                  <Icon size={22} className="text-green mb-2" />
                  <span className="text-slate-lightest text-sm font-medium">{label}</span>
                  <span className="text-slate text-xs mt-0.5">{description}</span>
                </>
              );

              const cardClasses =
                'group flex flex-col items-center justify-center text-center p-4 rounded border border-navy-lightest bg-navy hover:border-green/50 hover:-translate-y-1 transition-all duration-300';

              return onClick ? (
                <button key={label} type="button" onClick={onClick} className={cardClasses}>
                  {content}
                </button>
              ) : (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={cardClasses}
                >
                  {content}
                </a>
              );
            })}
          </div>

          <p className="text-xs font-mono text-slate/70">
            {personalInfo.name} · {personalInfo.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExplorePortal;
