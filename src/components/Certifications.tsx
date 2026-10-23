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
    <section id="certifications" className="py-14 sm:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Award className="w-4 h-4" />
            <span>Verified Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* 3-Column Responsive Grid on PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertification(cert)}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#00d2ff]/40 transition-colors cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800/80">
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

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">
                  {cert.credentialId}
                </span>
                <span className="text-xs text-[#00d2ff] font-medium group-hover:translate-x-0.5 transition-transform">
                  View Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
