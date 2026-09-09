import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  X, 
  CheckCircle, 
  Sparkles, 
  FolderGit2, 
  ArrowRight, 
  LayoutDashboard, 
  Code, 
  Terminal, 
  Copy, 
  Check, 
  Maximize2, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon, 
  BarChart3, 
  ZoomIn 
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { RESTRUCTURED_CV_DATA, CVProject, DashboardScreenshot } from '../data/cvData';

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

  // Active screenshot page per project (0 = page 1, 1 = page 2, etc.)
  const [activeScreenshotPage, setActiveScreenshotPage] = useState<Record<string, number>>({});
  
  // Display mode in DASHBOARD tab: 'screenshot' (real GitHub Power BI screenshot) vs 'chart' (KPIs & ChartJS)
  const [dashboardDisplayMode, setDashboardDisplayMode] = useState<Record<string, 'screenshot' | 'chart'>>({});

  // Full-screen high-res Lightbox modal
  const [lightbox, setLightbox] = useState<{
    project: CVProject;
    screenshotIndex: number;
  } | null>(null);

  // Modal's internal screenshot active index
  const [modalScreenshotIdx, setModalScreenshotIdx] = useState<number>(0);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowLeft') {
        const list = lightbox.project.dashboardScreenshots || [];
        if (list.length > 1) {
          setLightbox(prev => prev ? ({
            ...prev,
            screenshotIndex: (prev.screenshotIndex - 1 + list.length) % list.length
          }) : null);
        }
      } else if (e.key === 'ArrowRight') {
        const list = lightbox.project.dashboardScreenshots || [];
        if (list.length > 1) {
          setLightbox(prev => prev ? ({
            ...prev,
            screenshotIndex: (prev.screenshotIndex + 1) % list.length
          }) : null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const handleCopyCode = (projectId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedQueryId(projectId);
    setTimeout(() => setCopiedQueryId(null), 2000);
  };

  const setTabForProject = (projectId: string, tab: 'dashboard' | 'sql' | 'dax' | 'insights') => {
    setActiveTab(prev => ({ ...prev, [projectId]: tab }));
  };

  const handleOpenProjectModal = (project: CVProject) => {
    setSelectedProject(project);
    setModalScreenshotIdx(activeScreenshotPage[project.id] || 0);
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
          Featured <span className="text-[#2563eb]">Power BI Dashboards & SQL Queries</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
          Real-world business intelligence dashboards, GitHub-hosted Power BI report suites, SQL data hygiene models, and actionable strategy.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {RESTRUCTURED_CV_DATA.projects.map((project) => {
          const currentTab = activeTab[project.id] || 'dashboard';
          const screenshots = project.dashboardScreenshots || (
            project.primaryDashboardScreenshot
              ? [{ title: project.title, url: project.primaryDashboardScreenshot, description: project.description }]
              : []
          );
          const activeScreenshotIdx = activeScreenshotPage[project.id] || 0;
          const activeScreenshot = screenshots[activeScreenshotIdx] || screenshots[0];
          const displayMode = dashboardDisplayMode[project.id] || 'screenshot';

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

                {/* TAB 1: VISUAL DASHBOARD & SCREENSHOT PREVIEW */}
                {currentTab === 'dashboard' && (
                  <div className="space-y-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200">
                    
                    {/* Top Bar with Status & Display Mode Switch */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[10px] font-mono-code">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-slate-800 font-bold truncate">
                          {project.dashboardPreviewTitle || 'Power BI Executive Suite'}
                        </span>
                      </div>

                      {/* Switch between Real Screenshot and KPI/Chart */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => setDashboardDisplayMode(prev => ({ ...prev, [project.id]: 'screenshot' }))}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors flex items-center gap-1 ${
                            displayMode === 'screenshot'
                              ? 'bg-[#2563eb] text-white shadow-2xs'
                              : 'bg-slate-200/70 text-slate-600 hover:text-slate-900'
                          }`}
                          title="View actual Power BI dashboard screenshot from GitHub"
                        >
                          <ImageIcon className="w-2.5 h-2.5" />
                          <span>SCREENSHOT</span>
                        </button>
                        <button
                          onClick={() => setDashboardDisplayMode(prev => ({ ...prev, [project.id]: 'chart' }))}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors flex items-center gap-1 ${
                            displayMode === 'chart'
                              ? 'bg-[#2563eb] text-white shadow-2xs'
                              : 'bg-slate-200/70 text-slate-600 hover:text-slate-900'
                          }`}
                          title="View interactive chart and KPI summary cards"
                        >
                          <BarChart3 className="w-2.5 h-2.5" />
                          <span>KPI & CHART</span>
                        </button>
                      </div>
                    </div>

                    {/* SUB-VIEW 1: ACTUAL POWER BI DASHBOARD SCREENSHOT */}
                    {displayMode === 'screenshot' && (
                      <div className="space-y-2.5">
                        
                        {/* Multi-page switcher tabs if project has multiple pages */}
                        {screenshots.length > 1 && (
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-[10px] font-mono-code">
                            {screenshots.map((s, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveScreenshotPage(prev => ({ ...prev, [project.id]: idx }))}
                                className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap border ${
                                  activeScreenshotIdx === idx
                                    ? 'bg-blue-50 border-[#2563eb] text-[#2563eb] shadow-2xs font-extrabold'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                                }`}
                              >
                                {s.pageName || s.title}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Screenshot Container with Click-to-Enlarge */}
                        {activeScreenshot ? (
                          <div
                            onClick={() => setLightbox({ project, screenshotIndex: activeScreenshotIdx })}
                            className="group/img relative rounded-lg overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-xs aspect-[16/10] flex items-center justify-center transition-all hover:border-[#2563eb]"
                            title="Click to view full-resolution dashboard"
                          >
                            <img
                              src={activeScreenshot.url}
                              alt={activeScreenshot.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.02]"
                              loading="lazy"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[1px]">
                              <span className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-mono-code font-bold flex items-center gap-1.5 shadow-md">
                                <Maximize2 className="w-3.5 h-3.5 text-[#2563eb]" />
                                <span>Click to Enlarge (Full Res)</span>
                              </span>
                            </div>

                            {/* Badge corner */}
                            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-white font-mono-code text-[9px] font-medium backdrop-blur-xs flex items-center gap-1 pointer-events-none">
                              <Eye className="w-2.5 h-2.5 text-[#2563eb]" />
                              <span>Power BI Dashboard</span>
                            </div>
                            
                            {screenshots.length > 1 && (
                              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-white font-mono-code text-[9px] font-medium backdrop-blur-xs pointer-events-none">
                                Page {activeScreenshotIdx + 1} of {screenshots.length}
                              </div>
                            )}
                          </div>
                        ) : null}

                        {/* Screenshot Details & Insight */}
                        {activeScreenshot && (
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1">
                            <div className="font-bold text-slate-900 flex items-center justify-between">
                              <span className="truncate">{activeScreenshot.title}</span>
                              <button
                                onClick={() => setLightbox({ project, screenshotIndex: activeScreenshotIdx })}
                                className="text-[10px] text-[#2563eb] font-mono-code hover:underline flex items-center gap-0.5 shrink-0 ml-1 cursor-pointer font-bold"
                              >
                                <ZoomIn className="w-3 h-3" />
                                <span>Enlarge</span>
                              </button>
                            </div>
                            {activeScreenshot.description && (
                              <p className="text-[11px] leading-relaxed text-slate-600">
                                {activeScreenshot.description}
                              </p>
                            )}
                          </div>
                        )}

                      </div>
                    )}

                    {/* SUB-VIEW 2: KPI TILES & LIVE CHART */}
                    {displayMode === 'chart' && (
                      <div className="space-y-2.5">
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
                          {renderChart(project, 'h-40')}
                        </div>
                      </div>
                    )}

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
                  onClick={() => handleOpenProjectModal(project)}
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
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="minimal-card max-w-4xl w-full my-8 bg-white border border-slate-200 p-6 sm:p-8 relative space-y-6 shadow-2xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
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

            {/* FEATURED POWER BI DASHBOARD SCREENSHOT SECTION */}
            {selectedProject.dashboardScreenshots && selectedProject.dashboardScreenshots.length > 0 && (
              <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-[#2563eb]" />
                    <span className="text-xs font-bold text-slate-900">
                      Power BI Production Report Suite (GitHub Hosted)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLightbox({ project: selectedProject, screenshotIndex: modalScreenshotIdx })}
                      className="text-xs font-mono-code text-[#2563eb] hover:text-[#1d4ed8] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>OPEN FULL-SCREEN LIGHTBOX</span>
                    </button>
                  </div>
                </div>

                {/* Multi-page switcher in modal */}
                {selectedProject.dashboardScreenshots.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono-code">
                    {selectedProject.dashboardScreenshots.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalScreenshotIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer whitespace-nowrap border ${
                          modalScreenshotIdx === idx
                            ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        {s.pageName || s.title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Big Dashboard Screenshot */}
                {selectedProject.dashboardScreenshots[modalScreenshotIdx] && (
                  <div 
                    onClick={() => setLightbox({ project: selectedProject, screenshotIndex: modalScreenshotIdx })}
                    className="relative group/modalimg rounded-xl overflow-hidden border border-slate-200 bg-slate-950 cursor-pointer shadow-md"
                  >
                    <img
                      src={selectedProject.dashboardScreenshots[modalScreenshotIdx].url}
                      alt={selectedProject.dashboardScreenshots[modalScreenshotIdx].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[440px] object-contain mx-auto transition-transform duration-300 group-hover/modalimg:scale-[1.01]"
                    />
                    
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/modalimg:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-4 py-2 rounded-lg bg-white/95 text-slate-900 text-xs font-mono-code font-bold flex items-center gap-2 shadow-lg">
                        <ZoomIn className="w-4 h-4 text-[#2563eb]" />
                        <span>Click to Enlarge Full-Resolution</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-slate-900/80 text-white font-mono-code text-[10px] font-medium backdrop-blur-xs flex items-center gap-1.5">
                      <Eye className="w-3 h-3 text-[#2563eb]" />
                      <span>{selectedProject.dashboardScreenshots[modalScreenshotIdx].title}</span>
                    </div>
                  </div>
                )}

                {/* Page Description */}
                {selectedProject.dashboardScreenshots[modalScreenshotIdx]?.description && (
                  <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 font-mono-code">Page Analysis:</strong> {selectedProject.dashboardScreenshots[modalScreenshotIdx].description}
                  </p>
                )}
              </div>
            )}

            {/* KPI Summary Cards */}
            <div className="space-y-2">
              <span className="text-xs font-mono-code text-slate-500 uppercase font-bold">
                Executive Metric Cards & Reach
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedProject.metricsSummary.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200 text-center shadow-xs">
                    <div className="text-[10px] text-slate-500 font-mono-code uppercase font-semibold">{m.label}</div>
                    <div className="text-base font-bold text-[#2563eb] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Big Interactive Chart View */}
            <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#2563eb]" />
                  <span>Interactive Visualization Model</span>
                </span>
                <span className="text-[11px] font-mono-code text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                  DATA MODEL
                </span>
              </div>
              <div className="w-full h-56 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                {renderChart(selectedProject, 'h-52')}
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

      {/* FULLSCREEN HIGH-RES LIGHTBOX MODAL */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[70] bg-slate-950/92 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Top Bar */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-950/90">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                    Power BI Dashboard Screenshot
                  </span>
                  <span className="text-xs font-mono-code text-slate-400 truncate hidden sm:inline">
                    {lightbox.project.title}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white truncate mt-1">
                  {(lightbox.project.dashboardScreenshots && lightbox.project.dashboardScreenshots[lightbox.screenshotIndex]?.title) || lightbox.project.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {lightbox.project.githubUrl && (
                  <a
                    href={lightbox.project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-code font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
                    <span className="hidden sm:inline">GitHub Repo</span>
                  </a>
                )}
                {lightbox.project.dashboardScreenshots && lightbox.project.dashboardScreenshots[lightbox.screenshotIndex]?.url && (
                  <a
                    href={lightbox.project.dashboardScreenshots[lightbox.screenshotIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-code font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Raw Image</span>
                  </a>
                )}
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Pages Navigation if multi-page */}
            {lightbox.project.dashboardScreenshots && lightbox.project.dashboardScreenshots.length > 1 && (
              <div className="px-4 py-2 border-b border-slate-800 bg-slate-900 flex items-center gap-2 overflow-x-auto">
                {lightbox.project.dashboardScreenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox(prev => prev ? ({ ...prev, screenshotIndex: idx }) : null)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer whitespace-nowrap border ${
                      lightbox.screenshotIndex === idx
                        ? 'bg-blue-600 border-blue-500 text-white shadow-xs'
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    {s.pageName || s.title}
                  </button>
                ))}
              </div>
            )}

            {/* Image Canvas */}
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-3 sm:p-6 min-h-[320px]">
              {lightbox.project.dashboardScreenshots && lightbox.project.dashboardScreenshots.length > 1 && (
                <>
                  <button
                    onClick={() => {
                      const total = lightbox.project.dashboardScreenshots?.length || 1;
                      setLightbox(prev => prev ? ({
                        ...prev,
                        screenshotIndex: (prev.screenshotIndex - 1 + total) % total
                      }) : null);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 cursor-pointer transition-colors backdrop-blur-xs shadow-lg z-10"
                    title="Previous Page (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      const total = lightbox.project.dashboardScreenshots?.length || 1;
                      setLightbox(prev => prev ? ({
                        ...prev,
                        screenshotIndex: (prev.screenshotIndex + 1) % total
                      }) : null);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white border border-slate-700 cursor-pointer transition-colors backdrop-blur-xs shadow-lg z-10"
                    title="Next Page (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {lightbox.project.dashboardScreenshots && lightbox.project.dashboardScreenshots[lightbox.screenshotIndex] && (
                <img
                  src={lightbox.project.dashboardScreenshots[lightbox.screenshotIndex].url}
                  alt={lightbox.project.dashboardScreenshots[lightbox.screenshotIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[64vh] w-auto max-w-full object-contain rounded shadow-2xl border border-slate-800"
                />
              )}
            </div>

            {/* Lightbox Footer with details */}
            {lightbox.project.dashboardScreenshots && lightbox.project.dashboardScreenshots[lightbox.screenshotIndex]?.description && (
              <div className="p-4 border-t border-slate-800 bg-slate-950/90 text-xs text-slate-300 flex items-center justify-between gap-4">
                <p className="leading-relaxed text-slate-300 max-w-4xl font-sans-clean">
                  <strong className="text-white font-mono-code mr-1.5">DATA STORY & INSIGHT:</strong>
                  {lightbox.project.dashboardScreenshots[lightbox.screenshotIndex].description}
                </p>
                <span className="text-[11px] font-mono-code text-slate-500 shrink-0 hidden sm:inline">
                  Page {lightbox.screenshotIndex + 1} of {lightbox.project.dashboardScreenshots.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
