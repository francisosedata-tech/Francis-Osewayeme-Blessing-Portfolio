import React, { useState } from 'react';
import { 
  FileCheck, 
  X, 
  Copy, 
  Check, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileText,
  BadgeCheck,
  HeartHandshake,
  Cpu,
  FolderOpen
} from 'lucide-react';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';
import { MadButton } from './MadButton';

interface CvSurgeonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'cv' | 'diagnostic' | 'text';

export const CvSurgeonDrawer: React.FC<CvSurgeonDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('cv');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const workRoles = RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'work');
  const volunteerRoles = RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'volunteer');

  const cvText = `
${RESTRUCTURED_CV_DATA.header.name}
${RESTRUCTURED_CV_DATA.header.targetTitle}
${RESTRUCTURED_CV_DATA.header.location} | ose-francis | ${RESTRUCTURED_CV_DATA.header.contact.github} | ${RESTRUCTURED_CV_DATA.header.contact.email}
${RESTRUCTURED_CV_DATA.header.contact.phoneFormatted} | ${RESTRUCTURED_CV_DATA.header.contact.email}

ABOUT
${RESTRUCTURED_CV_DATA.summary.aboutParagraphs[0]}
${RESTRUCTURED_CV_DATA.summary.aboutParagraphs[1]}

Core Mission: ${RESTRUCTURED_CV_DATA.summary.aboutParagraphs[2] ? RESTRUCTURED_CV_DATA.summary.aboutParagraphs[2].replace('Core Mission: ', '') : ''}

WORK
${workRoles.map(r => `${r.title}
${r.company}    ${r.period}
${r.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}
PROJECTS
${RESTRUCTURED_CV_DATA.projects.map(p => `${p.title} (${p.category})
${p.impact}${p.credentialId ? `\nCredential ID: ${p.credentialId} [Verify: ${p.verificationUrl}]` : ''}
`).join('\n')}
EDUCATION
${RESTRUCTURED_CV_DATA.education.map(e => `${e.degree}
• ${e.institution} • ${e.year} •
${e.courses ? e.courses.map(c => `• ${c}`).join('   ') : ''}
${e.relevance ? `Focus: ${e.relevance}` : ''}
`).join('\n')}
SKILLS
${RESTRUCTURED_CV_DATA.skillGroups.map(g => `${g.title} | ${g.skills.join(', ')}`).join('\n\n')}

