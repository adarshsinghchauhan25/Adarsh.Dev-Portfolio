import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowRight, GraduationCap, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreExperience: () => void;
  onConnect: () => void;
}

export default function Hero({ onExploreExperience, onConnect }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="pt-10 pb-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Responsive Desktop Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Column (7 cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <GraduationCap className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Undergraduate Student · B.Tech. CSE (2025 – 2029)</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#00d2ff] font-medium">
                {personalInfo.institution}
              </p>
            </div>

            {/* Exact Summary */}
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                About &amp; Summary
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                "{personalInfo.summary}"
              </p>
            </div>

            {/* Contact & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs flex-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-slate-200 hover:text-[#00d2ff] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00d2ff]" />
                  <span className="font-mono">{personalInfo.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={onExploreExperience}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-colors cursor-pointer"
                >
                  <span>Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onConnect}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>

          {/* Academic Overview Card (5 cols on Desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Award className="w-4 h-4 text-[#00d2ff]" />
                  <span>Academic Profile Snapshot</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>Bhopal, M.P.</span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-slate-400">Current Program:</div>
                <div className="text-sm font-semibold text-white">
                  Bachelor of Technology (B.Tech)
                </div>
                <div className="text-xs text-[#00d2ff]">
                  Computer Science and Engineering (CSE)
                </div>
              </div>

              {/* Milestones 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {personalInfo.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-300 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
