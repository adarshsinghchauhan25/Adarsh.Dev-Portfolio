import { useState, useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, Play, RefreshCw, Send, CheckCircle, Code, ExternalLink } from 'lucide-react';

interface ProjectDemoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  if (!project) return null;

  // State for AlgoViz simulation
  const [array, setArray] = useState<number[]>([45, 80, 20, 60, 95, 30, 75, 10, 50, 85]);
  const [sorting, setSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [swapCount, setSwapCount] = useState(0);

  // State for DevPulse simulation
  const [messages, setMessages] = useState<Array<{ user: string; text: string; time: string; tag: string }>>([
    { user: 'Rohit Sharma (3rd Year)', text: 'Anyone interested in forming a team for the upcoming Bhopal Web Hackathon?', time: '10m ago', tag: '#Hackathon' },
    { user: 'Priya Patel (2nd Year)', text: 'Just completed the CSS Grid tutorial series. Clean layouts are satisfying!', time: '25m ago', tag: '#Frontend' },
    { user: 'Adarsh Singh Chauhan', text: 'Welcome to the BUIT developer circle. Share your questions & side projects below.', time: '1h ago', tag: '#Community' }
  ]);
  const [newMsg, setNewMsg] = useState('');
  const [selectedTag, setSelectedTag] = useState('#Frontend');

  // State for OmniDesk simulation
  const [noteTitle, setNoteTitle] = useState('Operating Systems - Process Scheduling');
  const [noteContent, setNoteContent] = useState('## Round Robin & Priority Scheduling\n- Time quantum must be carefully tuned\n- Context switching overhead must be factored in\n\n### Key Formulas\nTurnaround Time = Completion Time - Arrival Time\nWaiting Time = Turnaround Time - Burst Time');
  const [savedStatus, setSavedStatus] = useState('Saved to local storage');

  // Algorithm Visualizer helper
  const randomizeArray = () => {
    if (sorting) return;
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 15);
    setArray(newArr);
    setActiveIndices([]);
    setSwapCount(0);
  };

  const runBubbleSort = async () => {
    if (sorting) return;
    setSorting(true);
    const arr = [...array];
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        await new Promise((r) => setTimeout(r, 220));

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swaps++;
          setSwapCount(swaps);
          setArray([...arr]);
        }
      }
    }

    setActiveIndices([]);
    setSorting(false);
  };

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages((prev) => [
      { user: 'You (Visiting Developer)', text: newMsg.trim(), time: 'Just now', tag: selectedTag },
      ...prev
    ]);
    setNewMsg('');
  };

  const handleNoteChange = (text: string) => {
    setNoteContent(text);
    setSavedStatus('Saving changes...');
    setTimeout(() => {
      setSavedStatus('Saved to local storage');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#00d2ff] bg-[#00d2ff]/10 px-2 py-0.5 rounded border border-[#00d2ff]/20">
                Live Interactive Sandbox
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400">{project.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Content */}
        <div className="py-6">
          {project.mockupType === 'algorithm' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00d2ff]">Algorithm: Bubble Sort</span>
                    <span>|</span>
                    <span>Array Size: {array.length}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400">Total Swaps: {swapCount}</span>
                  </div>
                </div>

                {/* Animated Sorting Bars */}
                <div className="h-48 flex items-end justify-center gap-2 sm:gap-3 pt-4 px-2">
                  {array.map((val, idx) => {
                    const isActive = activeIndices.includes(idx);
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-400 tabular-nums">
                          {val}
                        </span>
                        <div
                          className={`w-full rounded-t transition-all duration-200 ${
                            isActive
                              ? 'bg-rose-500 shadow-[0_0_12px_#f43f5e]'
                              : 'bg-[#00d2ff] shadow-[0_0_8px_rgba(0,210,255,0.3)]'
                          }`}
                          style={{ height: `${(val / 100) * 140 + 10}px` }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Visualizer Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={runBubbleSort}
                    disabled={sorting}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{sorting ? 'Sorting In Progress...' : 'Start Sorting Animation'}</span>
                  </button>

                  <button
                    onClick={randomizeArray}
                    disabled={sorting}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Randomize Array</span>
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
                <span className="text-[#00d2ff] font-semibold">Engine Details: </span>
                Uses React functional state dispatches with synchronized async sleep timers to simulate thread execution step-by-step. Time Complexity: O(n²), Space Complexity: O(1).
              </div>
            </div>
          )}

          {project.mockupType === 'community' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                  <span className="font-semibold text-[#00d2ff]">BUIT Campus Tech Stream</span>
                  <div className="flex gap-1.5">
                    {['#Frontend', '#Hackathon', '#DSA', '#Events'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`text-[10px] px-2 py-0.5 rounded cursor-pointer ${
                          selectedTag === tag ? 'bg-[#00d2ff] text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Stream */}
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {messages.map((m, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-200">{m.user}</span>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                          <span className="text-[#00d2ff]">{m.tag}</span>
                          <span>·</span>
                          <span>{m.time}</span>
                        </div>
                      </div>
                      <p className="text-slate-300">{m.text}</p>
                    </div>
                  ))}
                </div>

                {/* New post input */}
                <form onSubmit={handlePostMessage} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    placeholder="Share a developer question or announcement..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2ff]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#00d2ff] text-slate-950 text-xs font-semibold rounded-lg hover:bg-[#33dbff] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post</span>
                  </button>
                </form>
              </div>

              <div className="text-xs text-slate-400 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
                <span className="text-[#00d2ff] font-semibold">Architecture Note: </span>
                Simulates real-time college forum feeds with optimistic UI updates and instant tag categorization.
              </div>
            </div>
          )}

          {project.mockupType === 'workspace' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <input
                    type="text"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className="bg-transparent font-bold text-sm text-white focus:outline-none border-b border-transparent focus:border-[#00d2ff] flex-1 mr-4"
                  />
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {savedStatus}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-mono">
                      Markdown Input:
                    </label>
                    <textarea
                      value={noteContent}
                      onChange={(e) => handleNoteChange(e.target.value)}
                      rows={6}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-[#00d2ff] resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1 font-mono">
                      Rendered Preview:
                    </label>
                    <div className="h-36 overflow-y-auto bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-300 space-y-1">
                      <div className="font-bold text-white text-sm border-b border-slate-800 pb-1">
                        {noteTitle}
                      </div>
                      <div className="whitespace-pre-wrap leading-relaxed text-slate-300 font-sans pt-1">
                        {noteContent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
                <span className="text-[#00d2ff] font-semibold">Storage Specs: </span>
                Zero-latency offline markdown notebook powered by synchronized browser storage and responsive side-by-side previewing.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Status: Active Sandbox Preview
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
