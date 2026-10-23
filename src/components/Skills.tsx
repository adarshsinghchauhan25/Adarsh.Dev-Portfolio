import { skillsList } from '../data/portfolioData';
import { Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-18 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Wrench className="w-4 h-4" />
            <span>Key Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
        </div>

        {/* Clean, Basic Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {skillsList.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-[#00d2ff] shrink-0" />
              <span className="text-sm font-semibold text-slate-100">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
