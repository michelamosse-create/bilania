
import React, { useState, useEffect } from 'react';
import { ASSESSMENT_QUESTIONS } from './constants';
import { UserAnswers, AssessmentResult, Question } from './types';
import { generateAssessmentReport, generateHeroImage } from './services/geminiService';
import SkillsRadar from './components/SkillsRadar';
import { 
  ClipboardCheck, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Target, 
  Briefcase, 
  ArrowRight,
  Download,
  CheckCircle2,
  Zap,
  Cpu,
  Palette,
  ShieldCheck,
  AlertCircle,
  RefreshCw,
  Layout
} from 'lucide-react';

const App: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'assessment' | 'loading' | 'results'>('welcome');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [heroImageUrl, setHeroImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const img = await generateHeroImage();
        if (img) setHeroImageUrl(img);
      } catch (e) {
        console.error("Échec chargement image IA");
      }
    };
    fetchHero();
  }, []);

  const handleStart = () => {
    setStep('assessment');
    setCurrentIdx(0);
    setAnswers({});
    setError(null);
  };

  const currentQuestion = ASSESSMENT_QUESTIONS[currentIdx];

  const handleSingleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    if (currentIdx < ASSESSMENT_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentIdx(prev => prev + 1), 250);
    }
  };

  const handleMultiAnswer = (value: string) => {
    const current = answers[currentQuestion.id] || [];
    let next;
    if (current.includes(value)) {
      next = current.filter((v: string) => v !== value);
    } else {
      if (currentQuestion.maxChoices && current.length >= currentQuestion.maxChoices) return;
      next = [...current, value];
    }
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: next }));
  };

  const handleTextChange = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleSubmit = async () => {
    setStep('loading');
    setError(null);
    try {
      const report = await generateAssessmentReport(answers, ASSESSMENT_QUESTIONS);
      setResults(report);
      setStep('results');
    } catch (err) {
      console.error("Erreur Analyse:", err);
      setError("Une erreur est survenue lors de l'analyse. Nos serveurs IA sont peut-être surchargés.");
      setStep('assessment');
    }
  };

  const canGoNext = () => {
    const ans = answers[currentQuestion.id];
    if (currentQuestion.type === 'multi') return ans && ans.length > 0;
    if (currentQuestion.type === 'text') return ans && ans.trim().length > 5;
    return ans !== undefined;
  };

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const progress = ((currentIdx + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      {/* IMAGE DE FOND - Fixée pour éviter les saccades */}
      <div 
        className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000")' }}
      />
      {/* Overlay Sombre Premium */}
      <div className="fixed inset-0 -z-20 bg-slate-950/85 backdrop-blur-[2px]" />

      <header className="bg-slate-900/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 px-6 md:px-12 h-20 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setStep('welcome')}>
          <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:rotate-6 transition-transform">
            <ClipboardCheck className="w-6 h-6 text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-white uppercase">Bilan<span className="text-blue-400">IA</span></span>
        </div>
        
        {step === 'assessment' && (
          <div className="flex items-center gap-4 md:gap-8">
            <div className="text-right hidden xs:block">
              <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-0.5">AVANCEMENT</p>
              <p className="text-white font-black text-sm md:text-lg leading-none">{Math.round(progress)}%</p>
            </div>
            <div className="w-24 md:w-40 h-2 bg-white/10 rounded-full overflow-hidden border border-white/10">
              <div className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-12 relative z-10">
        <div className="max-w-7xl w-full">
          {error && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-10 w-full max-w-lg px-4">
              <div className="bg-red-600 text-white p-5 rounded-2xl shadow-2xl flex items-start gap-4 font-bold border border-white/20">
                <AlertCircle className="w-6 h-6 shrink-0" /> 
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {step === 'welcome' && (
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8 animate-in fade-in zoom-in-95 duration-700">
              <div className="space-y-10 text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-100 text-sm font-bold shadow-xl">
                  <Sparkles className="w-4 h-4 text-blue-400" /> Bilan Approfondi en {totalQuestions} Questions
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
                  Révélez votre <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">potentiel.</span>
                </h1>
                <p className="text-slate-200 text-xl md:text-2xl leading-relaxed max-w-xl font-semibold drop-shadow-lg">
                  Analysez vos talents et vos motivations grâce à notre algorithme IA de pointe. Obtenez un diagnostic complet en 10 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <button 
                    onClick={handleStart} 
                    className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-4 hover:bg-blue-500 transition-all hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-2 active:scale-95 group shadow-2xl"
                  >
                    Lancer mon Diagnostic <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 md:gap-8 pt-10 border-t border-white/10">
                  <div className="space-y-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400"><Layout className="w-5 h-5 md:w-6 md:h-6" /></div>
                    <p className="text-[9px] font-black text-white uppercase tracking-tighter">Profil 360°</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400"><Palette className="w-5 h-5 md:w-6 md:h-6" /></div>
                    <p className="text-[9px] font-black text-white uppercase tracking-tighter">Radar IA</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400"><ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /></div>
                    <p className="text-[9px] font-black text-white uppercase tracking-tighter">Privé & Sécurisé</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group hidden lg:block">
                <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="relative bg-slate-900/90 p-4 rounded-[3.5rem] shadow-2xl border border-white/20 aspect-square overflow-hidden flex items-center justify-center">
                  {heroImageUrl ? (
                    <img src={heroImageUrl} alt="Expertise Professionnelle" className="w-full h-full object-cover rounded-[2.5rem] shadow-inner animate-in fade-in duration-1000" />
                  ) : (
                    <div className="w-full h-full bg-slate-800/50 flex flex-col items-center justify-center gap-6 rounded-[2.5rem]">
                      <RefreshCw className="w-16 h-16 text-blue-500/20 animate-spin" />
                      <p className="text-xs font-black text-blue-200/40 uppercase tracking-widest">Initialisation IA...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 'assessment' && (
            <div className="bg-slate-900/95 shadow-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 animate-in zoom-in-95 duration-500 max-w-4xl mx-auto">
              <div className="mb-10">
                <div className="flex justify-between items-end mb-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">Question {currentIdx + 1} / {totalQuestions}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{currentQuestion.partTitle}</h3>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="space-y-10">
                <h2 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-3">
                  {currentQuestion.type === 'text' ? (
                    <textarea 
                      className="w-full p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-white/10 bg-slate-800 focus:border-blue-500 outline-none min-h-[180px] transition-all text-lg md:text-xl text-white placeholder:text-white/20 font-medium"
                      placeholder={currentQuestion.placeholder || "Répondez ici..."}
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleTextChange(e.target.value)}
                    />
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                      {currentQuestion.options?.map((opt) => {
                        const isSelected = currentQuestion.type === 'multi' 
                          ? (answers[currentQuestion.id] || []).includes(opt.value)
                          : answers[currentQuestion.id] === opt.value;

                        return (
                          <button
                            key={String(opt.value)}
                            onClick={() => currentQuestion.type === 'multi' ? handleMultiAnswer(String(opt.value)) : handleSingleAnswer(opt.value)}
                            className={`p-5 md:p-6 rounded-2xl border-2 text-left transition-all flex items-center justify-between group relative overflow-hidden ${isSelected ? 'border-blue-500 bg-blue-600/30 text-white shadow-lg shadow-blue-500/10' : 'border-white/5 bg-slate-800/50 hover:border-white/20 hover:bg-slate-800'}`}
                          >
                            <span className="font-bold text-base md:text-lg relative z-10">{opt.label}</span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-blue-400 bg-blue-400' : 'border-white/20'}`}>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-slate-900" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-white/5">
                  <button 
                    onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                    disabled={currentIdx === 0}
                    className="flex items-center gap-2 text-white/30 font-black uppercase text-[10px] tracking-widest hover:text-white disabled:opacity-0 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" /> Précédent
                  </button>
                  <button 
                    onClick={() => currentIdx === totalQuestions - 1 ? handleSubmit() : setCurrentIdx(prev => prev + 1)}
                    disabled={!canGoNext()}
                    className={`px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center gap-4 ${canGoNext() ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-500 hover:scale-105' : 'bg-white/5 text-white/10 cursor-not-allowed border border-white/10'}`}
                  >
                    {currentIdx === totalQuestions - 1 ? 'Lancer l\'analyse IA' : 'Suivant'} <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 'loading' && (
            <div className="text-center space-y-12 py-24 animate-in fade-in zoom-in-95">
              <div className="relative inline-flex">
                <div className="w-40 h-40 md:w-48 md:h-48 border-[12px] border-white/5 border-t-blue-500 rounded-full animate-spin shadow-[0_0_80px_rgba(59,130,246,0.3)]" />
                <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 text-blue-400 animate-pulse" />
              </div>
              <div className="space-y-4 px-4">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Analyse de vos {totalQuestions} réponses...</h2>
                <p className="text-blue-200/80 font-bold text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed italic opacity-80">
                  "L'IA Gemini construit votre profil psychométrique et identifie vos leviers de réussite."
                </p>
              </div>
            </div>
          )}

          {step === 'results' && results && (
            <div className="space-y-12 md:space-y-16 animate-in slide-in-from-bottom-20 duration-1000 pb-32">
               <div className="bg-slate-900 shadow-2xl rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10">
                <div className="bg-gradient-to-br from-blue-900/60 via-slate-900 to-slate-950 p-10 md:p-24 text-white text-center relative border-b border-white/10">
                  <div className="inline-flex items-center gap-3 bg-blue-600/30 text-blue-200 px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-blue-400/30">
                    <CheckCircle2 className="w-4 h-4" /> Analyse Terminée avec Succès
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] max-w-5xl mx-auto drop-shadow-2xl">Votre Portrait <br/><span className="text-blue-400">Professionnel</span></h2>
                  <p className="text-slate-200 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium italic opacity-100 leading-tight">"{results.summary}"</p>
                </div>
                
                <div className="p-8 md:p-20 grid lg:grid-cols-2 gap-12 md:gap-20 bg-slate-900/50 backdrop-blur-sm">
                  <div className="space-y-12 md:space-y-16">
                    <div>
                      <h3 className="font-black text-white text-[11px] uppercase tracking-[0.6em] mb-8 flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/20"><Zap className="w-6 h-6" /></div>
                        Points de Force
                      </h3>
                      <div className="space-y-4">
                        {results.strengths.map((s, i) => (
                          <div key={i} className="bg-slate-800/80 p-6 md:p-7 rounded-[2rem] text-lg md:text-xl font-bold text-white border border-white/5 flex items-center gap-6 hover:bg-slate-800 hover:border-blue-500/30 transition-all">
                            <span className="text-blue-500 font-black text-2xl opacity-40">0{i+1}</span>
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-black text-white text-[11px] uppercase tracking-[0.6em] mb-8 flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20"><Target className="w-6 h-6" /></div>
                        Axe de Valeurs
                      </h3>
                      <div className="bg-slate-800/50 p-8 rounded-[2.5rem] text-base md:text-lg font-medium text-slate-200 border border-white/5 leading-relaxed italic border-l-4 border-l-blue-500">
                        {results.valuesAlignment}
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-950/40 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 flex flex-col items-center justify-center border border-white/5 shadow-inner min-h-[500px]">
                    <span className="text-[10px] font-black text-white/20 mb-10 uppercase tracking-[0.8em]">Analyse Comparative IA</span>
                    <SkillsRadar data={results.skillsRadarData} />
                  </div>
                </div>
              </div>

              <div className="space-y-10 md:space-y-12 px-2 md:px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Opportunités de Carrière</h3>
                  <div className="h-px flex-grow mx-6 md:mx-12 bg-white/10 hidden sm:block" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {results.careerSuggestions.map((c, i) => (
                    <div key={i} className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl border border-white/10 flex flex-col hover:-translate-y-4 transition-all group">
                      <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform"><Briefcase className="w-7 h-7" /></div>
                      <h4 className="font-black text-white text-2xl mb-5 leading-tight">{c.title}</h4>
                      <p className="text-slate-400 text-base md:text-lg mb-8 flex-grow leading-relaxed font-semibold">{c.description}</p>
                      <div className="pt-8 border-t border-white/5 space-y-4">
                        <div className="flex justify-between items-center bg-blue-600/10 px-6 py-4 rounded-2xl border border-blue-600/20">
                          <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Affinité Profil</span>
                          <span className="text-blue-300 font-black text-lg">{c.relevance}</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Rémunération</span>
                          <span className="text-white font-black text-sm">{c.salary_range}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6">
                <button onClick={() => window.print()} className="bg-white text-slate-900 px-12 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 shadow-2xl hover:bg-blue-400 hover:text-white transition-all active:scale-95"><Download className="w-6 h-6" /> Télécharger mon Bilan (PDF)</button>
                <button onClick={handleStart} className="bg-transparent text-white border-2 border-white/20 px-12 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 hover:bg-white/10 transition-all active:scale-95">Relancer l'Analyse</button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-white/10 py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg"><ClipboardCheck className="w-5 h-5 text-white" /></div>
            <span className="font-black text-xl tracking-tighter text-white uppercase">Bilan<span className="text-blue-400">IA</span></span>
          </div>
          <div className="flex gap-10 text-[10px] font-black text-white/30 uppercase tracking-[1em]">
            <a href="#" className="hover:text-blue-400 transition-colors">Éthique</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Données</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <p className="text-white/15 font-bold text-xs tracking-[0.2em] uppercase">IA Gemini 3 Powered © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
