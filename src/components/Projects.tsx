import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Play,
  Terminal,
  Layers,
  ArrowUpRight,
  Code
} from 'lucide-react';

interface ProjectsProps {
  onOpenDemo: (project: ProjectItem) => void;
  onOpenCode: (project: ProjectItem) => void;
}

export default function Projects({ onOpenDemo, onOpenCode }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-[500px] h-[300px] bg-[#00d2ff]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Upcoming CSE Projects &amp; Web Applications
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Architected specifically as 2nd-year milestone builds focusing on reactive component patterns, algorithm visualizers, and state-synchronized developer utilities.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden backdrop-blur-md hover:border-[#00d2ff]/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.18)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Modern Visual Mockup Header Container */}
                <div className="relative h-48 bg-slate-950 border-b border-slate-800 overflow-hidden p-4 flex flex-col justify-between">
                  {/* Subtle Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(0, 210, 255, 0.4) 1px, transparent 0)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Browser / App Header Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-[#00d2ff] transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                      <span className="ml-2 text-[10px] font-mono text-slate-400">
                        {project.id}.app
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-medium text-[#00d2ff] bg-[#00d2ff]/10 px-2 py-0.5 rounded border border-[#00d2ff]/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Dynamic Visual Content depending on mockup type */}
                  <div className="relative z-10 my-auto py-2">
                    {project.mockupType === 'community' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
                          <span className="font-semibold text-white">Campus Tech Forum</span>
                          <span className="text-[#00d2ff] font-mono">300+ Active</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-[10px] text-slate-400 font-mono">
                          <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800/80 truncate">#ReactMeet</div>
                          <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800/80 truncate">#HackBUIT</div>
                          <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800/80 truncate">#WebDev</div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'algorithm' && (
                      <div className="space-y-2">
                        <div className="flex items-end justify-center gap-1.5 h-14 pt-2">
                          {[35, 65, 20, 85, 45, 95, 30, 70, 50].map((h, i) => (
                            <div
                              key={i}
                              className={`w-3 rounded-t transition-all duration-300 ${
                                i === 3 || i === 5
                                  ? 'bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]'
                                  : 'bg-slate-800'
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                          <span>QuickSort [O(n log n)]</span>
                          <span className="text-emerald-400">Swaps: 14</span>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'workspace' && (
                      <div className="space-y-2">
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">DSA Assignment 3.md</span>
                          <span className="text-amber-400 text-[10px] font-mono">Due Tomorrow</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>Auto-saved to LocalStorage</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover interactive overlay */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
                    <span className="font-mono text-[#00d2ff] flex items-center gap-1">
                      <Terminal className="w-3 h-3" />
                      <span>Ready for live demo</span>
                    </span>
                    <button
                      onClick={() => onOpenDemo(project)}
                      className="text-[#00d2ff] hover:text-white flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <span>Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#00d2ff] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 mb-3">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-[#00d2ff] mt-0.5">·</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenDemo(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.3)] cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Interactive Demo</span>
                </button>

                <button
                  onClick={() => onOpenCode(project)}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors cursor-pointer"
                  title="View Repository Structure & Details"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
