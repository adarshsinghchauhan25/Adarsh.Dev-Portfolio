import { useState } from 'react';
import { personalInfo, educationData, experienceData, certificationsData, projectsData } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, ExternalLink, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
ADARSH SINGH CHAUHAN
Computer Science and Engineering (CSE) Student & Frontend Developer
Email: ${personalInfo.email} | Location: ${personalInfo.location}
University: ${personalInfo.university}

SUMMARY:
${personalInfo.tagline}

EDUCATION:
- B.Tech in Computer Science and Engineering (CSE), Barkatullah University, Bhopal (2025 - 2029, Current: 2nd Year)
- Class XII (Higher Secondary), Madhya Pradesh Board (2025) - 90.6% Aggregate
- Class X (Secondary), Madhya Pradesh Board (2023) - 94.8% Aggregate

EXPERIENCE & INTERNSHIPS:
- Campus Growth Associate Intern, Gradientts (Sep 2026 - Dec 2026)
  * Scaled user acquisition across engineering departments.
  * Organized hackathon awareness drives and workshops for 300+ students.
- Internshala Student Partner (ISP), BUIT Bhopal (Sep 2026 - Oct 2026)
  * Facilitated student access to verified national internships.
  * Mentored 150+ candidates in career readiness and profile optimization.

TECHNICAL SKILLS:
- Core Languages & Web: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
- Tools: Git, GitHub, Vite, REST APIs, VS Code
- Leadership & Growth: Brand Management, Effective Leadership, Social Media Marketing, Event Coordination

CERTIFICATIONS:
- Cloud Computing
- HTML & CSS Fundamentals
- Brand Management & Effective Leadership
- Social Media Marketing

FEATURED PROJECTS:
- DevPulse: Campus Tech Community Portal (React, Tailwind CSS, REST APIs)
- AlgoViz: Interactive Algorithm & Graph Visualizer (React, Canvas API)
- OmniDesk: Student Academic Workspace & Note Hub (React, LocalStorage)
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white flex flex-col justify-between">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00d2ff]">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae · Adarsh Singh Chauhan</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-colors cursor-pointer"
              title="Copy formatted resume text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-950" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="my-6 p-6 sm:p-8 rounded-xl bg-slate-950 border border-slate-800/90 text-slate-200 space-y-6 font-sans">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-sm font-semibold text-[#00d2ff] mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
                {personalInfo.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00d2ff]" />
                {personalInfo.location}
              </span>
              <span>·</span>
              <span>{personalInfo.currentYear}</span>
            </div>
            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Education &amp; Academic Qualifications
            </h3>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-200">
                    <span className="text-white text-sm">{edu.degree} — {edu.institution}</span>
                    <span className="font-mono text-[#00d2ff]">{edu.score} ({edu.duration})</span>
                  </div>
                  <div className="text-slate-400">{edu.boardOrUniversity}</div>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5 pt-0.5">
                    {edu.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Leadership */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Experience &amp; Internships
            </h3>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-200">
                    <span className="text-white text-sm">{exp.role} · <span className="text-[#00d2ff]">{exp.company}</span></span>
                    <span className="font-mono text-slate-400">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5 pt-0.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Leadership */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Skills &amp; Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-white">Core Languages &amp; Web: </span>
                <span className="text-slate-300">HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-white">Developer Tools: </span>
                <span className="text-slate-300">Git, GitHub, Vite, REST APIs, VS Code</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-white">Leadership &amp; Growth: </span>
                <span className="text-slate-300">Brand Management, Effective Leadership, Social Media Marketing, Event Coordination</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white">{cert.title}</div>
                  <div className="text-[11px] text-slate-400 font-mono">Issued {cert.issuedDate} · ID: {cert.credentialId}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Incoming CSE Projects
            </h3>
            <div className="space-y-2 text-xs">
              {projectsData.map((p) => (
                <div key={p.id}>
                  <span className="font-semibold text-white">{p.title}: </span>
                  <span className="text-slate-300">{p.description} </span>
                  <span className="text-[#00d2ff] font-mono">[{p.tags.join(', ')}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
          <span>Adarsh Singh Chauhan · Portfolio Resume Preview</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
