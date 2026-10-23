import { ProjectItem } from '../types';
import { X, Github, Code, FileText, Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface ProjectCodeModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectCodeModal({ project, onClose }: ProjectCodeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyRepo = () => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00d2ff]">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Repository Architecture &amp; Code Specifications
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          {/* Tech Stack Details */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Implementation Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-[#00d2ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture overview */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Code className="w-4 h-4 text-[#00d2ff]" />
              <span>Engineering Specifications</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.implementationDetails}
            </p>
          </div>

          {/* Projected Directory Tree */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
            <div className="text-slate-500 pb-1 border-b border-slate-800">
              Project Structure (src/)
            </div>
            <p className="text-[#00d2ff]">├── components/</p>
            <p className="pl-4">├── {project.id}-view.tsx</p>
            <p className="pl-4">├── visualizer-canvas.tsx</p>
            <p className="pl-4">└── ui-controls.tsx</p>
            <p className="text-[#00d2ff]">├── hooks/</p>
            <p className="pl-4">└── use-{project.id}-state.ts</p>
            <p className="text-[#00d2ff]">├── lib/</p>
            <p className="pl-4">└── engine-utils.ts</p>
            <p className="text-[#00d2ff]">└── App.tsx</p>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Core Capabilities
            </div>
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-[#00d2ff] font-bold">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleCopyRepo}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-950 border border-slate-800 hover:border-[#00d2ff] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Git Remote Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>Copy Git Clone URL</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
