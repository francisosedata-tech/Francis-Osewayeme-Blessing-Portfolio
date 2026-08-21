import React, { useState } from 'react';
import { FileCheck, X, Copy, Check, Download, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';
import { MadButton } from './MadButton';

interface CvSurgeonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvSurgeonDrawer: React.FC<CvSurgeonDrawerProps> = ({ isOpen, onClose }) => {
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

PROFESSIONAL SUMMARY:
${RESTRUCTURED_CV_DATA.summary.restructured}

CORE MISSION:
${RESTRUCTURED_CV_DATA.summary.aboutParagraphs[2] || ''}

PROFESSIONAL EXPERIENCE:
${RESTRUCTURED_CV_DATA.roles.map(r => `
- ${r.title} | ${r.company} (${r.period}, ${r.location}) ${r.isVolunteer ? '[Volunteer]' : ''}
${r.highlights.map(h => `  * ${h}`).join('\n')}
`).join('\n')}

KEY PROJECTS & CASE STUDIES:
${RESTRUCTURED_CV_DATA.projects.map(p => `
- ${p.title} (${p.category})
  Impact: ${p.impact}
  ${p.githubUrl ? `Project Link: ${p.githubUrl}` : ''}
`).join('\n')}

TECHNICAL & STRATEGIC SKILLS:
${RESTRUCTURED_CV_DATA.skillGroups.map(g => `${g.title}: ${g.skills.join(', ')}`).join('\n')}

EDUCATION:
${RESTRUCTURED_CV_DATA.education.map(e => `${e.degree} - ${e.institution} (${e.year})`).join('\n')}

CERTIFICATIONS:
${RESTRUCTURED_CV_DATA.certifications.map(c => `${c.title} - ${c.issuer}`).join('\n')}

AWARDS & HONORS:
${RESTRUCTURED_CV_DATA.awards.map(a => `${a.title} - ${a.issuer}`).join('\n')}
`;

    navigator.clipboard.writeText(cvText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="minimal-card max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white border border-slate-200 p-6 sm:p-8 relative space-y-6 shadow-2xl rounded-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-[#2563eb] border border-blue-200 shadow-xs">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading-bold font-extrabold text-slate-900">
                CURRICULUM VITAE
              </h3>
              <p className="text-xs font-mono-code text-[#2563eb] font-semibold">
                Francis Blessing Osewayeme &bull; Executive Data & BI Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive CV View */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-50/90 border border-slate-200 space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed shadow-inner">
          
          {/* Header Contact */}
          <div className="border-b border-slate-200 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {RESTRUCTURED_CV_DATA.header.name}
                </h2>
                <div className="text-xs sm:text-sm font-bold text-[#2563eb] font-mono-code mt-0.5">
                  {RESTRUCTURED_CV_DATA.header.targetTitle}
                </div>
              </div>
              <div className="text-xs font-mono-code text-slate-600 sm:text-right">
                <div>{RESTRUCTURED_CV_DATA.header.location}</div>
                <div className="text-[#2563eb] font-bold">{RESTRUCTURED_CV_DATA.header.contact.email}</div>
                <div>{RESTRUCTURED_CV_DATA.header.contact.phoneFormatted}</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-slate-800 leading-relaxed font-medium">
              {RESTRUCTURED_CV_DATA.summary.restructured}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#2563eb]" />
              WORK EXPERIENCE
            </h3>
            <div className="space-y-3">
              {RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'work').map((role, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="font-bold text-slate-900 text-sm">
                      {role.title} <span className="text-[#2563eb]">&bull;</span> {role.company}
                    </div>
                    <div className="text-[#2563eb] font-mono-code text-xs font-semibold">{role.period} &bull; {role.location}</div>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {role.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#2563eb] font-bold shrink-0">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internships Section (Separated) */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-code font-bold text-amber-700 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              DATA & BI INTERNSHIPS
            </h3>
            <div className="space-y-3">
              {RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'internship').map((role, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-50/40 border border-amber-200 space-y-2 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="font-bold text-slate-900 text-sm">
                      {role.title} <span className="text-amber-700">&bull;</span> {role.company} <span className="text-[10px] text-amber-900 uppercase px-1.5 py-0.5 bg-amber-100 border border-amber-300 rounded ml-1 font-bold">Internship</span>
                    </div>
                    <div className="text-amber-800 font-mono-code text-xs font-semibold">{role.period} &bull; {role.location}</div>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {role.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold shrink-0">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Leadership */}
          {RESTRUCTURED_CV_DATA.roles.some(r => r.roleType === 'volunteer') && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                COMMUNITY & VOLUNTEER LEADERSHIP
              </h3>
              <div className="space-y-3">
                {RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'volunteer').map((role, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-200 space-y-2 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div className="font-bold text-slate-900 text-sm">
                        {role.title} <span className="text-emerald-700">&bull;</span> {role.company} <span className="text-[10px] text-emerald-800 uppercase px-1.5 py-0.5 bg-emerald-100 border border-emerald-300 rounded ml-1 font-bold">Volunteer</span>
                      </div>
                      <div className="text-emerald-700 font-mono-code text-xs font-semibold">{role.period} &bull; {role.location}</div>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {role.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider">
              FEATURED PROJECTS & BI DELIVERABLES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {RESTRUCTURED_CV_DATA.projects.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="font-bold text-slate-900 text-xs">{proj.title}</div>
                    <div className="text-[11px] font-mono-code text-[#2563eb] font-bold">{proj.category}</div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-3 leading-relaxed">{proj.impact}</p>
                  </div>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono-code text-[#2563eb] hover:text-[#1d4ed8] font-bold transition-colors inline-flex items-center gap-1 mt-2"
                    >
                      <span>View GitHub Documentation</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider">
              CORE COMPETENCIES & TECHNICAL TOOLKIT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESTRUCTURED_CV_DATA.skillGroups.map((g, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1 shadow-xs">
                  <div className="font-bold text-[#2563eb] font-mono-code">{g.title}</div>
                  <div className="text-slate-800 font-medium">{g.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#2563eb]" />
              EDUCATION & CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <div className="text-xs font-bold text-[#2563eb] font-mono-code">ACADEMIC DEGREE</div>
                {RESTRUCTURED_CV_DATA.education.map((e, idx) => (
                  <div key={idx} className="text-xs text-slate-800">
                    <div className="font-bold">{e.degree}</div>
                    <div className="text-[11px] text-slate-500">{e.institution} ({e.year})</div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <div className="text-xs font-bold text-[#2563eb] font-mono-code">VERIFIED CERTIFICATIONS</div>
                {RESTRUCTURED_CV_DATA.certifications.map((c, idx) => (
                  <div key={idx} className="text-[11px] text-slate-600">
                    &bull; <span className="text-slate-900 font-semibold">{c.title}</span> — {c.issuer}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4">
          <div className="text-xs font-mono-code text-slate-500 font-medium">
            Francis Blessing Osewayeme &bull; Available for BI & People Analyst Roles
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono-code text-slate-800 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors flex items-center gap-1.5 cursor-pointer font-bold shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>PRINT / PDF</span>
            </button>

            <MadButton
              id="cv-surgeon-copy-btn"
              variant="primary"
              onClick={handleCopy}
              showArrow={false}
            >
              <span className="flex items-center gap-1.5">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY CV TEXT'}</span>
              </span>
            </MadButton>
          </div>
        </div>

      </div>
    </div>
  );
};

