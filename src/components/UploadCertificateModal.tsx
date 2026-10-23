import { useState, useRef } from 'react';
import { CertificationItem } from '../types';
import { X, Upload, CheckCircle2, ShieldCheck, Image, Link, FileText, AlertCircle } from 'lucide-react';

interface UploadCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCertificate: (newCert: CertificationItem) => void;
}

export default function UploadCertificateModal({
  isOpen,
  onClose,
  onAddCertificate
}: UploadCertificateModalProps) {
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issuedDate, setIssuedDate] = useState('2026');
  const [credentialId, setCredentialId] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('');
  const [skillsText, setSkillsText] = useState('');
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState<'technical' | 'management'>('technical');
  const [proofImage, setProofImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG, JPG, JPEG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be under 5MB.');
      return;
    }

    setError('');
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      setProofImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Certificate title is required.');
      return;
    }
    if (!issuer.trim()) {
      setError('Issuing authority / platform is required.');
      return;
    }

    const skills = skillsText
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const newCert: CertificationItem = {
      id: `custom-cert-${Date.now()}`,
      title: title.trim(),
      issuer: issuer.trim(),
      issuedDate: issuedDate.trim() || '2026',
      credentialId: credentialId.trim() || `VERIFIED-${Math.floor(100000 + Math.random() * 900000)}`,
      credentialUrl: credentialUrl.trim() || undefined,
      proofImage: proofImage || undefined,
      skillsCovered: skills.length > 0 ? skills : ['Verified Academic & Professional Competency'],
      summary: summary.trim() || `Official verified certificate in ${title} awarded by ${issuer}.`,
      category: category,
      verifiedBy: issuer.trim()
    };

    onAddCertificate(newCert);

    // Reset and close
    setTitle('');
    setIssuer('');
    setCredentialId('');
    setCredentialUrl('');
    setSkillsText('');
    setSummary('');
    setProofImage(null);
    setFileName(null);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00d2ff]">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Upload Certificate with Proof
              </h3>
              <p className="text-xs text-slate-400">
                Add your verified credential image, issuing platform, and proof verification link.
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="py-6 space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Certificate Proof Image Upload Box */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Certificate Proof Image / Document</span>
              <span className="text-[11px] text-slate-500 font-mono">PNG, JPG, WebP (Max 5MB)</span>
            </label>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-700 hover:border-[#00d2ff]/60 rounded-xl p-5 text-center bg-slate-950/60 hover:bg-slate-950 transition-all cursor-pointer group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {proofImage ? (
                <div className="space-y-3">
                  <div className="relative max-h-48 overflow-hidden rounded-lg border border-slate-800 max-w-sm mx-auto">
                    <img
                      src={proofImage}
                      alt="Uploaded Certificate Proof"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{fileName || 'Certificate image loaded successfully'}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Click to replace with another file
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00d2ff] mx-auto group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    Click to upload certificate proof image
                  </div>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Upload your completion certificate, score card, or verification badge.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Title & Issuer Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Certificate Title <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. NPTEL Data Structures & Algorithms"
                className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Issuing Authority / Platform <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                placeholder="e.g. NPTEL / IIT Kharagpur, Coursera, IBM"
                className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Date, Credential ID & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Issue Year / Date
              </label>
              <input
                type="text"
                value={issuedDate}
                onChange={(e) => setIssuedDate(e.target.value)}
                placeholder="e.g. 2026 or Oct 2026"
                className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Credential ID / Serial
              </label>
              <input
                type="text"
                value={credentialId}
                onChange={(e) => setCredentialId(e.target.value)}
                placeholder="e.g. NPTEL26CS88S12"
                className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as 'technical' | 'management')}
                className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white border border-slate-800 focus:border-[#00d2ff] focus:outline-none cursor-pointer"
              >
                <option value="technical">Technical</option>
                <option value="management">Leadership / Management</option>
              </select>
            </div>
          </div>

          {/* Verification URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Link className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Public Verification / Credential URL (Optional)</span>
            </label>
            <input
              type="url"
              value={credentialUrl}
              onChange={(e) => setCredentialUrl(e.target.value)}
              placeholder="https://coursera.org/verify/... or https://nptel.ac.in/..."
              className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none font-mono"
            />
          </div>

          {/* Skills validated */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Skills Validated (Comma separated)
            </label>
            <input
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              placeholder="e.g. Asymptotic Analysis, Binary Search Trees, Graph Algorithms"
              className="w-full bg-slate-950 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Brief Description / Syllabus Highlights
            </label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Details regarding coursework completed, grade/percentile achieved, or capstone project..."
              className="w-full bg-slate-950 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-500 border border-slate-800 focus:border-[#00d2ff] focus:outline-none resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] cursor-pointer flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Add Verified Certificate</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
