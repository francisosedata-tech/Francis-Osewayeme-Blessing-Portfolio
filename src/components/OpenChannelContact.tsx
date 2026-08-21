import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send, CheckCircle2, ArrowRight, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';
import { MadButton } from './MadButton';

export const OpenChannelContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESTRUCTURED_CV_DATA.header.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setErrorMsg('');
    setTransmitting(true);

    // Build mailto URI as a direct delivery mechanism
    const subject = encodeURIComponent(formData.subject.trim() || `Inquiry from ${formData.name.trim()} via Data Portfolio`);
    const body = encodeURIComponent(
      `Hi Francis,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n--- Sent from francisosedata-portfolio`
    );
    const mailtoUrl = `mailto:${RESTRUCTURED_CV_DATA.header.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);

      // Trigger celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // confetti fallback
      }

      // Open email client with message prepared
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2563eb] block">
          Open Communication Channel
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-slate-900">
          Let's <span className="text-[#2563eb]">Connect & Collaborate</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
          Available for Business Intelligence, People Analytics, Power BI consulting, and Full-time data roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column (5 Cols): Direct Reachout */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            Reach out directly for BI projects, executive dashboard development, or data analytics consultations.
          </p>

          <div className="space-y-3 font-mono-code text-xs sm:text-sm">
            
            {/* Email with 1-click copy */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${RESTRUCTURED_CV_DATA.header.contact.email}`}
                  className="text-slate-900 hover:text-[#2563eb] font-semibold transition-colors truncate"
                >
                  {RESTRUCTURED_CV_DATA.header.contact.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer shrink-0 ml-2 shadow-xs"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone & Direct WhatsApp */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+2348162572994"
                  className="text-slate-900 hover:text-[#2563eb] font-semibold transition-colors"
                >
                  +234 816 257 2994
                </a>
              </div>
              <a
                href="https://wa.me/2348162572994?text=Hi%20Francis,%20I%20reviewed%20your%20BI%20&%20Data%20Analytics%20portfolio..."
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <a
                href={RESTRUCTURED_CV_DATA.header.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-[#2563eb] font-semibold transition-colors truncate"
              >
                linkedin.com/in/ose-francis
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] shrink-0">
                <Github className="w-4 h-4" />
              </div>
              <a
                href={RESTRUCTURED_CV_DATA.header.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-[#2563eb] font-semibold transition-colors truncate"
              >
                github.com/francisosedata-tech
              </a>
            </div>

            {/* Twitter / X */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] shrink-0">
                <Twitter className="w-4 h-4" />
              </div>
              <a
                href={RESTRUCTURED_CV_DATA.header.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 hover:text-[#2563eb] font-semibold transition-colors truncate"
              >
                x.com/DataAnalystOse
              </a>
            </div>

          </div>
        </div>

        {/* Right Column (7 Cols): Contact Form */}
        <div className="lg:col-span-7">
          <div className="minimal-card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl space-y-6 shadow-xs">
            
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">MESSAGE TRANSMITTED</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-slate-900 font-bold">{formData.name}</span>! Your message has been prepared for dispatch to <span className="text-[#2563eb] font-mono-code font-bold">francisose.data@gmail.com</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${RESTRUCTURED_CV_DATA.header.contact.email}?subject=${encodeURIComponent(formData.subject || 'Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                    className="px-4 py-2.5 rounded-lg bg-[#2563eb] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LAUNCH IN EMAIL APP</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-lg bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-mono-code cursor-pointer font-semibold shadow-xs"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-mono-code font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-code font-bold text-slate-700 mb-1">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563eb] focus:bg-white text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-code font-bold text-slate-700 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563eb] focus:bg-white text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code font-bold text-slate-700 mb-1">PROJECT / INQUIRY SUBJECT</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Power BI Dashboard Project / Data Analyst Role"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563eb] focus:bg-white text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code font-bold text-slate-700 mb-1">MESSAGE *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your business intelligence requirements, dataset goals, or role opening..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50/70 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563eb] focus:bg-white text-sm transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={transmitting}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{transmitting ? 'TRANSMITTING MESSAGE...' : 'SEND MESSAGE TO FRANCIS'}</span>
                  </button>

                  <span className="text-[11px] font-mono-code text-slate-500 font-medium">
                    ⚡ Direct response within 24 hours
                  </span>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};

