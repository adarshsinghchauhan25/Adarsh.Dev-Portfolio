import { CertificationItem } from '../types';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, Copy, Check, ExternalLink, Image, ZoomIn } from 'lucide-react';
import { useState } from 'react';

interface CertificateModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
  onAttachProof?: (certId: string) => void;
}

export default function CertificateModal({ certification, onClose, onAttachProof }: CertificateModalProps) {
  const [copied, setCopied] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  if (!certification) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certification.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00d2ff]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Credential &amp; Proof Details
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {certification.title}
              </h3>
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

        {/* Certificate Card & Proof Area */}
        <div className="py-6 space-y-6">
          {/* If certificate has an uploaded proof image */}
          {certification.proofImage ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-[#00d2ff]">
                  <Image className="w-3.5 h-3.5" />
                  <span>Official Certificate Proof Attached</span>
                </span>
                <button
                  onClick={() => setShowFullImage(!showFullImage)}
                  className="flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{showFullImage ? 'Collapse' : 'Expand Image'}</span>
                </button>
              </div>

              <div
                onClick={() => setShowFullImage(!showFullImage)}
                className={`relative rounded-xl border border-slate-800 bg-slate-950 overflow-hidden cursor-pointer group ${
                  showFullImage ? 'max-h-[500px]' : 'max-h-60'
                } transition-all duration-300 flex items-center justify-center`}
              >
                <img
                  src={certification.proofImage}
                  alt={`${certification.title} Proof Document`}
                  className="w-full h-auto object-contain max-h-[500px]"
                />
                {!showFullImage && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-center pb-3">
                    <span className="text-xs font-mono bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 text-slate-200 group-hover:text-[#00d2ff]">
                      Click to expand full resolution proof
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Styled credential seal when image has not been attached yet */
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden space-y-4">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#00d2ff] to-cyan-400" />

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>ISSUING AUTHORITY: {certification.issuer}</span>
                <span className="text-[#00d2ff]">COMPLETED {certification.issuedDate}</span>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Awarded To:
                </div>
                <div className="text-xl font-bold text-white">
                  Adarsh Singh Chauhan
                </div>
                <div className="text-xs text-slate-400">
                  Department of Computer Science &amp; Engineering · Barkatullah University
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                {certification.summary}
              </p>
            </div>
          )}

          {/* Curriculum breakdown */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Validated Competencies:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certification.skillsCovered.map((s, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
                  <span className="truncate">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Details Strip */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[11px]">Credential ID / Serial:</span>
              <span className="text-white font-bold text-sm tracking-wide">{certification.credentialId}</span>
            </div>

            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] px-3.5 py-2 rounded-lg transition-colors self-start sm:self-auto cursor-pointer"
              >
                <span>Verify on {certification.issuer}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyId}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-300 bg-slate-950 border border-slate-800 hover:border-[#00d2ff] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">ID Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Copy Credential ID</span>
                </>
              )}
            </button>
          </div>

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
