import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, ChevronDown, LineChart } from 'lucide-react';
import { MadButton } from './MadButton';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';

interface TerminalHeroProps {
  onOpenCvStudio: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

const TYPING_STRINGS = [
  "Business Intelligence Analyst",
  "People Analyst",
  "Insights Strategist",
  "Power BI & SQL Specialist"
];

export const TerminalHero: React.FC<TerminalHeroProps> = ({
  onOpenCvStudio,
  onNavigateToSection
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPING_STRINGS[textIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && subText.length < currentFullText.length) {
      timer = setTimeout(() => {
        setSubText(currentFullText.slice(0, subText.length + 1));
      }, 70);
    } else if (!isDeleting && subText.length === currentFullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && subText.length > 0) {
      timer = setTimeout(() => {
        setSubText(currentFullText.slice(0, subText.length - 1));
      }, 35);
    } else if (isDeleting && subText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 max-w-7xl mx-auto bg-architect-grid">
      
      {/* 2-Column Hero Grid: Content + Profile Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Left Column: 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#2a7de1]/12 border border-[#2a7de1]/30 text-[#2a7de1] text-xs font-semibold uppercase tracking-widest">
            <LineChart className="w-3.5 h-3.5" />
            <span>BI Intelligence · People Analytics</span>
          </div>

          {/* Huge Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading-bold font-black tracking-tight text-[#e8edf3] leading-[1.05]">
            Francis Blessing <br />
            <span className="text-[#2a7de1] blue-glow-text">Osewayeme</span>
          </h1>

          {/* Typing Effect Subtitle */}
          <div className="text-xl sm:text-2xl font-mono-code text-[#a0aec0] min-h-[36px] flex items-center">
            <span>{subText}</span>
            <span className="inline-block w-2.5 h-6 bg-[#2a7de1] ml-1.5 animate-pulse" />
          </div>

          {/* Hero Bio Paragraph */}
          <p className="text-base sm:text-lg text-[#a0aec0] leading-relaxed max-w-2xl font-normal">
            I transform raw data into strategic business and people intelligence. With expertise in <strong className="text-white font-semibold">Power BI, SQL, Python, and Excel</strong>, I build dashboards and insights that drive better decisions for businesses and the people within them.
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

          {/* Quick CV Download Trigger */}
          <div className="pt-2">
            <button
              onClick={onOpenCvStudio}
              className="inline-flex items-center gap-2 text-xs font-mono-code text-[#2a7de1] hover:text-white transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive Resume / CV Summary →</span>
            </button>
          </div>

        </div>

        {/* Right Column: 5 cols (Profile Picture with border glow) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group max-w-[360px] w-full">
            {/* Glow backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2a7de1] to-[#1a3a5c] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-3 border-[#1a3a5c] group-hover:border-[#2a7de1] transition duration-300 shadow-2xl bg-[#111827]">
              <img
                src={RESTRUCTURED_CV_DATA.header.profileImage}
                alt="Francis Blessing Osewayeme"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent p-4">
                <div className="text-xs font-mono-code text-[#2a7de1] font-bold">FRANCIS BLESSING OSEWAYEME</div>
                <div className="text-[11px] text-[#a0aec0]">BI & People Analyst · Nigeria</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Smooth Scroll Indicator */}
      <div 
        onClick={() => onNavigateToSection('about')}
        className="pt-8 flex flex-col items-center justify-center cursor-pointer group text-[#a0aec0] hover:text-[#2a7de1] transition-colors"
      >
        <span className="text-xs font-mono-code tracking-widest uppercase mb-1">SCROLL DOWN</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#2a7de1]" />
      </div>

    </section>
  );
};
