import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Copy
} from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onConnect: () => void;
  onResumeClick: () => void;
}

export default function Hero({ onExploreProjects, onConnect }: HeroProps) {
  // Typing animation state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Interactive card tab state
  const [activeTab, setActiveTab] = useState<'developer' | 'stack' | 'terminal'>('developer');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; out: string }>>([
    { cmd: 'whoami', out: 'Adarsh Singh Chauhan — CSE 2nd Year, BUIT Bhopal' },
    { cmd: 'cat skills.txt', out: 'HTML5, CSS3, JavaScript (ES6+), React, Tailwind, Leadership' }
  ]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = personalInfo.typingRoles[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === currentWord.length) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % personalInfo.typingRoles.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let out = '';

    if (!cmd) return;

    if (cmd === 'help') {
      out = 'Available commands: whoami, skills, education, internships, contact, clear';
    } else if (cmd === 'whoami') {
      out = 'Adarsh Singh Chauhan — CSE Sophomore, Frontend Developer & Campus Community Builder.';
    } else if (cmd === 'skills') {
      out = 'HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Brand Management, Leadership.';
    } else if (cmd === 'education') {
      out = 'B.Tech CSE @ Barkatullah University | Class XII: 90.6% | Class X: 94.8%';
    } else if (cmd === 'internships') {
      out = 'Campus Growth Associate @ Gradientts | Internshala Student Partner @ BUIT Bhopal';
    } else if (cmd === 'contact') {
      out = 'Email: adarshuitb@gmail.com | Location: Bhopal, MP, India';
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      out = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, out }]);
    setTerminalInput('');
  };

  return (
    <section id="home" className="relative pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Background cyber ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00d2ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Kicker with clean unboxed text */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]" />
              <span className="text-slate-200">2nd-Year CSE Undergrad</span>
              <span className="text-slate-600">/</span>
              <span className="text-[#00d2ff]">Barkatullah University</span>
            </div>

            {/* Name & Primary Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-[#1e3a8a] drop-shadow-[0_0_25px_rgba(30,58,138,0.5)]">Adarsh Singh Chauhan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
                Computer Science Student &amp; Frontend Developer
              </h2>
            </div>

            {/* Dynamic Typing Subheading */}
            <div className="flex items-center gap-2 h-10 text-lg sm:text-xl font-mono text-[#00d2ff]">
              <span className="text-slate-400 font-sans text-base sm:text-lg">&gt;</span>
              <span className="font-semibold tracking-wide">{displayedText}</span>
              <span className="inline-block w-2.5 h-6 bg-[#00d2ff] animate-pulse rounded-xs" />
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl" style={{ textWrap: 'balance' }}>
              {personalInfo.tagline}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:shadow-[0_0_30px_rgba(0,210,255,0.55)] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onConnect}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-[#00d2ff]/60 hover:text-[#00d2ff] hover:bg-slate-800 transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#00d2ff]" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Connect:</span>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#00d2ff] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#00d2ff]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#00d2ff] transition-colors"
              >
                <Github className="w-4 h-4 text-[#00d2ff]" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#00d2ff] transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#00d2ff]" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Terminal & Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl p-5 shadow-2xl shadow-black/80 hover:border-[#00d2ff]/40 transition-all duration-300">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">adarsh-dev-environment</span>
                </div>

                {/* Tab buttons */}
                <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab('developer')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'developer'
                        ? 'bg-slate-800 text-[#00d2ff] font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'stack'
                        ? 'bg-slate-800 text-[#00d2ff] font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Stack.json
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'terminal'
                        ? 'bg-slate-800 text-[#00d2ff] font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Terminal
                  </button>
                </div>
              </div>

              {/* Tab 1: Profile.ts */}
              {activeTab === 'developer' && (
                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 text-slate-300 leading-relaxed space-y-1 overflow-x-auto">
                    <p className="text-slate-500 font-sans italic text-xs mb-1">// Candidate Profile: Adarsh Singh Chauhan</p>
                    <p><span className="text-[#00d2ff]">const</span> <span className="text-amber-300">student</span>: <span className="text-emerald-300">Developer</span> = {'{'}</p>
                    <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Adarsh Singh Chauhan"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">standing:</span> <span className="text-emerald-300">"B.Tech CSE Sophomore (2nd Year)"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">university:</span> <span className="text-emerald-300">"Barkatullah University, Bhopal"</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">coreFocus:</span> [<span className="text-amber-200">"Web Engineering"</span>, <span className="text-amber-200">"Campus Leadership"</span>],</p>
                    <p className="pl-4"><span className="text-slate-400">internships:</span> <span className="text-purple-300">["Gradientts", "Internshala ISP"]</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">"Actively Building &amp; Growing"</span></p>
                    <p>{'}'};</p>
                  </div>

                  {/* Highlights card */}
                  <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <GraduationCap className="w-3.5 h-3.5 text-[#00d2ff]" />
                        <span>University</span>
                      </div>
                      <div className="font-semibold text-slate-200 font-sans truncate">Barkatullah Univ</div>
                      <div className="text-[11px] text-[#00d2ff]">CSE Dept · Bhopal</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Class XII Merit</span>
                      </div>
                      <div className="font-semibold text-slate-200 font-sans tabular-nums">90.6% Aggregate</div>
                      <div className="text-[11px] text-slate-400">Completed 2025</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Stack.json */}
              {activeTab === 'stack' && (
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-1">
                  <p className="text-slate-500 font-sans italic text-xs mb-1">// Core Technical Stack &amp; Capabilities</p>
                  <p>{'{'}</p>
                  <p className="pl-4"><span className="text-[#00d2ff]">"languages"</span>: [<span className="text-emerald-300">"HTML5"</span>, <span className="text-emerald-300">"CSS3"</span>, <span className="text-emerald-300">"JavaScript ES6+"</span>],</p>
                  <p className="pl-4"><span className="text-[#00d2ff]">"libraries"</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>],</p>
                  <p className="pl-4"><span className="text-[#00d2ff]">"leadership"</span>: [</p>
                  <p className="pl-8"><span className="text-amber-200">"Brand Management"</span>,</p>
                  <p className="pl-8"><span className="text-amber-200">"Effective Leadership"</span>,</p>
                  <p className="pl-8"><span className="text-amber-200">"Social Media Marketing"</span></p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-[#00d2ff]">"environment"</span>: <span className="text-purple-300">"Linux / Git / Vite"</span></p>
                  <p>{'}'}</p>
                </div>
              )}

              {/* Tab 3: Interactive Terminal */}
              {activeTab === 'terminal' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 h-44 overflow-y-auto space-y-2 text-slate-300">
                    <p className="text-slate-500">Adarsh Interactive Shell. Type "help" for commands.</p>
                    {terminalHistory.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[#00d2ff]">
                          <span className="text-slate-500">$</span>
                          <span>{item.cmd}</span>
                        </div>
                        <p className="text-slate-300 pl-3 leading-relaxed">{item.out}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                    <span className="text-[#00d2ff]">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder='Type a command (e.g. "skills", "whoami", "help")...'
                      className="flex-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2ff]"
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-[#00d2ff] hover:text-slate-950 text-slate-200 rounded text-xs transition-colors cursor-pointer"
                    >
                      Run
                    </button>
                  </form>
                </div>
              )}

              {/* Footer status bar in card */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
                  <span>Interactive Portfolio Mode</span>
                </span>
                <span>Bhopal, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Milestone / Stat Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/70">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-[#00d2ff]/30 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight group-hover:text-[#00d2ff] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
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
