import React, { useState } from 'react';
import { ExternalLink, X, CheckCircle, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { RESTRUCTURED_CV_DATA, CVProject } from '../data/cvData';
import { MadButton } from './MadButton';

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

export const CaseFilesProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CVProject | null>(null);

  // Render chart helper
  const renderChart = (project: CVProject) => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#94a3b8',
            font: { family: 'Inter', size: 11 }
          }
        }
      },
      scales: project.chartType !== 'doughnut' && project.chartType !== 'radar' ? {
        x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
      } : undefined
    };

    if (project.chartType === 'line') return <Line data={project.chartData} options={options} />;
    if (project.chartType === 'bar') return <Bar data={project.chartData} options={options} />;
    if (project.chartType === 'doughnut') return <Doughnut data={project.chartData} options={options} />;
    if (project.chartType === 'radar') return <Radar data={project.chartData} options={options} />;

    return null;
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-[#1a3a5c]/40">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2a7de1] block">
          Case Files
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-[#e8edf3]">
          Featured <span className="text-[#2a7de1]">Projects</span>
        </h2>
        <p className="text-base sm:text-lg text-[#a0aec0] max-w-2xl">
          Real-world BI and people analytics challenges I have solved.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESTRUCTURED_CV_DATA.projects.map((project) => (
          <div
            key={project.id}
            className="minimal-card p-6 sm:p-8 bg-[#111827] rounded-xl border border-[#1a3a5c] flex flex-col justify-between space-y-6 group hover:border-[#2a7de1] transition-all duration-300 relative overflow-hidden"
          >
            <div className="space-y-4">
              
              {/* Project Icon & Category */}
              <div className="flex items-center justify-between">
                <span className="text-2xl">{project.icon || '📊'}</span>
                <span className="text-[11px] font-mono-code font-bold text-[#2a7de1] uppercase px-2.5 py-1 rounded bg-[#2a7de1]/10 border border-[#2a7de1]/20">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#e8edf3] group-hover:text-[#2a7de1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono-code text-[#a0aec0] mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tools.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-[#1a2a3a] text-[11px] font-semibold text-[#2a7de1] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-[#a0aec0] leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights / Callout */}
              {project.id === 'harmony-grove' && (
                <div className="p-3 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] text-xs text-[#a0aec0] space-y-1">
                  <div className="text-[#e8edf3] font-semibold">🔴 Tutors in 3.0-3.49 band leave at <span className="text-[#2a7de1]">5x rate</span></div>
                  <div>📊 Corporate utilization <span className="text-white font-semibold">48%</span> &bull; 🏆 Word of Mouth outperforms paid by <span className="text-white font-semibold">76%</span></div>
                </div>
              )}

              {/* Impact Badge */}
              <div className="p-3 rounded-lg bg-[#2a7de1]/10 border border-[#2a7de1]/30 text-xs font-medium text-[#e8edf3] flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#2a7de1] shrink-0 mt-0.5" />
                <span>{project.impact}</span>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#1a3a5c] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-bold text-[#2a7de1] hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider font-mono-code"
              >
                <span>EXPLORE CASE DATA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded bg-[#0a0a0a] border border-[#1a3a5c] text-xs font-mono-code text-[#a0aec0] hover:text-white hover:border-[#2a7de1] transition-all flex items-center gap-1.5"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-[#2a7de1]" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Case Details Interactive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="minimal-card max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-[#111827] border border-[#2a7de1]/60 p-6 sm:p-8 relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] text-[#a0aec0] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-mono-code text-[#2a7de1] uppercase font-bold">
                [{selectedProject.category}]
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading-bold font-extrabold text-[#e8edf3]">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono-code text-[#a0aec0]">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Interactive Chart */}
            <div className="w-full h-64 p-4 rounded-xl bg-[#0a0a0a] border border-[#1a3a5c]">
              {renderChart(selectedProject)}
            </div>

            {/* Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedProject.metricsSummary.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0a0a0a] border border-[#1a3a5c] text-center">
                  <div className="text-[11px] text-[#a0aec0] font-mono-code">{m.label}</div>
                  <div className="text-base font-bold text-[#2a7de1] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Key Findings */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#e8edf3] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2a7de1]" /> Strategic Key Insights
              </h4>
              <div className="space-y-2">
                {selectedProject.keyInsights.map((insight, idx) => (
                  <div key={idx} className="p-3 rounded bg-[#0a0a0a] border border-[#1a3a5c] text-xs text-[#a0aec0] flex items-start gap-2">
                    <span className="text-[#2a7de1] font-bold">&gt;</span>
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-[#1a3a5c] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono-code text-[#2a7de1]">
                IMPACT: {selectedProject.impact}
              </span>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#2a7de1] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#3b8cf0] transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> VIEW ON GITHUB
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
