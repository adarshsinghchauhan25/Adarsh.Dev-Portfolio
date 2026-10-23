import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-850">
          <div>
            <div className="text-base font-bold text-white">
              {personalInfo.name}
            </div>
            <p className="text-xs text-slate-400">
              {personalInfo.institution}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a href="#home" className="hover:text-[#00d2ff] transition-colors">Home</a>
            <a href="#experience" className="hover:text-[#00d2ff] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#00d2ff] transition-colors">Education</a>
            <a href="#skills" className="hover:text-[#00d2ff] transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-[#00d2ff] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#00d2ff] transition-colors">Contact</a>
          </nav>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#00d2ff]" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#00d2ff] transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
