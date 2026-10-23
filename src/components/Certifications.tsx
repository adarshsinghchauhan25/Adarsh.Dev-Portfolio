import { CertificationItem } from '../types';
import { Award, ShieldCheck, FileBadge } from 'lucide-react';

interface CertificationsProps {
  certificationsList: CertificationItem[];
  onSelectCertification: (cert: CertificationItem) => void;
}

export default function Certifications({
  certificationsList,
  onSelectCertification
}: CertificationsProps) {
  return (
    <section id="certifications" className="py-14 sm:py-18 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Award className="w-4 h-4" />
            <span>Verified Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Clean Certifications List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertification(cert)}
              className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-[#00d2ff]/40 transition-colors cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileBadge className="w-4 h-4 text-[#00d2ff]" />
                    <span className="text-xs text-slate-400 font-mono">
                      {cert.issuedDate}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {cert.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">
                  {cert.credentialId}
                </span>
                <span className="text-xs text-[#00d2ff] font-medium">
                  {cert.proofImage ? 'View Proof Image' : 'View Details'} &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
