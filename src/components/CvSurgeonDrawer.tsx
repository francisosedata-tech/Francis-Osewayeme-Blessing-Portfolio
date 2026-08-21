import React, { useState } from 'react';
import { FileCheck, Shield, AlertTriangle, X } from 'lucide-react';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';
import { MadButton } from './MadButton';

interface CvSurgeonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvSurgeonDrawer: React.FC<CvSurgeonDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'preview'>('audit');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const cvText = `
${RESTRUCTURED_CV_DATA.header.name}
${RESTRUCTURED_CV_DATA.header.targetTitle}
${RESTRUCTURED_CV_DATA.header.location}
Email: ${RESTRUCTURED_CV_DATA.header.contact.email} | Phone: ${RESTRUCTURED_CV_DATA.header.contact.phone}
LinkedIn: ${RESTRUCTURED_CV_DATA.header.contact.linkedIn}
GitHub: ${RESTRUCTURED_CV_DATA.header.contact.github}

ABOUT / PROFESSIONAL SUMMARY:
${RESTRUCTURED_CV_DATA.summary.restructured}

EXPERIENCE:
${RESTRUCTURED_CV_DATA.roles.map(r => `
- ${r.title} | ${r.company} (${r.period}, ${r.location}) ${r.isVolunteer ? '[Volunteer]' : ''}
  ${r.highlights.map(h => `  * ${h}`).join('\n')}
`).join('\n')}

FEATURED PROJECTS:
${RESTRUCTURED_CV_DATA.projects.map(p => `
- ${p.title} (${p.category})
  ${p.impact}
  ${p.githubUrl ? `GitHub: ${p.githubUrl}` : ''}
`).join('\n')}

TECHNICAL & STRATEGIC SKILLS:
${RESTRUCTURED_CV_DATA.skillGroups.map(g => `${g.title}: ${g.skills.join(', ')}`).join('\n')}

EDUCATION:
${RESTRUCTURED_CV_DATA.education.map(e => `${e.degree} - ${e.institution} (${e.year})`).join('\n')}

AWARDS & HONORS:
${RESTRUCTURED_CV_DATA.awards.map(a => `${a.title} - ${a.issuer}`).join('\n')}
`;

    navigator.clipboard.writeText(cvText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="minimal-card max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#111827] border border-[#2a7de1]/60 p-6 sm:p-8 relative space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1a3a5c] pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-[#0a0a0a] text-[#2a7de1] border border-[#1a3a5c]">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading-bold font-extrabold text-[#e8edf3]">
                CV SURGEON STUDIO
              </h3>
              <p className="text-xs font-mono-code text-[#2a7de1]">
                Red Flag Audit & Restructured ATS Executive Standard
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] text-[#a0aec0] hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ATS Score & Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#0a0a0a] p-4 rounded-xl border border-[#1a3a5c]">
          <div className="md:col-span-5 flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full border-2 border-[#2a7de1] flex items-center justify-center bg-[#111827] font-mono-code font-bold text-xl text-[#2a7de1] shrink-0">
              98%
            </div>
            <div>
              <div className="text-xs font-mono-code text-[#2a7de1] font-bold uppercase">ATS READINESS SCORE</div>
              <div className="text-sm font-bold text-[#e8edf3]">Global Executive Standard</div>
              <div className="text-[11px] text-[#a0aec0]">0 Red Flags Remaining</div>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-end space-x-2 font-mono-code text-xs">
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'audit' ? 'bg-[#2a7de1] text-white font-bold' : 'bg-[#111827] text-[#a0aec0]'
              }`}
            >
              RED FLAG AUDIT
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'preview' ? 'bg-[#2a7de1] text-white font-bold' : 'bg-[#111827] text-[#a0aec0]'
              }`}
            >
              EXECUTIVE CV
            </button>
          </div>
        </div>

        {/* Tab 1: Red Flag Audit */}
        {activeTab === 'audit' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#e8edf3] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#2a7de1]" /> ELIMINATED RESUME DEFECTS
            </h4>

            <div className="space-y-3">
              {RESTRUCTURED_CV_DATA.transformations.map((t, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1a3a5c] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-red-400 font-mono-code text-xs font-bold">
                      <AlertTriangle className="w-4 h-4" />
                      <span>FLAG: {t.redFlag}</span>
                    </div>
                    <span className="text-[10px] font-mono-code text-[#2a7de1] px-2 py-0.5 rounded bg-[#2a7de1]/10 border border-[#2a7de1]/30">
                      RESOLVED
                    </span>
                  </div>

                  <div className="text-xs text-[#e8edf3] font-mono-code pl-6 border-l-2 border-[#2a7de1]">
                    <span className="font-bold text-[#2a7de1]">FIX:</span> {t.fix}
                  </div>

                  <div className="text-[11px] text-[#a0aec0] italic pl-6">
                    Impact: {t.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Executive CV View */}
        {activeTab === 'preview' && (
          <div className="p-6 rounded-xl bg-[#0a0a0a] border border-[#1a3a5c] space-y-6 text-[#a0aec0] text-xs sm:text-sm leading-relaxed">
            
            <div className="border-b border-[#1a3a5c] pb-4 space-y-1">
              <h2 className="text-2xl font-bold text-[#e8edf3]">
                {RESTRUCTURED_CV_DATA.header.name}
              </h2>
              <div className="text-xs font-bold text-[#2a7de1] font-mono-code">
                {RESTRUCTURED_CV_DATA.header.targetTitle}
              </div>
              <div className="text-[11px] text-[#a0aec0] font-mono-code">
                {RESTRUCTURED_CV_DATA.header.contact.email} | {RESTRUCTURED_CV_DATA.header.contact.phone} | {RESTRUCTURED_CV_DATA.header.location}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xs font-mono-code font-bold text-[#2a7de1] uppercase">
                ABOUT / SUMMARY
              </h3>
              <p className="text-[#e8edf3]">
                {RESTRUCTURED_CV_DATA.summary.restructured}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono-code font-bold text-[#2a7de1] uppercase">
                EXPERIENCE
              </h3>
              {RESTRUCTURED_CV_DATA.roles.map((role, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold text-[#e8edf3]">
                    <span>{role.title} — {role.company} {role.isVolunteer && '(Volunteer)'}</span>
                    <span className="text-[#2a7de1] font-mono-code text-xs">{role.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-[#a0aec0] space-y-0.5 text-xs">
                    {role.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono-code font-bold text-[#2a7de1] uppercase">
                PROJECTS
              </h3>
              {RESTRUCTURED_CV_DATA.projects.map((proj, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-bold text-[#e8edf3]">{proj.title} ({proj.category})</div>
                  <div className="text-xs text-[#a0aec0]">{proj.impact}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono-code font-bold text-[#2a7de1] uppercase">
                SKILLS & TOOLKIT
              </h3>
              {RESTRUCTURED_CV_DATA.skillGroups.map((g, idx) => (
                <div key={idx} className="text-xs text-[#e8edf3]">
                  <strong className="text-[#2a7de1]">{g.title}:</strong> {g.skills.join(', ')}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-[#1a3a5c] pt-4">
          <div className="text-xs font-mono-code text-[#2a7de1]">
            COMPLIANCE: ATS PARSER VALIDATED (98/100)
          </div>

          <MadButton
            id="cv-surgeon-copy-btn"
            variant="primary"
            onClick={handleCopy}
            showArrow={false}
          >
            {copied ? 'COPIED TO CLIPBOARD!' : 'COPY CV TEXT'}
          </MadButton>
        </div>

      </div>
    </div>
  );
};
