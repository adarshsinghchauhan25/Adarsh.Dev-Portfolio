import { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Users, Sparkles } from 'lucide-react';

export default function Experience() {
  const [selectedExpId, setSelectedExpId] = useState<string>(experienceData[0].id);

  return (
    <section id="experience" className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Internships Timeline
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Hands-on internships combining technology adoption, student community leadership, and agile cross-functional execution.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {experienceData.map((item) => {
            const isSelected = selectedExpId === item.id;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#00d2ff] text-slate-950 shadow-[0_0_15px_#00d2ff]'
                      : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:border-[#00d2ff] group-hover:text-[#00d2ff]'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => setSelectedExpId(item.id)}
                  className={`rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border border-[#00d2ff]/40 shadow-[0_0_30px_rgba(0,210,255,0.12)]'
                      : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/75'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/70">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#00d2ff] bg-[#00d2ff]/10 px-2 py-0.5 rounded border border-[#00d2ff]/20">
                          {item.type}
                        </span>
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-base font-semibold text-slate-200 mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/70 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-[#00d2ff]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Role Brief Description */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Detailed Achievements */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Key Contributions &amp; Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {item.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed hover:border-slate-700 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Applied Badges */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#00d2ff]" />
                      Competencies:
                    </span>
                    {item.skillsApplied.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 hover:border-[#00d2ff]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