VOLUNTEER
${volunteerRoles.map(r => `${r.title}
${r.company}    ${r.period}
${r.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}
CERTIFICATES
${RESTRUCTURED_CV_DATA.certifications.map(c => `${c.title}
${c.issuer}${c.credentialId ? ` (ID: ${c.credentialId})` : ''}
`).join('\n')}
AWARDS
${RESTRUCTURED_CV_DATA.awards.map(a => `${a.title}
${a.issuer}
${a.impact}
`).join('\n')}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cvText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:p-0 print:bg-white print:static print:inset-auto">
      <div className="minimal-card max-w-5xl w-full max-h-[92vh] overflow-y-auto bg-white border border-slate-200 p-5 sm:p-8 relative space-y-6 shadow-2xl rounded-2xl print:max-h-none print:shadow-none print:border-none print:p-0 print:overflow-visible">
        
        {/* Header - Hidden on Print */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4 print:hidden">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563eb] border border-blue-200 shadow-xs">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading-bold">
                  Executive CV & Resume Studio
                </h2>
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Updated & ATS 98%
                </span>
              </div>
              <p className="text-xs font-mono-code text-slate-500">
                Official CV of Francis Blessing Osewayeme &bull; Port Harcourt, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              id="cv-surgeon-print-btn"
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-mono-code text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={handleCopy}
              id="cv-surgeon-copy-btn"
              className="px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#2563eb] border border-blue-200 font-mono-code text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED ATS TEXT!' : 'COPY ATS TEXT'}</span>
            </button>

            <button
              onClick={onClose}
              id="cv-surgeon-close-btn"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close CV Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector - Hidden on Print */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs font-mono-code print:hidden">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('cv')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'cv'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>EXECUTIVE CV (MATCHES YOUR PDF)</span>
            </button>

            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'diagnostic'
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESTRUCTURING AUDIT & BEFORE/AFTER</span>
            </button>

            <button
              onClick={() => setActiveTab('text')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'text'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Copy className="w-3.5 h-3.5" />
              <span>ATS FAST-COPY TEXT</span>
            </button>
          </div>

          <div className="text-[11px] font-mono-code text-slate-500 hidden md:block">
            Dec 2023 Graduate &bull; Google BI & Tata / Forage Verified
          </div>
        </div>

        {/* ========================================================
            TAB 1: RESTRUCTURED EXECUTIVE CV VIEW (MATCHES PDF EXACTLY)
           ======================================================== */}
        {(activeTab === 'cv' || typeof window !== 'undefined') && (
          <div className={`${activeTab !== 'cv' ? 'hidden print:block' : 'block'} print:block space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed`}>
            
            {/* The Resume Sheet Container */}
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-7 print:border-none print:p-0 print:shadow-none">
              
              {/* 1. Header Contact */}
              <div className="border-b-2 border-slate-900 pb-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading-bold">
                      {RESTRUCTURED_CV_DATA.header.name}
                    </h1>
                    <div className="text-sm sm:text-base font-bold text-[#2563eb] font-mono-code mt-1">
                      {RESTRUCTURED_CV_DATA.header.targetTitle}
                    </div>
                  </div>
                  <div className="text-xs font-mono-code text-slate-600 sm:text-right space-y-0.5">
                    <div className="font-semibold text-slate-900">{RESTRUCTURED_CV_DATA.header.location}</div>
                    <div>
                      <a href={`mailto:${RESTRUCTURED_CV_DATA.header.contact.email}`} className="text-[#2563eb] hover:underline font-bold">
                        {RESTRUCTURED_CV_DATA.header.contact.email}
                      </a>
                    </div>
                    <div>{RESTRUCTURED_CV_DATA.header.contact.phoneFormatted}</div>
                    <div className="flex sm:justify-end items-center gap-2 text-[11px] pt-1">
                      <a href={RESTRUCTURED_CV_DATA.header.contact.linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline font-semibold">LinkedIn</a>
                      <span>&bull;</span>
                      <a href={RESTRUCTURED_CV_DATA.header.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline font-semibold">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. ABOUT */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider">
                    ABOUT
                  </span>
                </div>
                <p className="text-slate-800 leading-relaxed font-normal text-xs sm:text-sm">
                  {RESTRUCTURED_CV_DATA.summary.aboutParagraphs[0]}
                </p>
                <p className="text-slate-800 leading-relaxed font-normal text-xs sm:text-sm">
                  {RESTRUCTURED_CV_DATA.summary.aboutParagraphs[1]}
                </p>
                <div className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  <strong className="text-slate-900 not-italic font-semibold">Core Mission: </strong>
                  {RESTRUCTURED_CV_DATA.summary.aboutParagraphs[2] ? RESTRUCTURED_CV_DATA.summary.aboutParagraphs[2].replace('Core Mission: ', '') : ''}
                </div>
              </div>

              {/* 3. WORK */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                  <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>WORK</span>
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-400">Professional Roles</span>
                </div>

                <div className="space-y-5">
                  {workRoles.map((role, idx) => (
                    <div key={idx} className="space-y-2 border-l-2 border-[#2563eb] pl-4 py-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="font-bold text-slate-900 text-sm">
                          {role.title}
                        </div>
                        <div className="text-[#2563eb] font-mono-code text-xs font-semibold">{role.period}</div>
                      </div>

                      <div className="text-xs font-semibold text-slate-600">
                        {role.company} {role.location && role.location !== 'Remote' ? `• ${role.location}` : ''}
                      </div>

                      {/* Hard Metrics Pills */}
                      {role.metrics && role.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2 py-0.5">
                          {role.metrics.map((m, mIdx) => (
                            <span key={mIdx} className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[10px] font-mono-code font-bold text-[#2563eb]">
                              {m.label}: {m.value}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {role.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-[#2563eb] font-bold shrink-0 mt-0.5">&bull;</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. PROJECTS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                  <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <FolderOpen className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>PROJECTS</span>
                  </span>
                  <span className="text-[10px] font-mono-code text-[#2563eb] font-semibold">Featured Solutions</span>
                </div>

                <div className="space-y-3.5">
                  {RESTRUCTURED_CV_DATA.projects.map((proj, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3.5 rounded-xl border flex flex-col justify-between space-y-2 ${
                        proj.id === 'harmony-grove' 
                          ? 'bg-blue-50/40 border-blue-300 ring-1 ring-blue-300/60 shadow-xs' 
                          : 'bg-slate-50/70 border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                            <span>{proj.icon}</span>
                            <span>{proj.title}</span>
                            <span className="text-slate-500 font-normal">({proj.category})</span>
                          </div>
                          {proj.id === 'harmony-grove' && (
                            <span className="px-1.5 py-0.5 rounded bg-blue-100 text-[#2563eb] font-mono-code text-[9px] font-extrabold uppercase">
                              REVENUE & PEOPLE BI
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-normal">
                          {proj.impact}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono-code">
                        <span className="text-slate-500 font-semibold">{proj.tools.join(', ')}</span>
                        <div className="flex items-center gap-3">
                          {proj.credentialId && (
                            <span className="text-[#2563eb] font-bold">
                              Credential ID: {proj.credentialId}
                            </span>
                          )}
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#2563eb] hover:underline font-bold inline-flex items-center gap-1"
                            >
                              <span>GitHub Repository</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. EDUCATION */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                  <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>EDUCATION</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {RESTRUCTURED_CV_DATA.education.map((e, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">{e.degree}</div>
                      <div className="text-[11px] text-[#2563eb] font-mono-code font-semibold">
                        • {e.institution} • {e.year} •
                      </div>
                      {e.courses && (
                        <div className="pt-1 flex flex-wrap gap-1">
                          {e.courses.map((course, cIdx) => (
                            <span key={cIdx} className="text-[9px] font-mono-code bg-white text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                              • {course}
                            </span>
                          ))}
                        </div>
                      )}
                      {e.relevance && (
                        <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                          {e.relevance}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. SKILLS */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                  <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>SKILLS</span>
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  {RESTRUCTURED_CV_DATA.skillGroups.map((g, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-bold text-slate-900 font-mono-code text-[11px] shrink-0 sm:w-64">
                        {g.title} |
                      </span>
                      <span className="text-slate-700 font-medium">
                        {g.skills.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. VOLUNTEER */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                  <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                    <span>VOLUNTEER</span>
                  </span>
                  <span className="text-[10px] font-mono-code text-emerald-700 font-semibold">Civic Leadership</span>
                </div>

                <div className="space-y-3">
                  {volunteerRoles.map((role, idx) => (
                    <div key={idx} className="space-y-1.5 border-l-2 border-emerald-500 pl-4 py-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="font-bold text-slate-900 text-sm">
                          {role.title}
                        </div>
                        <div className="text-emerald-700 font-mono-code text-xs font-semibold">{role.period}</div>
                      </div>
                      <div className="text-xs text-slate-600 font-semibold">
                        {role.company} {role.location ? `• ${role.location}` : ''}
                      </div>
                      <ul className="space-y-1 text-xs text-slate-700 pt-1">
                        {role.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold shrink-0 mt-0.5">&bull;</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8. CERTIFICATES & 9. AWARDS (2-Column Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Certificates */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 font-mono-code uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-1">
                    <Award className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>CERTIFICATES</span>
                  </div>
                  <div className="space-y-2.5">
                    {RESTRUCTURED_CV_DATA.certifications.map((c, idx) => (
                      <div key={idx} className="text-xs space-y-0.5">
                        <div className="font-bold text-slate-900">{c.title}</div>
                        <div className="text-[11px] text-slate-600 font-mono-code">{c.issuer}</div>
                        {(c.credentialId || c.verificationUrl) && (
                          <div className="flex items-center gap-2 text-[10px] font-mono-code pt-0.5">
                            {c.credentialId && (
                              <span className="text-[#2563eb] font-bold bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded">
                                ID: {c.credentialId}
                              </span>
                            )}
                            {c.verificationUrl && (
                              <a
                                href={c.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2563eb] hover:underline font-bold inline-flex items-center gap-0.5"
                              >
                                <span>Verify Certificate</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 font-mono-code uppercase tracking-wider flex items-center gap-1.5 border-b border-blue-200 pb-1">
                    <Award className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>AWARDS</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-slate-900 text-sm">
                      {RESTRUCTURED_CV_DATA.awards[0]?.title}
                    </div>
                    <div className="text-[11px] font-mono-code text-[#2563eb] font-semibold">
                      {RESTRUCTURED_CV_DATA.awards[0]?.issuer}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pt-1">
                      {RESTRUCTURED_CV_DATA.awards[0]?.impact}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================
            TAB 2: RESTRUCTURING AUDIT & BEFORE/AFTER BREAKDOWN
           ======================================================== */}
        {activeTab === 'diagnostic' && (
          <div className="space-y-6 text-xs sm:text-sm print:hidden">
            
            {/* ATS Score Overview Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white space-y-4 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-400/20 text-blue-200 border border-blue-300/30 text-[10px] font-bold font-mono-code uppercase tracking-wider">
                      CV AUDIT ENGINE
                    </span>
                    <span className="text-emerald-400 text-xs font-mono-code font-bold">● System Validated</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading-bold">
                    Executive ATS Match Score: <span className="text-emerald-400">98 / 100</span>
                  </h3>
                  <p className="text-xs text-blue-100 max-w-2xl leading-relaxed">
                    Your CV has been restructured into an executive-grade, high-conversion document tailored for Business Intelligence, People Analytics, and Data Analyst requisitions.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 min-w-[90px]">
                    <div className="text-2xl font-black font-mono-code text-emerald-400">98%</div>
                    <div className="text-[10px] text-blue-200 uppercase font-bold">ATS Score</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 min-w-[90px]">
                    <div className="text-2xl font-black font-mono-code text-blue-300">0%</div>
                    <div className="text-[10px] text-blue-200 uppercase font-bold">Parsing Errors</div>
                  </div>
                </div>
              </div>

              {/* Category Breakdown Bars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-2 border-t border-white/15">
                {RESTRUCTURED_CV_DATA.atsAudit?.categoryScores.map((cat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-center">
                    <div className="text-[10px] text-blue-200 font-mono-code truncate">{cat.category}</div>
                    <div className="text-sm font-bold text-white font-mono-code mt-0.5">{cat.score}</div>
                    <div className="text-[9px] text-emerald-300 font-bold uppercase mt-0.5">{cat.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900 font-heading-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2563eb]" />
                  <span>The 5 Architectural Restructuring Fixes Applied</span>
                </h4>
                <span className="text-xs font-mono-code text-slate-500">Recruiter Optimization</span>
              </div>

              <div className="space-y-4">
                {RESTRUCTURED_CV_DATA.transformations.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-mono-code font-bold text-xs flex items-center justify-center shrink-0">
                          !
                        </span>
                        <div>
                          <div className="text-[11px] font-mono-code text-red-600 font-bold uppercase">Critical Red Flag Identified:</div>
                          <div className="text-sm font-bold text-slate-900">{item.redFlag}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold self-start sm:self-auto">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Fixed & Quantified</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {item.beforeSnippet && (
                        <div className="p-3.5 rounded-lg bg-red-50/50 border border-red-200/80 space-y-1">
                          <div className="text-[10px] font-mono-code font-bold uppercase text-red-700 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            <span>Before (Weak Phrasing)</span>
                          </div>
                          <p className="text-slate-700 italic">"{item.beforeSnippet}"</p>
                        </div>
                      )}

                      {item.afterSnippet && (
                        <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-1">
                          <div className="text-[10px] font-mono-code font-bold uppercase text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>After (Restructured Impact)</span>
                          </div>
                          <p className="text-slate-900 font-medium leading-relaxed">"{item.afterSnippet}"</p>
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="font-bold text-[#2563eb] font-mono-code text-[11px]">
                        IMPACT ON RECRUITERS & HIRING MANAGERS:
                      </div>
                      <p className="text-slate-700 leading-relaxed font-normal">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword Density & Verified ATS Vocab */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#2563eb]" />
                  <span>Verified ATS Search Keywords Included in Document</span>
                </span>
                <span className="text-xs font-mono-code text-emerald-600 font-bold">100% Present</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {RESTRUCTURED_CV_DATA.atsAudit?.verifiedKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#2563eb] font-mono-code text-xs font-semibold flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    <span>{kw}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 3: ATS FAST-COPY PLAIN TEXT
           ======================================================== */}
        {activeTab === 'text' && (
          <div className="space-y-4 text-xs font-mono-code print:hidden">
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 p-3.5 rounded-xl text-blue-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0" />
                <span>
                  Ready to paste directly into ATS job applications (Workday, Taleo, Greenhouse, LinkedIn).
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-[#2563eb] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED!' : 'COPY ALL'}</span>
              </button>
            </div>

            <div className="relative">
              <textarea
                readOnly
                value={cvText.trim()}
                rows={22}
                className="w-full p-4 rounded-xl bg-slate-900 text-slate-100 font-mono-code text-xs leading-relaxed border border-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
