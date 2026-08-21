import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { RESTRUCTURED_CV_DATA } from '../data/cvData';
import { MadButton } from './MadButton';

interface DataStreamsExperienceProps {
  onOpenCvStudio?: () => void;
}

export const DataStreamsExperience: React.FC<DataStreamsExperienceProps> = ({ onOpenCvStudio }) => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto bg-[#0d0d0d] rounded-2xl border border-[#1a3a5c]/40">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2a7de1] block">
          Career Timeline
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-[#e8edf3]">
          Work & <span className="text-[#2a7de1]">Volunteer</span> Experience
        </h2>
        <p className="text-base sm:text-lg text-[#a0aec0] max-w-2xl">
          Where I have applied my BI and people analytics skills.
        </p>
      </div>

      <div className="max-w-4xl space-y-12">

        {/* Minimal Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1a2a3a] space-y-10">
          {RESTRUCTURED_CV_DATA.roles.map((role) => (
            <div key={role.id} className="relative group">
              
              {/* Timeline Blue Dot Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-[#1a2a3a] border-2 border-[#2a7de1] group-hover:bg-[#2a7de1] group-hover:scale-125 transition-all duration-300" />

              <div className="minimal-card p-6 sm:p-7 bg-[#111827] rounded-xl border border-[#1a2a3a] space-y-4 group-hover:border-[#2a5a8c] transition-all">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#1a2a3a] pb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-[#e8edf3]">
                        {role.title}
                      </h3>
                      <span className="text-[#2a7de1] font-semibold text-sm">
                        · {role.company}
                      </span>
                      {role.isVolunteer && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#2a7de1]/15 text-[#2a7de1] text-[10px] font-bold uppercase tracking-wider border border-[#2a7de1]/30">
                          Volunteer
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono-code text-[#6a7a8a] space-y-0.5 sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 text-[#2a7de1]">
                      <Calendar className="w-3 h-3" />
                      <span>{role.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3 h-3 text-[#1a3a5c]" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 pt-1 text-sm text-[#a0aec0] leading-relaxed">
                  {role.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#2a7de1] font-bold shrink-0 mt-0.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {role.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-[#0a0a0a] border border-[#1a2a3a] text-[11px] font-mono-code text-[#2a7de1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Action Button at bottom */}
        {onOpenCvStudio && (
          <div className="pt-4">
            <MadButton
              id="exp-view-full-btn"
              variant="outline"
              onClick={onOpenCvStudio}
            >
              VIEW FULL EXPERIENCE & ATS AUDIT
            </MadButton>
          </div>
        )}

      </div>

    </section>
  );
};
