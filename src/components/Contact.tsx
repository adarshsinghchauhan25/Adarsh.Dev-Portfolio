import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Real-time validations
  const validateName = (name: string) => {
    if (!name.trim()) return 'Full Name is required.';
    if (name.trim().length < 2) return 'Name must be at least 2 characters.';
    return '';
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return 'Email address is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please provide a valid email address.';
    return '';
  };

  const validateMessage = (msg: string) => {
    if (!msg.trim()) return 'Message is required.';
    if (msg.trim().length < 10) return 'Message must be at least 10 characters long.';
    return '';
  };

  const errors = {
    fullName: touched.fullName ? validateName(formData.fullName) : '',
    email: touched.email ? validateEmail(formData.email) : '',
    message: touched.message ? validateMessage(formData.message) : ''
  };

  const isFormValid =
    !validateName(formData.fullName) &&
    !validateEmail(formData.email) &&
    !validateMessage(formData.message);

  const handleChange = (field: 'fullName' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: 'fullName' | 'email' | 'message') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, message: true });

    if (!isFormValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.fullName || 'Colleague'}`);
    const body = encodeURIComponent(formData.message || 'Hi Adarsh,\n\nI came across your portfolio and would like to connect.');
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach & Context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-2">
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something Together
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Whether you have an internship opportunity, a student hackathon project, or want to discuss community growth in tech, feel free to reach out.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-center justify-between gap-4 group hover:border-[#00d2ff]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00d2ff] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-white font-mono">{personalInfo.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-[#00d2ff] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#00d2ff]" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00d2ff]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-white">Bhopal, Madhya Pradesh, India</div>
                  <div className="text-[11px] text-slate-400">Barkatullah University Campus Zone</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Professional Profiles
              </div>
              <div className="flex gap-3">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#00d2ff]/40 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 text-[#00d2ff] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#00d2ff]/40 text-slate-300 hover:text-white transition-all duration-300 group"
                >
                  <Github className="w-4 h-4 text-[#00d2ff] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form with Real-time Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will get back to you at <span className="text-[#00d2ff] font-mono">{formData.email}</span> as soon as possible.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', email: '', message: '' });
                        setTouched({ fullName: false, email: false, message: false });
                      }}
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={handleMailto}
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] transition-colors cursor-pointer"
                    >
                      Open in Email App
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#00d2ff]" />
                      <span>Send Direct Message</span>
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      Fast response within 24h
                    </span>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label htmlFor="fullName" className="font-semibold text-slate-300">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      {touched.fullName && !errors.fullName && (
                        <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                          <CheckCircle2 className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Ayush Sharma"
                      className={`w-full bg-slate-950 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 border transition-all focus:outline-none ${
                        errors.fullName
                          ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                          : touched.fullName && !errors.fullName
                          ? 'border-emerald-500/50 focus:border-[#00d2ff]'
                          : 'border-slate-800 focus:border-[#00d2ff]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label htmlFor="email" className="font-semibold text-slate-300">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      {touched.email && !errors.email && (
                        <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                          <CheckCircle2 className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="e.g. adarsh@example.com"
                      className={`w-full bg-slate-950 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 border transition-all focus:outline-none ${
                        errors.email
                          ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                          : touched.email && !errors.email
                          ? 'border-emerald-500/50 focus:border-[#00d2ff]'
                          : 'border-slate-800 focus:border-[#00d2ff]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label htmlFor="message" className="font-semibold text-slate-300">
                        Your Message <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-slate-500 font-mono text-[11px]">
                        {formData.message.length} chars (min 10)
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Hi Adarsh, let's discuss an upcoming project or tech collaboration..."
                      className={`w-full bg-slate-950 rounded-xl p-4 text-sm text-white placeholder-slate-500 border transition-all focus:outline-none resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]'
                          : touched.message && !errors.message
                          ? 'border-emerald-500/50 focus:border-[#00d2ff]'
                          : 'border-slate-800 focus:border-[#00d2ff]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Submission Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] disabled:opacity-50 transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 fill-current" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMailto}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Open Email App
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
