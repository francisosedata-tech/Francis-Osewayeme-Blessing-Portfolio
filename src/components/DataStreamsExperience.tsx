import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, HeartHandshake, Layers, Sparkles } from 'lucide-react';
import { RESTRUCTURED_CV_DATA, CVRole } from '../data/cvData';
import { MadButton } from './MadButton';

interface DataStreamsExperienceProps {
  onOpenCvStudio?: () => void;
}

type ViewMode = 'separated' | 'work' | 'internships' | 'volunteer';

export const DataStreamsExperience: React.FC<DataStreamsExperienceProps> = ({ onOpenCvStudio }) => {
  const [activeView, setActiveView] = useState<ViewMode>('separated');

  const workRoles = RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'work');
  const internshipRoles = RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'internship');
  const volunteerRoles = RESTRUCTURED_CV_DATA.roles.filter(r => r.roleType === 'volunteer');

  const renderRoleCard = (role: CVRole, isInternship = false) => {
    return (
      <div key={role.id} className="relative group">
        {/* Timeline Marker */}
        <div
          className={`absolute -left-[31px] sm:-left-[39px] top-3 w-3.5 h-3.5 rounded-full border-2 group-hover:scale-125 transition-all duration-300 ${
            isInternship
              ? 'bg-white border-amber-500 group-hover:bg-amber-500'
              : role.roleType === 'volunteer'
              ? 'bg-white border-emerald-500 group-hover:bg-emerald-500'
              : 'bg-white border-[#2563eb] group-hover:bg-[#2563eb]'
          }`}
        />

        <div className={`p-6 sm:p-7 rounded-2xl border transition-all shadow-xs ${
          isInternship 
            ? 'bg-amber-50/30 border-amber-200/80 hover:border-amber-400' 
            : 'bg-white border-slate-200 hover:border-[#2563eb]'
        } space-y-4`}>
          
          {/* Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 pb-3">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {role.title}
                </h3>
                <span className="text-[#2563eb] font-bold text-sm">
                  · {role.company}
                </span>
                {isInternship ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-extrabold uppercase tracking-wider border border-amber-300 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" />
                    <span>Internship</span>
                  </span>
                ) : role.roleType === 'volunteer' || role.isVolunteer ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200 flex items-center gap-1">
                    <HeartHandshake className="w-3 h-3" />
                    <span>Volunteer</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563eb] text-[10px] font-bold uppercase tracking-wider border border-blue-200 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    <span>Work Experience</span>
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs font-mono-code text-slate-500 space-y-0.5 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5 text-[#2563eb] font-semibold">
                <Calendar className="w-3 h-3" />
                <span>{role.period}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{role.location}</span>
              </div>
            </div>
          </div>

          {/* Metrics Badges if present */}
          {role.metrics && role.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 py-1">
              {role.metrics.map((m, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white border border-slate-200 text-center shadow-2xs">
                  <div className="text-[10px] text-slate-500 font-mono-code font-medium">{m.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-[#2563eb]">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Highlights List */}
          <ul className="space-y-2 pt-1 text-sm text-slate-600 leading-relaxed">
            {role.highlights.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className={`font-bold shrink-0 mt-0.5 ${isInternship ? 'text-amber-600' : 'text-[#2563eb]'}`}>▹</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {role.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono-code text-slate-700 font-semibold shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header with Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2563eb] block">
            Career Timeline & Practical Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-slate-900">
            Work Experience & <span className="text-[#2563eb]">Internships</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
            Clearly segregated records across professional data roles, hands-on internships, and social impact leadership.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-slate-100 border border-slate-200 font-mono-code text-xs">
          <button
            onClick={() => setActiveView('separated')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1.5 ${
              activeView === 'separated'
                ? 'bg-[#2563eb] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SEPARATED VIEW ({RESTRUCTURED_CV_DATA.roles.length})</span>
          </button>
          
          <button
            onClick={() => setActiveView('work')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1.5 ${
              activeView === 'work'
                ? 'bg-[#2563eb] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE ({workRoles.length})</span>
          </button>

          <button
            onClick={() => setActiveView('internships')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1.5 ${
              activeView === 'internships'
                ? 'bg-amber-500 text-white font-extrabold shadow-xs'
                : 'text-slate-600 hover:text-amber-800 hover:bg-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>INTERNSHIPS ({internshipRoles.length})</span>
          </button>

          <button
            onClick={() => setActiveView('volunteer')}
            className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1.5 ${
              activeView === 'volunteer'
                ? 'bg-emerald-600 text-white font-extrabold shadow-xs'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-white'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>VOLUNTEER ({volunteerRoles.length})</span>
          </button>
        </div>
      </div>

      {/* SEPARATED VIEW (Default): Two Distinct Places */}
      {activeView === 'separated' && (
        <div className="space-y-16">
          
          {/* PLACE 1: WORK EXPERIENCE */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Professional Work Experience
                  </h3>
                  <p className="text-xs font-mono-code text-slate-500">
                    Industry roles, operational analytics, and independent data projects
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono-code font-bold px-3 py-1 rounded-full bg-blue-50 text-[#2563eb] border border-blue-200 self-start sm:self-auto">
                {workRoles.length} POSITIONS
              </span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8 max-w-4xl">
              {workRoles.map(role => renderRoleCard(role, false))}
            </div>
          </div>

          {/* PLACE 2: INTERNSHIPS (DEDICATED SEPARATE SECTION) */}
          <div className="bg-gradient-to-b from-amber-50/40 to-white rounded-2xl border-2 border-amber-200 p-6 sm:p-8 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Data & BI Internships
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-extrabold bg-amber-500 text-white uppercase">
                      Dedicated Track
                    </span>
                  </div>
                  <p className="text-xs font-mono-code text-slate-500">
                    Structured hands-on innovation programs, dashboard engineering, and client deliverables
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono-code font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 self-start sm:self-auto">
                {internshipRoles.length} INTERNSHIPS
              </span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-300 space-y-8 max-w-4xl">
              {internshipRoles.map(role => renderRoleCard(role, true))}
            </div>
          </div>

          {/* PLACE 3: VOLUNTEER & COMMUNITY LEADERSHIP */}
          {volunteerRoles.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Community & Social Impact Leadership
                    </h3>
                    <p className="text-xs font-mono-code text-slate-500">
                      Volunteer analytics, youth development programs, and civic impact
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                  {volunteerRoles.length} INITIATIVE
                </span>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-300 space-y-8 max-w-4xl">
                {volunteerRoles.map(role => renderRoleCard(role, false))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* FILTERED VIEW: WORK ONLY */}
      {activeView === 'work' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Professional Work Experience</h3>
              <p className="text-xs font-mono-code text-slate-500">Showing all {workRoles.length} professional work positions</p>
            </div>
          </div>
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8 max-w-4xl">
            {workRoles.map(role => renderRoleCard(role, false))}
          </div>
        </div>
      )}

      {/* FILTERED VIEW: INTERNSHIPS ONLY */}
      {activeView === 'internships' && (
        <div className="bg-gradient-to-b from-amber-50/40 to-white rounded-2xl border-2 border-amber-200 p-6 sm:p-8 shadow-xs space-y-8">
          <div className="flex items-center gap-3 border-b border-amber-200/80 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Data & BI Internships</h3>
              <p className="text-xs font-mono-code text-slate-500">Showing all {internshipRoles.length} practical internship positions</p>
            </div>
          </div>
          <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-300 space-y-8 max-w-4xl">
            {internshipRoles.map(role => renderRoleCard(role, true))}
          </div>
        </div>
      )}

      {/* FILTERED VIEW: VOLUNTEER ONLY */}
      {activeView === 'volunteer' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Volunteer & Community Work</h3>
              <p className="text-xs font-mono-code text-slate-500">Showing volunteer and civic initiatives</p>
            </div>
          </div>
          <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-300 space-y-8 max-w-4xl">
            {volunteerRoles.map(role => renderRoleCard(role, false))}
          </div>
        </div>
      )}

      {/* Bottom CV Trigger */}
      {onOpenCvStudio && (
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-slate-200">
          <div className="text-xs font-mono-code text-slate-500 font-medium">
            Total of {RESTRUCTURED_CV_DATA.roles.length} roles: {workRoles.length} Work Positions, {internshipRoles.length} Internships, {volunteerRoles.length} Volunteer
          </div>
          <MadButton
            id="exp-view-full-btn"
            variant="outline"
            onClick={onOpenCvStudio}
          >
            VIEW COMPLETE RESUME & CREDENTIALS
          </MadButton>
        </div>
      )}

    </section>
  );
};

