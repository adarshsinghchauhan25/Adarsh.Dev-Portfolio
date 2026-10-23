import { skillsList } from '../data/portfolioData';
import { Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Wrench className="w-4 h-4" />
            <span>Key Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
        </div>

        {/* Responsive Grid Spanning Full Width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillsList.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
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
