import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, GraduationCap } from 'lucide-react';

interface HeroProps {
  onExploreExperience: () => void;
  onConnect: () => void;
}

export default function Hero({ onExploreExperience, onConnect }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="home" className="pt-10 pb-16 lg:py-20 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>Undergraduate Student · B.Tech. CSE (2025 – 2029)</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
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

          {/* Direct Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {/* Email */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
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

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-slate-200 hover:text-[#00d2ff] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00d2ff]" />
                <span className="font-mono">{personalInfo.phone}</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onExploreExperience}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-colors cursor-pointer"
            >
              <span>View Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onConnect}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Contact Adarsh</span>
            </button>
          </div>

          {/* Quick Academic & Milestone Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">
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
    </section>
  );
}
