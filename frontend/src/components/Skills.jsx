import React from 'react';
import { Code, Database, Zap, Brain, Cloud, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const categories = [
    { name: 'Frontend', icon: Code, color: 'cyan' },
    { name: 'Backend', icon: Database, color: 'emerald' },
    { name: 'Real-time', icon: Zap, color: 'amber' },
    { name: 'AI/ML', icon: Brain, color: 'purple' },
    { name: 'Database', icon: Database, color: 'blue' },
    { name: 'DevOps', icon: Cloud, color: 'indigo' },
    { name: 'Tools', icon: Wrench, color: 'slate' },
    { name: 'Specialty', icon: Zap, color: 'rose' }
  ];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 text-cyan-300',
      emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-400/30 text-emerald-300',
      amber: 'from-amber-500/20 to-amber-600/20 border-amber-400/30 text-amber-300',
      purple: 'from-purple-500/20 to-purple-600/20 border-purple-400/30 text-purple-300',
      blue: 'from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-300',
      indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-400/30 text-indigo-300',
      slate: 'from-slate-500/20 to-slate-600/20 border-slate-400/30 text-slate-300',
      rose: 'from-rose-500/20 to-rose-600/20 border-rose-400/30 text-rose-300'
    };
    return colors[color] || colors.cyan;
  };

  const getLevelBadgeColor = (level) => {
    const levels = {
      Expert: 'bg-green-500/20 border-green-400/30 text-green-300',
      Advanced: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
      Intermediate: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300'
    };
    return levels[level] || levels.Advanced;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Specialized in building real-time applications with modern tech stack including AI, WebSockets, and scalable cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category.name);
            const IconComponent = category.icon;
            
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category.name}
                className="group rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Category Header */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-gradient-to-r ${getColorClasses(category.color)} border mb-4`}>
                  <IconComponent size={18} />
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white/90 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold backdrop-blur-xl border ${getLevelBadgeColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Special Skills */}
        <div className="mt-12 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            🚀 Advanced Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-white font-semibold mb-2">Real-time Systems</h4>
              <p className="text-white/70 text-sm">
                WebSockets, Socket.io, live data streaming, and real-time metadata transmission
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="text-white font-semibold mb-2">AI Integration</h4>
              <p className="text-white/70 text-sm">
                LangChain, OpenAI APIs, AI chatbots, and intelligent automation systems
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📹</div>
              <h4 className="text-white font-semibold mb-2">Video/Audio</h4>
              <p className="text-white/70 text-sm">
                WebRTC integration, video/audio calls, and real-time communication features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
