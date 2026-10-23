import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export default function Navbar({ onResumeClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'education', 'experience', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-slate-950/50 backdrop-blur-sm border-b border-slate-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-16 md:h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap shrink-0 group"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00d2ff] shadow-[0_0_10px_#00d2ff] group-hover:scale-110 transition-transform duration-300" />
            <span>Adarsh Singh Chauhan</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 transition-colors duration-300 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#00d2ff] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onResumeClick}
              className="relative group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-100 bg-slate-900/90 border border-[#00d2ff]/40 rounded-lg hover:border-[#00d2ff] hover:bg-[#00d2ff] hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] cursor-pointer whitespace-nowrap shrink-0"
              title="View & Download Adarsh's Resume"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00d2ff] group-hover:text-slate-950 transition-colors" />
              <span>Download Resume</span>
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none lg:hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-[#00d2ff] border-l-2 border-[#00d2ff]'
                    : 'text-slate-300 hover:bg-slate-900/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-[#00d2ff] rounded-lg shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:bg-[#33dbff] transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download Full Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
