import { CertificationItem } from '../types';
import { Award, ShieldCheck, ExternalLink, Calendar, CheckCircle, FileBadge, Upload, Image as ImageIcon } from 'lucide-react';

interface CertificationsProps {
  certificationsList: CertificationItem[];
  onSelectCertification: (cert: CertificationItem) => void;
  onOpenUploadModal: () => void;
}

export default function Certifications({
  certificationsList,
  onSelectCertification,
  onOpenUploadModal
}: CertificationsProps) {
  return (
    <section id="certifications" className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with "+ Add Certificate with Proof" action */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Certifications
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Industry credentials attesting to foundational mastery in cloud architecture, semantic web engineering, and strategic brand leadership.
            </p>
          </div>

          <button
            onClick={onOpenUploadModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] cursor-pointer self-start sm:self-auto whitespace-nowrap shrink-0"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Certificate with Proof</span>
          </button>
        </div>

        {/* Dedicated Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-7 backdrop-blur-md hover:border-[#00d2ff]/40 hover:shadow-[0_0_25px_rgba(0,210,255,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header badge & Issuer */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00d2ff] group-hover:scale-105 group-hover:border-[#00d2ff]/50 transition-all duration-300">
                      <FileBadge className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#00d2ff]">
                        {cert.issuer}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Issued {cert.issuedDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {cert.proofImage && (
                      <span className="text-[11px] font-mono text-[#00d2ff] bg-[#00d2ff]/10 border border-[#00d2ff]/20 px-2 py-0.5 rounded flex items-center gap-1">
                        <ImageIcon className="w-3 h-3" />
                        Proof Image
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00d2ff] transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {cert.summary}
                </p>

                {/* Skills covered */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                    Core Curriculum:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {cert.skillsCovered.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action & Credential ID */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 text-[11px] truncate max-w-[180px]">
                  ID: {cert.credentialId}
                </span>

                <button
                  onClick={() => onSelectCertification(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2ff] hover:text-white px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00d2ff] transition-all duration-300 cursor-pointer"
                >
                  <span>{cert.proofImage ? 'View Certificate Proof' : 'View Details'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
