import React, { useState, useEffect } from 'react';
import { ASSESSMENT_QUESTIONS } from './constants';
import { UserAnswers, AssessmentResult } from './types';
import { generateAssessmentReport, generateHeroImage } from './services/geminiService';
import { AlertCircle, RotateCcw } from 'lucide-react';
import useLocalStorage from './hooks/useLocalStorage';

// Composants
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Assessment from './components/Assessment';
import Loading from './components/Loading';
import Results from './components/Results';

type Step = 'welcome' | 'assessment' | 'loading' | 'results';

const STORAGE_KEYS = {
  ANSWERS: 'bilania_answers',
  CURRENT_IDX: 'bilania_currentIdx',
};

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('welcome');
  const [savedAnswers, setSavedAnswers, clearSavedAnswers] = useLocalStorage<UserAnswers>(STORAGE_KEYS.ANSWERS, {});
  const [savedIdx, setSavedIdx, clearSavedIdx] = useLocalStorage<number>(STORAGE_KEYS.CURRENT_IDX, 0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [heroImageUrl, setHeroImageUrl] = useState<string | null>(null);
  const [showResumePrompt, setShowResumePrompt] = useState(false);

  // Vérifie s'il y a une session en cours à reprendre
  useEffect(() => {
    if (Object.keys(savedAnswers).length > 0 && step === 'welcome') {
      setShowResumePrompt(true);
    }
  }, []);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const progress = ((currentIdx + 1) / totalQuestions) * 100;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentIdx];

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const img = await generateHeroImage();
        if (img) setHeroImageUrl(img);
      } catch (e) {
        console.error('Échec chargement image IA');
      }
    };
    fetchHero();
  }, []);

  const handleStart = () => {
    // Efface les données sauvegardées pour un nouveau départ
    clearSavedAnswers();
    clearSavedIdx();
    setStep('assessment');
    setCurrentIdx(0);
    setAnswers({});
    setError(null);
    setShowResumePrompt(false);
  };

  const handleResume = () => {
    // Reprend la session sauvegardée
    setAnswers(savedAnswers);
    setCurrentIdx(savedIdx);
    setStep('assessment');
    setShowResumePrompt(false);
  };

  const handleDismissResume = () => {
    setShowResumePrompt(false);
  };

  const handleLogoClick = () => {
    setStep('welcome');
  };

  const handleSingleAnswer = (value: any) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    setSavedAnswers(newAnswers);
    if (currentIdx < totalQuestions - 1) {
      setTimeout(() => {
        const newIdx = currentIdx + 1;
        setCurrentIdx(newIdx);
        setSavedIdx(newIdx);
      }, 250);
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
    const newAnswers = { ...answers, [currentQuestion.id]: next };
    setAnswers(newAnswers);
    setSavedAnswers(newAnswers);
  };

  const handleTextChange = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    setSavedAnswers(newAnswers);
  };

  const handlePrevious = () => {
    const newIdx = Math.max(0, currentIdx - 1);
    setCurrentIdx(newIdx);
    setSavedIdx(newIdx);
  };

  const handleNext = () => {
    const newIdx = currentIdx + 1;
    setCurrentIdx(newIdx);
    setSavedIdx(newIdx);
  };

  const handleSubmit = async () => {
    setStep('loading');
    setError(null);
    try {
      const report = await generateAssessmentReport(answers, ASSESSMENT_QUESTIONS);
      setResults(report);
      setStep('results');
      // Efface les données sauvegardées une fois l'analyse terminée
      clearSavedAnswers();
      clearSavedIdx();
    } catch (err) {
      console.error('Erreur Analyse:', err);
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

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      {/* Image de fond fixe */}
      <div
        className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000")',
        }}
      />
      {/* Overlay sombre */}
      <div className="fixed inset-0 -z-20 bg-slate-950/85 backdrop-blur-[2px]" />

      <Header step={step} progress={progress} onLogoClick={handleLogoClick} />

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

          {/* Popup de reprise de session */}
          {showResumePrompt && step === 'welcome' && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <RotateCcw className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white">Session en cours</h3>
                </div>
                <p className="text-slate-300 mb-8">
                  Vous avez une session non terminée ({Object.keys(savedAnswers).length} réponses sauvegardées).
                  Voulez-vous la reprendre ?
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={handleResume}
                    className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-500 transition-all"
                  >
                    Reprendre
                  </button>
                  <button
                    onClick={handleDismissResume}
                    className="flex-1 bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    Ignorer
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 'welcome' && (
            <Welcome
              totalQuestions={totalQuestions}
              heroImageUrl={heroImageUrl}
              onStart={handleStart}
            />
          )}

          {step === 'assessment' && (
            <Assessment
              currentQuestion={currentQuestion}
              currentIdx={currentIdx}
              totalQuestions={totalQuestions}
              progress={progress}
              answers={answers}
              onSingleAnswer={handleSingleAnswer}
              onMultiAnswer={handleMultiAnswer}
              onTextChange={handleTextChange}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={handleSubmit}
              canGoNext={canGoNext()}
            />
          )}

          {step === 'loading' && <Loading totalQuestions={totalQuestions} />}

          {step === 'results' && results && (
            <Results results={results} onRestart={handleStart} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
