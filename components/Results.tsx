import React, { useState } from 'react';
import { CheckCircle2, Zap, Target, Briefcase, Download, Loader2, TrendingUp, Award, Rocket } from 'lucide-react';
import { AssessmentResult } from '../types';
import SkillsRadar from './SkillsRadar';
import { generatePDF } from '../services/pdfService';

interface ResultsProps {
  results: AssessmentResult;
  onRestart: () => void;
}

// Images pour les carrières (basées sur des mots-clés)
const CAREER_IMAGES = [
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
];

const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      generatePDF(results);
    } catch (error) {
      console.error('Erreur génération PDF:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="space-y-12 md:space-y-16 animate-in slide-in-from-bottom-20 duration-1000 pb-32">
      {/* En-tête avec image de fond */}
      <div className="bg-slate-900 shadow-2xl rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10">
        <div className="relative">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-slate-900/90 to-slate-900" />
          </div>

          <div className="relative p-10 md:p-24 text-white text-center">
            {/* Badge succès */}
            <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-green-400/30">
              <CheckCircle2 className="w-4 h-4" /> Analyse Terminée avec Succès
            </div>

            {/* Titre */}
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] max-w-5xl mx-auto drop-shadow-2xl">
              Votre Portrait <br />
              <span className="text-blue-400">Professionnel</span>
            </h2>

            {/* Résumé */}
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-medium italic">
                "{results.summary}"
              </p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-8 md:p-20 grid lg:grid-cols-2 gap-12 md:gap-20 bg-slate-900/50 backdrop-blur-sm">
          <div className="space-y-12 md:space-y-16">
            {/* Points de Force */}
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
                    className="bg-slate-800/80 p-6 md:p-7 rounded-[2rem] text-lg md:text-xl font-bold text-white border border-white/5 flex items-center gap-6 hover:bg-slate-800 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <span className="font-black">{i + 1}</span>
                    </div>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Axe de Valeurs */}
            <div>
              <h3 className="font-black text-white text-[11px] uppercase tracking-[0.6em] mb-8 flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Target className="w-6 h-6" />
                </div>
                Axe de Valeurs
              </h3>
              <div className="relative bg-slate-800/50 p-8 rounded-[2.5rem] border border-white/5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
                  alt=""
                  className="absolute right-0 top-0 w-32 h-32 object-cover opacity-10 rounded-bl-3xl"
                />
                <p className="relative text-base md:text-lg font-medium text-slate-200 leading-relaxed italic border-l-4 border-l-blue-500 pl-6">
                  {results.valuesAlignment}
                </p>
              </div>
            </div>
          </div>

          {/* Radar */}
          <div className="bg-slate-950/40 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 flex flex-col items-center justify-center border border-white/5 shadow-inner min-h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="relative text-[10px] font-black text-white/20 mb-10 uppercase tracking-[0.8em]">
              Analyse Comparative IA
            </span>
            <div className="relative">
              <SkillsRadar data={results.skillsRadarData} />
            </div>
          </div>
        </div>
      </div>

      {/* Section Opportunités de Carrière */}
      <div className="space-y-10 md:space-y-12 px-2 md:px-6">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <Rocket className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Opportunités de Carrière
            </h3>
            <p className="text-slate-400 mt-1">Métiers recommandés selon votre profil</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {results.careerSuggestions.map((c, i) => (
            <div
              key={i}
              className="bg-slate-900 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col hover:-translate-y-4 transition-all group overflow-hidden"
            >
              {/* Image du métier */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={CAREER_IMAGES[i % CAREER_IMAGES.length]}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
                      Recommandé #{i + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="font-black text-white text-xl mb-4 leading-tight">
                  {c.title}
                </h4>
                <p className="text-slate-400 text-base mb-6 flex-grow leading-relaxed">
                  {c.description}
                </p>

                {/* Affinité */}
                <div className="bg-blue-600/10 px-5 py-4 rounded-2xl border border-blue-600/20 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                      Affinité Profil
                    </span>
                  </div>
                  <p className="text-blue-200 text-sm font-medium">{c.relevance}</p>
                </div>

                {/* Salaire */}
                <div className="bg-white/5 px-5 py-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Rémunération
                    </span>
                  </div>
                  <p className="text-white font-black text-lg">{c.salary_range}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6 no-print">
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="bg-white text-slate-900 px-12 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 shadow-2xl hover:bg-blue-400 hover:text-white transition-all active:scale-95 disabled:opacity-70 disabled:cursor-wait"
        >
          {isGeneratingPDF ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" /> Génération en cours...
            </>
          ) : (
            <>
              <Download className="w-6 h-6" /> Télécharger mon Bilan (PDF)
            </>
          )}
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
