import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';
import { MadButton } from './MadButton';

export const OpenChannelContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1a3a5c]/40">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2a7de1] block">
          Open Channel
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-[#e8edf3]">
          Let's <span className="text-[#2a7de1]">Connect</span>
        </h2>
        <p className="text-base sm:text-lg text-[#a0aec0] max-w-2xl">
          I am always open to new BI and people analytics opportunities, collaborations, and conversations about data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column (5 Cols): Direct Reachout */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-sm text-[#a0aec0] leading-relaxed">
            Feel free to reach out—whether it is for a BI role, a people analytics project, or just to talk about data intelligence.
          </p>

          <div className="space-y-3 font-mono-code text-xs sm:text-sm">
            
            {/* Email */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a]">
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] flex items-center justify-center text-[#2a7de1] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href={`mailto:${RESTRUCTURED_CV_DATA.header.contact.email}`}
                className="text-[#e8edf3] hover:text-[#2a7de1] transition-colors truncate"
              >
                {RESTRUCTURED_CV_DATA.header.contact.email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a]">
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] flex items-center justify-center text-[#2a7de1] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <a
                href="tel:+2348162572994"
                className="text-[#e8edf3] hover:text-[#2a7de1] transition-colors"
              >
                08162572994
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a]">
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] flex items-center justify-center text-[#2a7de1] shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <a
                href={RESTRUCTURED_CV_DATA.header.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8edf3] hover:text-[#2a7de1] transition-colors truncate"
              >
                linkedin.com/in/ose-francis
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a]">
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] flex items-center justify-center text-[#2a7de1] shrink-0">
                <Github className="w-4 h-4" />
              </div>
              <a
                href={RESTRUCTURED_CV_DATA.header.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8edf3] hover:text-[#2a7de1] transition-colors truncate"
              >
                github.com/francisosedata-tech
              </a>
            </div>

            {/* Twitter / X */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a]">
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] flex items-center justify-center text-[#2a7de1] shrink-0">
                <Twitter className="w-4 h-4" />
              </div>
              <a
                href={RESTRUCTURED_CV_DATA.header.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8edf3] hover:text-[#2a7de1] transition-colors truncate"
              >
                x.com/DataAnalystOse
              </a>
            </div>

          </div>
        </div>

        {/* Right Column (7 Cols): Contact Form */}
        <div className="lg:col-span-7">
          <div className="minimal-card p-6 sm:p-8 bg-[#111827] border border-[#1a2a3a] rounded-xl space-y-6">
            
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#2a7de1] mx-auto" />
                <h3 className="text-2xl font-bold text-[#e8edf3]">MESSAGE TRANSMITTED</h3>
                <p className="text-sm text-[#a0aec0]">
                  Thank you for reaching out! Francis will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded bg-[#0a0a0a] text-[#2a7de1] border border-[#1a3a5c] text-xs font-mono-code hover:border-[#2a7de1] cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a] text-[#e8edf3] placeholder-[#6a7a8a] focus:outline-none focus:border-[#2a7de1] focus:bg-[#0a0a0a] text-sm transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a] text-[#e8edf3] placeholder-[#6a7a8a] focus:outline-none focus:border-[#2a7de1] focus:bg-[#0a0a0a] text-sm transition-all"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your BI or people analytics needs..."
                    className="w-full px-4 py-3.5 rounded-lg bg-[#111827] border border-[#1a2a3a] text-[#e8edf3] placeholder-[#6a7a8a] focus:outline-none focus:border-[#2a7de1] focus:bg-[#0a0a0a] text-sm transition-all"
                  />
                </div>

                <div className="pt-2">
                  <MadButton
                    id="contact-submit-btn"
                    type="submit"
                    variant="primary"
                    disabled={transmitting}
                    className="w-full sm:w-auto"
                  >
                    {transmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </MadButton>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
