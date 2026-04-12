import React from 'react';
import { ExternalLink, Zap, Banknote, Radio, Brain, Car } from 'lucide-react';
import { projectsData } from '../data/mock';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-white/5">
          <img
            src={project.image}
            alt={`${project.name} - ${project.domain} project screenshot showing ${project.description.substring(0, 100)}`}
            title={`${project.name} | ${project.domain}`}
            loading="lazy"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
          {/* Domain Badge on Image */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full backdrop-blur-xl bg-cyan-500/30 border border-cyan-400/50 text-cyan-100 text-xs font-semibold shadow-lg">
              {project.domain}
            </span>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <p className="text-white/70 leading-relaxed text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-md backdrop-blur-xl bg-white/5 border border-white/10 text-white/80 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="flex items-start gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
          <Zap size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-white/80">
            <span className="font-semibold text-amber-400">Impact:</span> {project.impact}
          </p>
        </div>

        {/* View Live Button */}
        {project.url !== '#' && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 text-white hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105"
          >
            View Live Site
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const sections = [
    { title: 'Fintech Systems', data: projectsData.fintech, Icon: Banknote, gradient: 'from-emerald-500/20 to-cyan-500/20' },
    { title: 'Telecom Platforms', data: projectsData.telecom, Icon: Radio, gradient: 'from-blue-500/20 to-purple-500/20' },
    { title: 'AI / Enterprise', data: projectsData.ai_enterprise, Icon: Brain, gradient: 'from-purple-500/20 to-pink-500/20' },
    { title: 'E-Commerce / Auction', data: projectsData.crm, Icon: Car, gradient: 'from-orange-500/20 to-red-500/20' }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing real-world applications across fintech, telecom, AI, and enterprise domains
          </p>
        </div>

        {/* Project Sections */}
        <div className="space-y-16">
          {sections.map((section) => {
            const IconComponent = section.Icon;
            return (
              <div key={section.title}>
                {/* Section Title */}
                <div className="mb-8">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r ${section.gradient} border border-white/20`}>
                    <IconComponent size={24} className="text-white" />
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.data.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;