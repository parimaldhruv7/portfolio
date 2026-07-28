import React from 'react';
import { Folder, ExternalLink, Zap } from 'lucide-react';
import { projectsData } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const ProjectCard = ({ project, index = 0 }) => {
  const [ref, isRevealed] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} group relative bg-navy-light rounded overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] hover:shadow-[0_20px_40px_-15px_rgba(2,12,27,0.85)]`}
    >
      <div className="relative h-44 overflow-hidden bg-navy-lightest">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-lightest via-navy-light to-navy">
            <Folder size={40} className="text-green/60" />
          </div>
        )}
        <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/10 transition-colors duration-300" />
        {project.url !== '#' && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} live site`}
            className="absolute top-3 right-3 p-2 rounded-full bg-navy/80 text-slate-lightest hover:text-green hover:bg-navy transition-all duration-300"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-slate-lightest text-lg font-semibold mb-2 group-hover:text-green transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-slate text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex items-start gap-2 mb-4 text-xs text-amber-300/90">
          <Zap size={14} className="flex-shrink-0 mt-0.5 text-amber-400" />
          <span>{project.impact}</span>
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-4 m-0 p-0 list-none font-mono text-xs text-slate">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const sections = [
    { title: 'Fintech Systems', data: projectsData.fintech },
    { title: 'Telecom Platforms', data: projectsData.telecom },
    { title: 'AI / Enterprise', data: projectsData.ai_enterprise },
    { title: 'E-Commerce / Auction', data: projectsData.crm }
  ];

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-24 xl:px-32 max-w-6xl mx-auto">
      <h2 className="numbered-heading" data-number="3">
        Some Things I've Built
      </h2>
      <p className="text-slate max-w-2xl -mt-6 mb-16">
        A selection of production applications I've shipped across fintech, telecom, AI, and
        enterprise domains — each built for scale, speed, and real-world usage.
      </p>

      <div className="space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-mono text-slate-lightest text-lg mb-6 flex items-center gap-2">
              <span className="text-green">//</span> {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.data.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
