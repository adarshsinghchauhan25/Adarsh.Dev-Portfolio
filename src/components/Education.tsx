import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#00d2ff]" />
                    {item.duration}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">
                    {item.scoreLabel}: {item.score}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {item.institution}
                </h3>
                <div className="text-sm font-semibold text-[#00d2ff] mt-1">
                  {item.degree}
                </div>

                <div className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                  <span>{item.boardOrUniversity}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-1">
                    {item.highlights.map((h, idx) => (
                      <p key={idx}>{h}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
