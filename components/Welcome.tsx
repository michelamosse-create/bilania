import React from 'react';
import {
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layout,
  Palette,
  ShieldCheck,
} from 'lucide-react';

interface WelcomeProps {
  totalQuestions: number;
  heroImageUrl: string | null;
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ totalQuestions, heroImageUrl, onStart }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="space-y-10 text-left">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-100 text-sm font-bold shadow-xl">
          <Sparkles className="w-4 h-4 text-blue-400" /> Bilan Approfondi en {totalQuestions} Questions
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
          Révélez votre <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
            potentiel.
          </span>
        </h1>
        <p className="text-slate-200 text-xl md:text-2xl leading-relaxed max-w-xl font-semibold drop-shadow-lg">
          Analysez vos talents et vos motivations grâce à notre algorithme IA de pointe. Obtenez un diagnostic complet en 10 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <button
            onClick={onStart}
            className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-4 hover:bg-blue-500 transition-all hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-2 active:scale-95 group shadow-2xl"
          >
            Lancer mon Diagnostic <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-10 border-t border-white/10">
          <div className="space-y-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
              <Layout className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="text-[9px] font-black text-white uppercase tracking-tighter">Profil 360°</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
              <Palette className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="text-[9px] font-black text-white uppercase tracking-tighter">Radar IA</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <p className="text-[9px] font-black text-white uppercase tracking-tighter">Privé & Sécurisé</p>
          </div>
        </div>
      </div>

      <div className="relative group hidden lg:block">
        <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="relative bg-slate-900/90 p-4 rounded-[3.5rem] shadow-2xl border border-white/20 aspect-square overflow-hidden flex items-center justify-center">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Expertise Professionnelle"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-inner animate-in fade-in duration-1000"
            />
          ) : (
            <div className="w-full h-full bg-slate-800/50 flex flex-col items-center justify-center gap-6 rounded-[2.5rem]">
              <RefreshCw className="w-16 h-16 text-blue-500/20 animate-spin" />
              <p className="text-xs font-black text-blue-200/40 uppercase tracking-widest">Initialisation IA...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
