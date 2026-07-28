import React from 'react';
import { Folder, ExternalLink, Zap } from 'lucide-react';
import { projectsData } from '../data/mock';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-navy-light rounded p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
      <div className="flex items-start justify-between mb-8">
        <Folder size={36} className="text-green" />
        {project.url !== '#' && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} live site`}
            className="text-slate-lightest hover:text-green hover:-translate-y-0.5 transition-all duration-300"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>

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
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-24 xl:px-32 max-w-6xl">
      <h2 className="numbered-heading" data-number="2">
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
              {section.data.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
