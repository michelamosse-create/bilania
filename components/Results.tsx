import React from 'react';
import { CheckCircle2, Zap, Target, Briefcase, Download } from 'lucide-react';
import { AssessmentResult } from '../types';
import SkillsRadar from './SkillsRadar';

interface ResultsProps {
  results: AssessmentResult;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 md:space-y-16 animate-in slide-in-from-bottom-20 duration-1000 pb-32">
      <div className="bg-slate-900 shadow-2xl rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10">
        <div className="bg-gradient-to-br from-blue-900/60 via-slate-900 to-slate-950 p-10 md:p-24 text-white text-center relative border-b border-white/10">
          <div className="inline-flex items-center gap-3 bg-blue-600/30 text-blue-200 px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-blue-400/30">
            <CheckCircle2 className="w-4 h-4" /> Analyse Terminée avec Succès
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] max-w-5xl mx-auto drop-shadow-2xl">
            Votre Portrait <br />
            <span className="text-blue-400">Professionnel</span>
          </h2>
          <p className="text-slate-200 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium italic opacity-100 leading-tight">
            "{results.summary}"
          </p>
        </div>

        <div className="p-8 md:p-20 grid lg:grid-cols-2 gap-12 md:gap-20 bg-slate-900/50 backdrop-blur-sm">
          <div className="space-y-12 md:space-y-16">
            <div>
              <h3 className="font-black text-white text-[11px] uppercase tracking-[0.6em] mb-8 flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                Points de Force
              </h3>
              <div className="space-y-4">
                {results.strengths.map((s, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/80 p-6 md:p-7 rounded-[2rem] text-lg md:text-xl font-bold text-white border border-white/5 flex items-center gap-6 hover:bg-slate-800 hover:border-blue-500/30 transition-all"
                  >
                    <span className="text-blue-500 font-black text-2xl opacity-40">
                      0{i + 1}
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-black text-white text-[11px] uppercase tracking-[0.6em] mb-8 flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Target className="w-6 h-6" />
                </div>
                Axe de Valeurs
              </h3>
              <div className="bg-slate-800/50 p-8 rounded-[2.5rem] text-base md:text-lg font-medium text-slate-200 border border-white/5 leading-relaxed italic border-l-4 border-l-blue-500">
                {results.valuesAlignment}
              </div>
            </div>
          </div>
          <div className="bg-slate-950/40 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 flex flex-col items-center justify-center border border-white/5 shadow-inner min-h-[500px]">
            <span className="text-[10px] font-black text-white/20 mb-10 uppercase tracking-[0.8em]">
              Analyse Comparative IA
            </span>
            <SkillsRadar data={results.skillsRadarData} />
          </div>
        </div>
      </div>

      <div className="space-y-10 md:space-y-12 px-2 md:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Opportunités de Carrière
          </h3>
          <div className="h-px flex-grow mx-6 md:mx-12 bg-white/10 hidden sm:block" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {results.careerSuggestions.map((c, i) => (
            <div
              key={i}
              className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl border border-white/10 flex flex-col hover:-translate-y-4 transition-all group"
            >
              <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <h4 className="font-black text-white text-2xl mb-5 leading-tight">
                {c.title}
              </h4>
              <p className="text-slate-400 text-base md:text-lg mb-8 flex-grow leading-relaxed font-semibold">
                {c.description}
              </p>
              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center bg-blue-600/10 px-6 py-4 rounded-2xl border border-blue-600/20">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">
                    Affinité Profil
                  </span>
                  <span className="text-blue-300 font-black text-lg">{c.relevance}</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    Rémunération
                  </span>
                  <span className="text-white font-black text-sm">{c.salary_range}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6 no-print">
        <button
          onClick={handlePrint}
          className="bg-white text-slate-900 px-12 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 shadow-2xl hover:bg-blue-400 hover:text-white transition-all active:scale-95"
        >
          <Download className="w-6 h-6" /> Télécharger mon Bilan (PDF)
        </button>
        <button
          onClick={onRestart}
          className="bg-transparent text-white border-2 border-white/20 px-12 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 hover:bg-white/10 transition-all active:scale-95"
        >
          Relancer l'Analyse
        </button>
      </div>
    </div>
  );
};

export default Results;
