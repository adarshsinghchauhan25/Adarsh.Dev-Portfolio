import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-18 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Education List */}
        <div className="space-y-5">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.institution}
                  </h3>
                  <div className="text-sm font-semibold text-[#00d2ff] mt-0.5">
                    {item.degree}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <span>{item.boardOrUniversity}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  <span className="text-xs font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 flex items-center gap-1 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-[#00d2ff]" />
                    {item.duration}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">
                    {item.scoreLabel}: {item.score}
                  </span>
                </div>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-3 text-xs text-slate-300 space-y-1">
                  {item.highlights.map((h, idx) => (
                    <p key={idx}>{h}</p>
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
