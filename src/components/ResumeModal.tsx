import { useState } from 'react';
import { personalInfo, educationData, experienceData, certificationsData, skillsList } from '../data/portfolioData';
import { X, Printer, Mail, Phone, Copy, Check, FileText } from 'lucide-react';

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
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}

SUMMARY:
${personalInfo.summary}

EXPERIENCE:
- Campus Growth Associate Intern at Gradietts (Sep 2026 - PRESENT)
- Campus Ambassador at Air India Limited (Oct 2026 - PRESENT)
- Internshala Student Partner at Internshala (Sep 2026 - Oct 2026)

EDUCATION:
- Barkatullah University Institute of Technology, Bhopal (2025 - 2029)
  Undergraduate, Bachelor of Technology in Computer Science and Engineering
- School of Excellence, Sidhi (M.P.) (2023 - 2025)
  10+2 Higher Secondary | Percentage: 90.6%
- Sarvodaya Vidya Mandir, Sidhi (M.P.) (Ending 2023)
  High School | Percentage: 94.8%

SKILLS:
${skillsList.join(', ')}

CERTIFICATIONS:
${certificationsData.map((c) => `- ${c.title}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white flex flex-col justify-between">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00d2ff]">
            <FileText className="w-4 h-4" />
            <span>Resume · {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-950" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="my-6 p-6 sm:p-8 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 space-y-5 text-xs sm:text-sm font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
                {personalInfo.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#00d2ff]" />
                {personalInfo.phone}
              </span>
              <span>·</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] mb-1">
              Summary
            </h3>
            <p className="text-xs leading-relaxed text-slate-300">
              {personalInfo.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Experience
            </h3>
            <div className="space-y-2 text-xs">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-0.5">
                  <div className="flex justify-between font-semibold text-white">
                    <span>{exp.role} at {exp.company}</span>
                    <span className="font-mono text-slate-400">{exp.duration}</span>
                  </div>
                  <p className="text-slate-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1">
              Education
            </h3>
            <div className="space-y-2 text-xs">
              {educationData.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <div className="flex justify-between font-semibold text-white">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-[#00d2ff]">{edu.duration}</span>
                  </div>
                  <div className="text-slate-300">{edu.degree}</div>
                  <div className="text-slate-400">{edu.scoreLabel}: {edu.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1 mb-1">
              Skills
            </h3>
            <p className="text-xs text-slate-300">
              {skillsList.join(' · ')}
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] border-b border-slate-800 pb-1 mb-1">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-300">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex items-center gap-1.5">
                  <span className="text-[#00d2ff]">·</span>
                  <span>{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
