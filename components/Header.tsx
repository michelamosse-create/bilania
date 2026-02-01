import React from 'react';
import { ClipboardCheck } from 'lucide-react';

interface HeaderProps {
  step: 'welcome' | 'assessment' | 'loading' | 'results';
  progress: number;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ step, progress, onLogoClick }) => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 px-6 md:px-12 h-20 flex items-center justify-between shadow-2xl">
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={onLogoClick}
      >
        <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:rotate-6 transition-transform">
          <ClipboardCheck className="w-6 h-6 text-white" />
        </div>
        <span className="font-black text-2xl tracking-tighter text-white uppercase">
          Bilan<span className="text-blue-400">IA</span>
        </span>
      </div>

      {step === 'assessment' && (
        <div className="flex items-center gap-4 md:gap-8">
          <div className="text-right hidden xs:block">
            <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-0.5">
              AVANCEMENT
            </p>
            <p className="text-white font-black text-sm md:text-lg leading-none">
              {Math.round(progress)}%
            </p>
          </div>
          <div className="w-24 md:w-40 h-2 bg-white/10 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
