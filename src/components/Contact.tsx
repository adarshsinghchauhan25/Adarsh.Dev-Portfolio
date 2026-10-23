import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-18">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Details */}
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Feel free to reach out via email or phone for internships, student collaborations, and professional inquiries.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-[#00d2ff] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00d2ff]" />
                  <span className="font-mono">{personalInfo.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-[#00d2ff] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00d2ff]" />
                  <span className="font-mono">{personalInfo.phone}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Simple Direct Message Form */}
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Message Sent</h3>
                <p className="text-xs text-slate-300">
                  Thank you, {formData.fullName}. Your message has been received.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-sm font-bold text-white">Send a Message</h3>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00d2ff]"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00d2ff]"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#00d2ff] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
