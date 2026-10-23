import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Wrench, Users, Check, Sparkles } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Competencies', icon: Sparkles },
    { id: 'core-languages', label: 'Core Languages & Frontend', icon: Code2 },
    { id: 'tools-dev', label: 'Developer Tools', icon: Wrench },
    { id: 'leadership-growth', label: 'Leadership & Growth', icon: Users },
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-2">
              <Code2 className="w-4 h-4" />
              <span>Skill Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills &amp; Growth Competencies
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Organized into specialized visual badge groups combining computer science fundamentals with peer community building and leadership.
            </p>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#00d2ff] text-slate-950 shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specialized Visual Badge Groups */}
        <div className="space-y-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md hover:border-[#00d2ff]/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800/70">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {cat.skills.length} core competencies
                </div>
              </div>

              {/* Badges Grid with subtle glowing hover animations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-[#00d2ff]/50 hover:bg-slate-900/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#00d2ff] tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium mb-3">
                        {skill.tag}
                      </div>
                    </div>

                    {/* Subtle Progress Bar */}
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-[#00d2ff] h-1.5 rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_#00d2ff]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
