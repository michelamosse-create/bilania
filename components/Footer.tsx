import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16 px-6 md:px-12 mt-auto no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg">
            <ClipboardCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-xl tracking-tighter text-white uppercase">
            Bilan<span className="text-blue-400">IA</span>
          </span>
        </div>
        <div className="flex gap-10 text-[10px] font-black text-white/30 uppercase tracking-[1em]">
          <a href="/ethique" className="hover:text-blue-400 transition-colors">Éthique</a>
          <a href="/donnees" className="hover:text-blue-400 transition-colors">Données</a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <p className="text-white/15 font-bold text-xs tracking-[0.2em] uppercase">
          IA Gemini Powered © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
