import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface ControlHUDProps {
  onOpenCvStudio: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const ControlHUD: React.FC<ControlHUDProps> = ({
  onOpenCvStudio,
  onNavigateToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (sectionId: string) => {
    onNavigateToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div
          onClick={() => handleNav('top')}
          className="flex items-center cursor-pointer group"
          id="nav-logo-btn"
        >
          <span className="font-heading-bold font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-[#2563eb] transition-colors">
            Francis<span className="text-[#2563eb] text-3xl font-black inline-block transition-transform duration-300 group-hover:scale-125">.</span>
          </span>
          <span className="ml-3 text-xs font-mono-code text-slate-500 hidden sm:inline-block border-l border-slate-300 pl-3 py-0.5 font-bold">
            BI & PEOPLE ANALYST
          </span>
        </div>

        {/* Minimalist Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-700">
          <button
            id="nav-link-about"
            onClick={() => handleNav('about')}
            className="nav-link-underline text-slate-600 hover:text-[#2563eb] transition-colors cursor-pointer py-1"
          >
            About
          </button>
          <button
            id="nav-link-skills"
            onClick={() => handleNav('skills')}
            className="nav-link-underline text-slate-600 hover:text-[#2563eb] transition-colors cursor-pointer py-1"
          >
            Skills
          </button>
          <button
            id="nav-link-projects"
            onClick={() => handleNav('projects')}
            className="nav-link-underline text-slate-600 hover:text-[#2563eb] transition-colors cursor-pointer py-1"
          >
            Projects
          </button>
          <button
            id="nav-link-experience"
            onClick={() => handleNav('experience')}
            className="nav-link-underline text-slate-600 hover:text-[#2563eb] transition-colors cursor-pointer py-1"
          >
            Experience
          </button>
          <button
            id="nav-link-contact"
            onClick={() => handleNav('contact')}
            className="nav-link-underline text-slate-600 hover:text-[#2563eb] transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Action button & Hamburger */}
        <div className="flex items-center space-x-3">
          <button
            id="header-cv-surgeon-btn"
            onClick={onOpenCvStudio}
            className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm group hover:scale-105"
          >
            <FileText className="w-4 h-4 text-[#2563eb] group-hover:text-white group-hover:scale-110 transition-all" />
            <span>VIEW RESUME / CV</span>
          </button>

          {/* Hamburger toggle for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-[#2563eb] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col space-y-3 font-semibold text-sm shadow-md">
          <button
            onClick={() => handleNav('about')}
            className="text-left text-slate-600 hover:text-[#2563eb] py-1"
          >
            About
          </button>
          <button
            onClick={() => handleNav('skills')}
            className="text-left text-slate-600 hover:text-[#2563eb] py-1"
          >
            Skills
          </button>
          <button
            onClick={() => handleNav('projects')}
            className="text-left text-slate-600 hover:text-[#2563eb] py-1"
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('experience')}
            className="text-left text-slate-600 hover:text-[#2563eb] py-1"
          >
            Experience
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="text-left text-slate-600 hover:text-[#2563eb] py-1"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
