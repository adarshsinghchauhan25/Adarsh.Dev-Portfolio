import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
          {/* Brand & Student Discipline */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-base font-bold text-white">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400">
              B.Tech in Computer Science and Engineering (CSE) · Barkatullah University, Bhopal
            </p>
          </div>

          {/* Quick Jump Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#home" className="hover:text-[#00d2ff] transition-colors">Home</a>
            <a href="#education" className="hover:text-[#00d2ff] transition-colors">Education</a>
            <a href="#experience" className="hover:text-[#00d2ff] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#00d2ff] transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-[#00d2ff] transition-colors">Certifications</a>
            <a href="#projects" className="hover:text-[#00d2ff] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#00d2ff] transition-colors">Contact</a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#00d2ff]/40 transition-all duration-300 cursor-pointer group"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#00d2ff]" />
          </button>
        </div>

        {/* Bottom Bar with Socials & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00d2ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00d2ff] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="hover:text-[#00d2ff] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
