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
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a3a5c]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div
          onClick={() => handleNav('top')}
          className="flex items-center cursor-pointer group"
          id="nav-logo-btn"
        >
          <span className="font-heading-bold font-extrabold text-2xl tracking-tight text-white group-hover:text-white transition-colors">
            Francis<span className="text-[#2a7de1] text-3xl font-black inline-block transition-transform duration-300 group-hover:scale-125">.</span>
          </span>
          <span className="ml-3 text-xs font-mono-code text-[#94a3b8] hidden sm:inline-block border-l border-[#1a3a5c] pl-3 py-0.5">
            BI & PEOPLE ANALYST
          </span>
        </div>

        {/* Minimalist Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-[#e8edf3]">
          <button
            id="nav-link-about"
            onClick={() => handleNav('about')}
            className="nav-link-underline text-[#a0aec0] hover:text-white transition-colors cursor-pointer py-1"
          >
            About
          </button>
          <button
            id="nav-link-skills"
            onClick={() => handleNav('skills')}
            className="nav-link-underline text-[#a0aec0] hover:text-white transition-colors cursor-pointer py-1"
          >
            Skills
          </button>
          <button
            id="nav-link-projects"
            onClick={() => handleNav('projects')}
            className="nav-link-underline text-[#a0aec0] hover:text-white transition-colors cursor-pointer py-1"
          >
            Projects
          </button>
          <button
            id="nav-link-experience"
            onClick={() => handleNav('experience')}
            className="nav-link-underline text-[#a0aec0] hover:text-white transition-colors cursor-pointer py-1"
          >
            Experience
          </button>
          <button
            id="nav-link-contact"
            onClick={() => handleNav('contact')}
            className="nav-link-underline text-[#a0aec0] hover:text-white transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Action button & Hamburger */}
        <div className="flex items-center space-x-3">
          <button
            id="header-cv-surgeon-btn"
            onClick={onOpenCvStudio}
            className="px-3.5 py-2 rounded-lg bg-[#111827] border border-[#2a7de1]/40 text-[#e8edf3] hover:border-[#2a7de1] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm group hover:scale-105"
          >
            <FileText className="w-4 h-4 text-[#2a7de1] group-hover:scale-110 transition-transform" />
            <span>VIEW RESUME / CV</span>
          </button>

          {/* Hamburger toggle for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#2a7de1] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a3a5c] px-6 py-4 flex flex-col space-y-3 font-medium text-sm">
          <button
            onClick={() => handleNav('about')}
            className="text-left text-[#a0aec0] hover:text-white py-1"
          >
            About
          </button>
          <button
            onClick={() => handleNav('skills')}
            className="text-left text-[#a0aec0] hover:text-white py-1"
          >
            Skills
          </button>
          <button
            onClick={() => handleNav('projects')}
            className="text-left text-[#a0aec0] hover:text-white py-1"
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('experience')}
            className="text-left text-[#a0aec0] hover:text-white py-1"
          >
            Experience
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="text-left text-[#a0aec0] hover:text-white py-1"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
