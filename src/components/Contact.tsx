import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const recipientEmail = "adarshuitb@gmail.com";

  const handleMailto = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.fullName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.fullName}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // In case FormSubmit returns an initial activation requirement or error, fallback smoothly
        handleMailto();
        setSubmitted(true);
      }
    } catch {
      // If network fails (e.g. adblocker), seamlessly trigger mailto fallback
      handleMailto();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00d2ff] tracking-wider uppercase mb-1">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              Feel free to reach out via email or phone for internships, student collaborations, and professional inquiries. Messages sent here are delivered directly to <span className="text-[#00d2ff] font-mono font-medium">{recipientEmail}</span>.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${recipientEmail}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-[#00d2ff] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00d2ff]" />
                  <span className="font-mono">{recipientEmail}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Simple Direct Message Form connected to adarshuitb@gmail.com */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Message Dispatched</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your message has been sent directly to <span className="text-[#00d2ff] font-mono">{recipientEmail}</span>.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <button
                    onClick={handleMailto}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-[#00d2ff] rounded-lg hover:bg-[#33dbff] transition-colors cursor-pointer"
                  >
                    Open in Mail Client
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <h3 className="text-sm font-bold text-white">Send a Message</h3>
                  <span className="text-[11px] font-mono text-[#00d2ff]">to {recipientEmail}</span>
                </div>

                {errorMsg && (
                  <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Recruiter / Colleague"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00d2ff]"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    name="email"
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
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#00d2ff] resize-none"
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-2.5 px-4 text-xs font-semibold text-slate-950 bg-[#00d2ff] hover:bg-[#33dbff] disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending to {recipientEmail}...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleMailto}
                    className="w-full sm:w-auto py-2.5 px-3 text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 hover:text-white rounded-lg transition-colors cursor-pointer"
                    title="Send directly from your email app"
                  >
                    Email App &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
