import React from 'react';
import { BookOpen, Award, CheckCircle2, Sparkles, Brain, Database, UserCheck, TrendingUp, Download, ExternalLink } from 'lucide-react';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';

export const DatabankAbout: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200/80">
        
        {/* Section Label & Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2563eb] block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-slate-900">
            Intelligence Meets <span className="text-[#2563eb]">People & Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            I am a Business Intelligence and People Analyst with a unique blend of sociological insight and HR expertise, bridging the gap between data, business strategy, and human behavior.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 text-base leading-relaxed">
            <p>
              I specialize in transforming complex datasets into <strong className="text-slate-900 font-bold">strategic business and people intelligence</strong> using <strong className="text-slate-900 font-bold">Power BI, SQL, Python, and Excel</strong>. My background in Sociology gives me a unique perspective on human behavior, helping me communicate insights that drive real change for both organizations and the people within them.
            </p>
            <p>
              I am passionate about leveraging data for social impact and building solutions that are both technically sound and people-centric.
            </p>
            <div className="p-5 rounded-xl bg-blue-50/80 border-l-4 border-[#2563eb] text-slate-800 space-y-1.5 shadow-xs">
              <div className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider">
                CORE MISSION
              </div>
              <p className="text-sm font-medium text-slate-700 leading-relaxed">
                To leverage data as a powerful tool for positive change — empowering organizations and communities through insightful analysis and practical recommendations.
              </p>
            </div>

            {/* Education & Certifications Capsule */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xs font-mono-code font-bold uppercase text-slate-900 tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#2563eb]" />
                Academic & Professional Pedigree
              </h3>
              
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-5">
                {RESTRUCTURED_CV_DATA.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <div className="text-sm font-bold text-slate-900">{edu.degree}</div>
                      <span className="text-[11px] text-[#2563eb] font-mono-code font-semibold">{edu.year}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {edu.institution} {edu.location ? `• ${edu.location}` : ''}
                    </div>
                    {edu.relevance && <p className="text-xs text-slate-500 leading-relaxed">{edu.relevance}</p>}
                    {edu.courses && (
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {edu.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] font-mono-code bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                          >
                            • {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Certifications Section */}
                <div className="pt-3 border-t border-slate-200 space-y-3">
                  <div className="text-xs font-mono-code font-bold text-[#2563eb] uppercase tracking-wider">
                    VERIFIED CERTIFICATIONS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {RESTRUCTURED_CV_DATA.certifications.map((cert, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 leading-tight">{cert.title}</div>
                          <div className="text-[11px] text-slate-500 font-mono-code">{cert.issuer}</div>
                          {cert.credentialId && (
                            <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                              <span className="text-[10px] font-mono-code font-bold text-[#2563eb] bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                                ID: {cert.credentialId}
                              </span>
                              {cert.verificationUrl && (
                                <a
                                  href={cert.verificationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-[#2563eb] hover:underline font-mono-code font-semibold"
                                >
                                  Verify &rarr;
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-900">JCI Southern Conference 2026:</strong> 3rd Place Winner in Public Speaking & Debate Championship.
                  </div>
                </div>

                {/* Direct Download Official CV PDF */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                  <div className="text-[11px] font-mono-code text-slate-500">
                    Latest Updated PDF Available
                  </div>
                  <a
                    href={RESTRUCTURED_CV_DATA.header.pdfAssetUrl}
                    download="Francis_Blessing_Osewayeme_CV.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-mono-code font-bold shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official CV (PDF)</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Stat Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESTRUCTURED_CV_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="minimal-card p-6 bg-white border border-slate-200 rounded-xl hover:border-[#2563eb] transition duration-300 shadow-xs"
                >
                  <div className="text-3xl sm:text-4xl font-heading-bold font-extrabold text-slate-900">
                    <span className="text-[#2563eb]">{stat.number}</span>
                  </div>
                  <div className="text-xs font-mono-code text-slate-500 font-bold uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Value Proposition Callout Card */}
            <div className="minimal-card p-6 bg-white border border-slate-200 rounded-xl space-y-4 shadow-xs">
              <h3 className="text-sm font-mono-code font-bold uppercase text-slate-900 flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#2563eb]" />
                The Behavioral BI & AI Advantage
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quantitative data indicates <em>what</em> is happening in your organization, but sociological insight explains <em>why</em>. Combining Power BI analytics with human factors and AI-assisted problem solving optimizes both bottom-line profit and organizational performance.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-mono-code text-slate-800">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                  <span className="truncate">Data Rigor</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                  <span className="truncate">People Metrics</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                  <span className="truncate">AI Workflows</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
        
        {/* Section Label & Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2563eb] block">
            My Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading-bold font-extrabold text-slate-900">
            BI, People Analytics & <span className="text-[#2563eb]">AI Stack</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Core technologies and analytical frameworks I use to turn data into business and people intelligence.
          </p>
        </div>

        {/* 3-Group Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESTRUCTURED_CV_DATA.skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="minimal-card p-6 bg-slate-50/70 border border-slate-200 rounded-xl space-y-4 shadow-none flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#2563eb] flex items-center gap-2">
                  {idx === 0 ? (
                    <Sparkles className="w-4 h-4 text-[#2563eb]" />
                  ) : idx === 1 ? (
                    <Database className="w-4 h-4 text-[#2563eb]" />
                  ) : (
                    <UserCheck className="w-4 h-4 text-[#2563eb]" />
                  )}
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-slate-700 border border-slate-200 hover:border-[#2563eb] hover:bg-blue-50 hover:text-[#2563eb] transition-all cursor-default shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
