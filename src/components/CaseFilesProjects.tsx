import React, { useState } from 'react';
import { ExternalLink, X, CheckCircle, Sparkles, FolderGit2, ArrowRight, Database, LayoutDashboard, Code, Terminal, Copy, Check, TrendingUp, Layers } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<Record<string, 'dashboard' | 'sql' | 'dax' | 'insights'>>({
    'harmony-grove': 'dashboard',
    'ecommerce': 'dashboard',
    'realestate': 'dashboard'
  });
  const [copiedQueryId, setCopiedQueryId] = useState<string | null>(null);

  const handleCopyCode = (projectId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedQueryId(projectId);
    setTimeout(() => setCopiedQueryId(null), 2000);
  };

  const setTabForProject = (projectId: string, tab: 'dashboard' | 'sql' | 'dax' | 'insights') => {
    setActiveTab(prev => ({ ...prev, [projectId]: tab }));
  };

  // Render chart helper
  const renderChart = (project: CVProject, height = 'h-52') => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#475569',
            font: { family: 'Inter', size: 11 }
          }
        }
      },
      scales: project.chartType !== 'doughnut' && project.chartType !== 'radar' ? {
        x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(148, 163, 184, 0.15)' } },
        y: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(148, 163, 184, 0.15)' } }
      } : undefined
    };

    return (
      <div className={`w-full ${height} p-2`}>
        {project.chartType === 'line' && <Line data={project.chartData} options={options} />}
        {project.chartType === 'bar' && <Bar data={project.chartData} options={options} />}
        {project.chartType === 'doughnut' && <Doughnut data={project.chartData} options={options} />}
        {project.chartType === 'radar' && <Radar data={project.chartData} options={options} />}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="text-xs font-mono-code font-bold uppercase tracking-[3px] text-[#2563eb] block">
          Analytics Case Files & Interactive BI Suites
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading-bold font-extrabold text-slate-900">
          Featured <span className="text-[#2563eb]">BI Projects & SQL Queries</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
          Real-world business intelligence, data modeling, SQL cleaning pipelines, and interactive executive dashboards.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {RESTRUCTURED_CV_DATA.projects.map((project) => {
          const currentTab = activeTab[project.id] || 'dashboard';

          return (
            <div
              key={project.id}
              className="minimal-card p-6 bg-white rounded-xl border border-slate-200 flex flex-col justify-between space-y-6 group hover:border-[#2563eb] transition-all duration-300 relative overflow-hidden shadow-xs"
            >
              <div className="space-y-5">
                
                {/* Project Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono-code font-bold text-[#2563eb] uppercase px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 inline-block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2563eb] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-2xl shrink-0 p-2.5 rounded-lg bg-slate-50 border border-slate-200 shadow-xs">
                    {project.icon || '📊'}
                  </span>
                </div>

                {/* Subtitle & Description */}
                <p className="text-xs font-mono-code text-slate-500">
                  {project.subtitle}
                </p>

                {/* Interactive Mode Switcher Tabs */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono-code">
                  <button
                    onClick={() => setTabForProject(project.id, 'dashboard')}
                    className={`flex-1 py-1.5 px-2 rounded flex items-center justify-center gap-1 transition-all cursor-pointer font-bold ${
                      currentTab === 'dashboard'
                        ? 'bg-[#2563eb] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <LayoutDashboard className="w-3 h-3" />
                    <span>DASHBOARD</span>
                  </button>
                  <button
                    onClick={() => setTabForProject(project.id, 'sql')}
                    className={`flex-1 py-1.5 px-2 rounded flex items-center justify-center gap-1 transition-all cursor-pointer font-bold ${
                      currentTab === 'sql'
                        ? 'bg-[#2563eb] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>SQL QUERY</span>
                  </button>
                  <button
                    onClick={() => setTabForProject(project.id, 'dax')}
                    className={`flex-1 py-1.5 px-2 rounded flex items-center justify-center gap-1 transition-all cursor-pointer font-bold ${
                      currentTab === 'dax'
                        ? 'bg-[#2563eb] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Code className="w-3 h-3" />
                    <span>DAX / KPI</span>
                  </button>
                </div>

                {/* TAB 1: VISUAL DASHBOARD PREVIEW */}
                {currentTab === 'dashboard' && (
                  <div className="space-y-3.5 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200">
                    
                    {/* Simulated Power BI Top Bar */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[10px] font-mono-code text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-slate-800 font-bold">{project.dashboardPreviewTitle || 'Executive BI View'}</span>
                      </div>
                      <span className="text-[#2563eb] font-bold">POWER BI LIVE</span>
                    </div>

                    {/* KPI Cards Row */}
                    {project.dashboardKpis && (
                      <div className="grid grid-cols-2 gap-2">
                        {project.dashboardKpis.map((kpi, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                            <div className="text-[10px] text-slate-500 truncate font-mono-code font-medium">{kpi.label}</div>
                            <div className="text-sm font-bold text-slate-900 mt-0.5">{kpi.value}</div>
                            {kpi.trend && (
                              <div className={`text-[9px] font-mono-code mt-0.5 font-semibold ${kpi.isPositive ? 'text-emerald-600' : 'text-amber-600'}`}>
                                {kpi.trend}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Visual Chart */}
                    <div className="rounded-lg bg-white border border-slate-200 overflow-hidden shadow-xs">
                      {renderChart(project, 'h-44')}
                    </div>

                  </div>
                )}

                {/* TAB 2: SQL QUERY & CODE SCREENSHOT */}
                {currentTab === 'sql' && (
                  <div className="space-y-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-sm">
                    
                    {/* Code Terminal Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] font-mono-code">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <span className="text-slate-300 ml-1.5 font-bold truncate max-w-[140px]">
                          {project.sqlQueryTitle || 'query.sql'}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(project.id, project.sqlQueryCode || '')}
                        className="text-[10px] text-blue-400 hover:text-white flex items-center gap-1 cursor-pointer font-semibold"
                      >
                        {copiedQueryId === project.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* SQL Code View */}
                    <div className="max-h-40 overflow-y-auto font-mono-code text-[10px] leading-relaxed text-slate-300 bg-slate-950 p-3 rounded border border-slate-800 select-text">
                      <pre className="whitespace-pre-wrap">{project.sqlQueryCode}</pre>
                    </div>

                    {/* Query Execution Result Table */}
                    {project.sqlQueryResult && (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[9px] font-mono-code text-slate-400">
                          <span className="text-emerald-400 font-semibold">⚡ QUERY OUTPUT PREVIEW</span>
                          <span>{project.sqlQueryResult.executionTime} &bull; {project.sqlQueryResult.rowCount}</span>
                        </div>
                        <div className="overflow-x-auto rounded border border-slate-800 bg-slate-950">
                          <table className="w-full text-[10px] font-mono-code text-left">
                            <thead className="bg-slate-800 text-slate-300 border-b border-slate-700">
                              <tr>
                                {project.sqlQueryResult.headers.map((h, i) => (
                                  <th key={i} className="px-2 py-1 font-semibold">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 bg-slate-950">
                              {project.sqlQueryResult.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-900">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-2 py-1 text-slate-200 whitespace-nowrap">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* TAB 3: DAX & MEASURES */}
                {currentTab === 'dax' && (
                  <div className="space-y-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] font-mono-code text-blue-400 font-bold">
                      <div className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" />
                        <span>DAX Business Calculation</span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(project.id, project.daxSnippet || '')}
                        className="text-[10px] text-blue-400 hover:text-white flex items-center gap-1 cursor-pointer font-semibold"
                      >
                        {copiedQueryId === project.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedQueryId === project.id ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>

                    <div className="font-mono-code text-[11px] leading-relaxed text-amber-300 bg-slate-950 p-3 rounded border border-slate-800 select-text">
                      <pre className="whitespace-pre-wrap">{project.daxSnippet}</pre>
                    </div>

                    {/* Key insights bullet */}
                    <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <div className="text-white font-semibold text-[11px]">Primary Findings:</div>
                      {project.keyInsights.slice(0, 2).map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                          <span className="text-blue-400 font-bold">›</span>
                          <span>{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold text-[#2563eb] uppercase font-mono-code border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact callout */}
                <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-xs font-semibold text-slate-800 flex items-start gap-2 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                  <span className="leading-snug">{project.impact}</span>
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1 transition-colors uppercase tracking-wider font-mono-code cursor-pointer"
                >
                  <span>EXPAND FULL SUITE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono-code text-slate-700 hover:text-[#2563eb] hover:border-blue-300 transition-all flex items-center gap-1.5 font-semibold shadow-xs"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Case Details Interactive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="minimal-card max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white border border-slate-200 p-6 sm:p-8 relative space-y-6 shadow-2xl rounded-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-mono-code text-[#2563eb] uppercase font-bold">
                [{selectedProject.category}]
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading-bold font-extrabold text-slate-900">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono-code text-slate-500">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Interactive Visual Dashboard Canvas */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-[#2563eb]" />
                  <span>{selectedProject.dashboardPreviewTitle || 'Interactive Power BI Dashboard'}</span>
                </span>
                <span className="text-[11px] font-mono-code text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                  EXECUTIVE VIEW
                </span>
              </div>

              {/* KPI Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedProject.metricsSummary.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 text-center shadow-xs">
                    <div className="text-[10px] text-slate-500 font-mono-code uppercase font-semibold">{m.label}</div>
                    <div className="text-base font-bold text-[#2563eb] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Big Chart */}
              <div className="w-full h-64 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                {renderChart(selectedProject, 'h-60')}
              </div>
            </div>

            {/* SQL Query Deep Dive */}
            {selectedProject.sqlQueryCode && (
              <div className="space-y-3 p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span>SQL Data Hygiene & Analytics Script: {selectedProject.sqlQueryTitle}</span>
                  </span>
                  <button
                    onClick={() => handleCopyCode(selectedProject.id, selectedProject.sqlQueryCode || '')}
                    className="text-xs font-mono-code text-blue-400 hover:text-white flex items-center gap-1 cursor-pointer font-bold"
                  >
                    {copiedQueryId === selectedProject.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedQueryId === selectedProject.id ? 'COPIED' : 'COPY SQL'}</span>
                  </button>
                </div>

                <div className="font-mono-code text-xs leading-relaxed text-slate-300 bg-slate-950 p-3.5 rounded-lg border border-slate-800 select-text max-h-56 overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{selectedProject.sqlQueryCode}</pre>
                </div>

                {selectedProject.sqlQueryResult && (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                      <span className="text-emerald-400 font-semibold">⚡ QUERY OUTPUT / RESULT DATASET</span>
                      <span>{selectedProject.sqlQueryResult.executionTime} &bull; {selectedProject.sqlQueryResult.rowCount}</span>
                    </div>
                    <div className="overflow-x-auto rounded border border-slate-800 bg-slate-950">
                      <table className="w-full text-xs font-mono-code text-left">
                        <thead className="bg-slate-800 text-slate-300 border-b border-slate-700">
                          <tr>
                            {selectedProject.sqlQueryResult.headers.map((h, i) => (
                              <th key={i} className="px-3 py-1.5 font-semibold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-950">
                          {selectedProject.sqlQueryResult.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-900">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-3 py-1.5 text-slate-200 whitespace-nowrap">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Strategic Key Insights */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2563eb]" /> Strategic Business & People Insights
              </h4>
              <div className="space-y-2">
                {selectedProject.keyInsights.map((insight, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
                    <span className="text-[#2563eb] font-bold">›</span>
                    <span className="leading-relaxed">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono-code text-[#2563eb] font-bold">
                IMPACT: {selectedProject.impact}
              </span>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#2563eb] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors flex items-center gap-2 shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" /> VIEW COMPLETE CODE ON GITHUB
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

