import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  Github, 
  Globe, 
  CheckCircle2, 
  Rocket, 
  Sparkles, 
  FileCode,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'github' | 'cli' | 'checklist'>('github');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gitCommands = `git init
git add .
git commit -m "Francis Blessing Osewayeme Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/francis-portfolio.git
git push -u origin main`;

  const cliCommands = `# Run inside your project directory:
npx vercel

# Follow prompts (press Enter to accept defaults)
# When ready for live production:
npx vercel --prod`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
              <Rocket className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold tracking-tight">Deploy Portfolio to Vercel</h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Ready to Publish
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Step-by-step guide to get your live URL with free SSL & automatic builds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-3 px-3 text-xs font-bold transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
              activeTab === 'github'
                ? 'border-[#2563eb] text-[#2563eb]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Method 1: GitHub (Recommended)</span>
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`pb-3 px-3 text-xs font-bold transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
              activeTab === 'cli'
                ? 'border-[#2563eb] text-[#2563eb]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Method 2: Terminal / CLI</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`pb-3 px-3 text-xs font-bold transition-all flex items-center gap-1.5 border-b-2 cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-[#2563eb] text-[#2563eb]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Vercel Config Audit</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          {activeTab === 'github' && (
            <div className="space-y-5">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Why this is best:</strong> Every time you push a project update or new Power BI case study to GitHub, Vercel automatically rebuilds and publishes the update live in 30 seconds.
                </div>
              </div>

              {/* Step 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">1</span>
                  <h4 className="font-bold text-slate-900">Push your code to GitHub</h4>
                </div>
                <p className="text-xs text-slate-600 pl-7">
                  Download or export this project, open your terminal inside the folder, and run:
                </p>
                <div className="pl-7 relative">
                  <pre className="bg-slate-900 text-emerald-400 p-3.5 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
                    {gitCommands}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(gitCommands, 'git')}
                    className="absolute top-2 right-2 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-1 font-mono transition-colors"
                  >
                    {copiedKey === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'git' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">2</span>
                  <h4 className="font-bold text-slate-900">Connect to Vercel</h4>
                </div>
                <div className="pl-7 space-y-2 text-xs text-slate-600">
                  <p>
                    Go to{' '}
                    <a 
                      href="https://vercel.com/new" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2563eb] hover:underline font-bold inline-flex items-center gap-1"
                    >
                      vercel.com/new <ExternalLink className="w-3 h-3" />
                    </a>{' '}
                    and sign in with your GitHub account.
                  </p>
                  <p>
                    Click <strong className="text-slate-800">"Import"</strong> next to your repository (<code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">francis-portfolio</code>).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">3</span>
                  <h4 className="font-bold text-slate-900">Click "Deploy"</h4>
                </div>
                <div className="pl-7 space-y-2 text-xs text-slate-600">
                  <p>
                    Vercel automatically detects Vite. Build settings are already configured:
                  </p>
                  <div className="bg-slate-100 p-2.5 rounded-lg font-mono text-[11px] text-slate-700 space-y-1">
                    <div>• Framework Preset: <span className="text-[#2563eb] font-bold">Vite</span></div>
                    <div>• Build Command: <span className="text-slate-900 font-semibold">npm run build</span></div>
                    <div>• Output Directory: <span className="text-slate-900 font-semibold">dist</span></div>
                  </div>
                  <p className="pt-1">
                    Click <strong className="text-[#2563eb]">Deploy</strong> and you will receive your live domain (e.g. <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">https://francis-portfolio.vercel.app</code>) with instant SSL certificate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cli' && (
            <div className="space-y-5">
              <div className="p-3.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 text-xs">
                Deploy directly from your computer terminal without pushing to GitHub first.
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">Run in your terminal:</h4>
                <div className="relative">
                  <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
                    {cliCommands}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(cliCommands, 'cli')}
                    className="absolute top-2 right-2 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-1 font-mono transition-colors"
                  >
                    {copiedKey === 'cli' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'cli' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl space-y-2 text-xs text-blue-950">
                <div className="font-bold">Prompt walkthrough:</div>
                <ul className="space-y-1 list-disc list-inside text-blue-900">
                  <li>Set up and deploy? → Type <strong className="font-mono">y</strong></li>
                  <li>Which scope? → Select your personal account</li>
                  <li>Link to existing project? → Type <strong className="font-mono">n</strong></li>
                  <li>Project name? → Press Enter or type <strong className="font-mono">francis-portfolio</strong></li>
                  <li>Directory? → Press Enter (<strong className="font-mono">./</strong>)</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 font-semibold">
                We have verified that your codebase is 100% prepared for Vercel deployment:
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">vercel.json Configured</div>
                    <div className="text-[11px] text-slate-500">
                      Added Single-Page Application (SPA) rewrite rules so deep links, direct links, and refreshes never throw 404s.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">OpenGraph & Social Meta Ready</div>
                    <div className="text-[11px] text-slate-500">
                      LinkedIn, WhatsApp, and Twitter link preview cards formatted with your BI & People Analytics credentials.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">Harmony Grove BI Case Study Intact</div>
                    <div className="text-[11px] text-slate-500">
                      Live DAX measures, SQL cleaning scripts, and tutor retention metrics featured prominently.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">Google BI Certificate & Tata/Forage IDs</div>
                    <div className="text-[11px] text-slate-500">
                      IDs <code className="bg-slate-200 px-1 rounded">ML8Z7H2X8HIV</code> & <code className="bg-slate-200 px-1 rounded">6a54b1e2f39d9bdef20198bf</code> verified.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">December 2023 Graduation Date</div>
                    <div className="text-[11px] text-slate-500">
                      B.Sc. Sociology from Ambrose Alli University officially updated to December 2023.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Ready for custom domains like <code className="text-slate-800 font-semibold">francisanalytics.com</code></span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Open Vercel Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
