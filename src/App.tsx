import React, { useState } from 'react';
import { ControlHUD } from './components/ControlHUD';
import { TerminalHero } from './components/TerminalHero';
import { DatabankAbout } from './components/DatabankAbout';
import { CaseFilesProjects } from './components/CaseFilesProjects';
import { DataStreamsExperience } from './components/DataStreamsExperience';
import { OpenChannelContact } from './components/OpenChannelContact';
import { CvSurgeonDrawer } from './components/CvSurgeonDrawer';
import { Heart, Brain, FolderOpen } from 'lucide-react';
import { RESTRUCTURED_CV_DATA } from './data/cvData';

export default function App() {
  const [isCvStudioOpen, setIsCvStudioOpen] = useState(false);

  const handleNavigateToSection = (sectionId: string) => {
    if (sectionId === 'top' || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans-clean relative bg-architect-grid selection:bg-[#2563eb] selection:text-white">
      
      {/* Header Navigation */}
      <ControlHUD
        onOpenCvStudio={() => setIsCvStudioOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-8 space-y-4">
        
        {/* 1. Hero Section */}
        <TerminalHero
          onOpenCvStudio={() => setIsCvStudioOpen(true)}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* 2. About & Skills Sections */}
        <DatabankAbout />

        {/* 3. Projects Section */}
        <CaseFilesProjects />

        {/* 4. Experience Section */}
        <DataStreamsExperience
          onOpenCvStudio={() => setIsCvStudioOpen(true)}
        />

        {/* 5. Contact Section */}
        <OpenChannelContact />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white text-center text-xs text-slate-500 space-y-3 relative z-10 font-mono-code shadow-inner">
        <div className="flex items-center justify-center gap-1.5 text-sm text-slate-800 font-semibold">
          <span>© 2026 Francis Blessing Osewayeme</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#2563eb] fill-[#2563eb]" /> and ☕
          </span>
        </div>

        <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <Brain className="w-3.5 h-3.5 text-[#2563eb]" />
          <span>Business Intelligence · People Analytics · Insights Strategy</span>
        </div>

        <div className="text-[11px]">
          <a
            href={RESTRUCTURED_CV_DATA.header.contact.harmonyGroveRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>View Harmony Grove BI Case Study on GitHub</span>
          </a>
        </div>
      </footer>

      {/* CV Surgeon Studio Modal */}
      <CvSurgeonDrawer
        isOpen={isCvStudioOpen}
        onClose={() => setIsCvStudioOpen(false)}
      />

    </div>
  );
}
