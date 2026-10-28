import React from 'react';
import { ArrowRight, FileText, ChevronDown, LineChart, Rocket } from 'lucide-react';
import { MadButton } from './MadButton';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';

interface TerminalHeroProps {
  onOpenCvStudio: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenDeployModal?: () => void;
}

export const TerminalHero: React.FC<TerminalHeroProps> = ({
  onOpenCvStudio,
  onNavigateToSection,
  onOpenDeployModal
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 max-w-7xl mx-auto bg-architect-grid">
      
      {/* 2-Column Hero Grid: Content + Profile Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Left Column: 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563eb] text-xs font-bold uppercase tracking-widest shadow-xs">
            <LineChart className="w-3.5 h-3.5" />
            <span>BI Intelligence · People Analytics</span>
          </div>

          {/* Huge Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading-bold font-black tracking-tight text-slate-900 leading-[1.05]">
            Francis Blessing <br />
            <span className="text-[#2563eb]">Osewayeme</span>
          </h1>

          {/* Static Professional Subtitle */}
          <div className="text-xl sm:text-2xl font-mono-code text-slate-800 font-bold tracking-tight">
            Data Analyst <span className="text-[#2563eb]">&bull;</span> Business Intelligence Analyst <span className="text-[#2563eb]">&bull;</span> People Analyst
          </div>

          {/* Hero Bio Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            BI & People Analyst combining quantitative data modeling with sociological insight and HR metrics. Proven track record in engineering multi-state booking intelligence systems, reducing data errors by 40%, and building executive Power BI dashboards with expertise in <strong className="text-slate-900 font-bold">Power BI, SQL, Python, Excel, and AI-assisted workflows</strong>.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <MadButton
              id="hero-view-work-btn"
              variant="primary"
              onClick={() => onNavigateToSection('projects')}
            >
              VIEW WORK
            </MadButton>

            <a
              id="hero-github-btn"
              href={RESTRUCTURED_CV_DATA.header.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mad-btn-base mad-btn-outline group"
            >
              <span>GITHUB</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </a>

            <a
              id="hero-linkedin-btn"
              href={RESTRUCTURED_CV_DATA.header.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mad-btn-base mad-btn-ghost group"
            >
              <span>LINKEDIN</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Quick CV and Deploy Triggers */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-code font-bold">
            <button
              onClick={onOpenCvStudio}
              className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive Resume / CV Studio →</span>
            </button>

            {onOpenDeployModal && (
              <>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <button
                  onClick={onOpenDeployModal}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <Rocket className="w-3.5 h-3.5 text-blue-500" />
                  <span>Publish to Vercel Guide →</span>
                </button>
              </>
            )}
          </div>

        </div>

        {/* Right Column: 5 cols (Profile Picture with border glow) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group max-w-[360px] w-full">
            {/* Glow backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-md opacity-25 group-hover:opacity-45 transition duration-500" />
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-[#2563eb] transition duration-300 shadow-xl bg-white">
              <img
                src={RESTRUCTURED_CV_DATA.header.profileImage}
                alt="Francis Blessing Osewayeme"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-4">
                <div className="text-xs font-mono-code text-blue-300 font-bold">FRANCIS BLESSING OSEWAYEME</div>
                <div className="text-[11px] text-slate-300">BI & People Analyst · Nigeria</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Smooth Scroll Indicator */}
      <div 
        onClick={() => onNavigateToSection('about')}
        className="pt-8 flex flex-col items-center justify-center cursor-pointer group text-slate-500 hover:text-[#2563eb] transition-colors"
      >
        <span className="text-xs font-mono-code tracking-widest uppercase mb-1 font-semibold">SCROLL DOWN</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#2563eb]" />
      </div>

    </section>
  );
};
