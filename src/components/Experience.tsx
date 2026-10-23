import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Briefcase className="w-4 h-4" />
            <span>Work History</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Internships
          </h2>
        </div>

        {/* 3-Column Grid on PC / Responsive on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono text-[#00d2ff] bg-[#00d2ff]/10 px-2 py-0.5 rounded border border-[#00d2ff]/20">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                <div className="text-sm font-semibold text-[#00d2ff] mt-0.5">
                  {item.company}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {item.achievements && item.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>

              {item.skillsApplied && item.skillsApplied.length > 0 && (
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs">
                  {item.skillsApplied.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
