import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-18 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Briefcase className="w-4 h-4" />
            <span>Work History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Experience &amp; Internships
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#00d2ff]">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>{item.duration}</span>
                </div>
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

              {item.skillsApplied && item.skillsApplied.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 text-[11px] mr-1">Skills:</span>
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
