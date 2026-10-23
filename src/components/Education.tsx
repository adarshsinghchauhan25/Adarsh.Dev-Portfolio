import { useState } from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ChevronRight, Check } from 'lucide-react';

export default function Education() {
  const [expandedId, setExpandedId] = useState<string | null>('buit-btech');

  return (
    <section id="education" className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      {/* Background cyan subtle glow */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Milestones
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            A solid grounding in Computer Science and Engineering principles, backed by a proven track record of consistent academic excellence and distinction.
          </p>
        </div>

        {/* Structured Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {educationData.map((item) => {
            const isExpanded = expandedId === item.id;
            const isBTech = item.id === 'buit-btech';

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl bg-slate-900/70 border backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 ${
                  isBTech
                    ? 'border-[#00d2ff]/40 shadow-[0_0_25px_rgba(0,210,255,0.1)] hover:shadow-[0_0_35px_rgba(0,210,255,0.2)]'
                    : 'border-slate-800 hover:border-slate-700 hover:shadow-xl'
                } hover:border-[#00d2ff]/50`}
              >
                <div>
                  {/* Top Header & Duration / Board */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="text-xs text-slate-400 font-mono">
                      <span>{item.duration}</span>
                      <span className="mx-1.5 text-slate-600">·</span>
                      <span>{item.location}</span>
                    </div>

                    {item.status === 'In Progress' ? (
                      <span className="text-xs font-semibold text-[#00d2ff] bg-[#00d2ff]/10 px-2.5 py-1 rounded-md border border-[#00d2ff]/20">
                        Current
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        Graduated
                      </span>
                    )}
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-medium text-[#00d2ff] mb-2">
                    {item.institution}
                  </div>
                  <div className="text-xs text-slate-400 mb-6">
                    {item.boardOrUniversity}
                  </div>

                  {/* Score Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 mb-5">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      {item.scoreLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00d2ff]">
                      {item.score}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-5">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#00d2ff] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Coursework Area */}
                  {item.coursework && (
                    <div className="pt-3 border-t border-slate-800/70">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="flex items-center justify-between w-full text-xs font-semibold text-slate-300 hover:text-[#00d2ff] transition-colors py-1 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#00d2ff]" />
                          <span>Core Syllabus &amp; Coursework</span>
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-90 text-[#00d2ff]' : 'text-slate-500'
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-1">
                          {item.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:border-[#00d2ff]/40 transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Verified Academic Record</span>
                  </span>
                  <span className="font-mono text-slate-400">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
