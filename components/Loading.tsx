import React, { useState, useEffect } from 'react';
import { Zap, Brain, Sparkles, Target } from 'lucide-react';

interface LoadingProps {
  totalQuestions: number;
}

const LOADING_MESSAGES = [
  { icon: Brain, text: "Analyse de votre profil psychologique..." },
  { icon: Sparkles, text: "Identification de vos talents uniques..." },
  { icon: Target, text: "Calcul de vos axes de développement..." },
  { icon: Zap, text: "Génération de vos recommandations personnalisées..." },
];

const Loading: React.FC<LoadingProps> = ({ totalQuestions }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 8;
      });
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const CurrentIcon = LOADING_MESSAGES[messageIndex].icon;

  return (
    <div className="text-center space-y-12 py-24 animate-in fade-in zoom-in-95">
      {/* Spinner principal */}
      <div className="relative inline-flex">
        {/* Cercle externe */}
        <div className="w-40 h-40 md:w-48 md:h-48 border-[12px] border-white/5 border-t-blue-500 rounded-full animate-spin shadow-[0_0_80px_rgba(59,130,246,0.3)]" />

        {/* Cercle interne (rotation inverse) */}
        <div className="absolute inset-4 w-32 h-32 md:w-40 md:h-40 border-4 border-white/5 border-b-indigo-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />

        {/* Icône centrale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 rounded-full p-4 backdrop-blur-sm">
          <Zap className="w-10 h-10 md:w-12 md:h-12 text-blue-400 animate-pulse" />
        </div>

        {/* Points orbitaux */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50" />
        </div>
      </div>

      {/* Contenu texte */}
      <div className="space-y-6 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
          Analyse de vos {totalQuestions} réponses...
        </h2>

        {/* Barre de progression */}
        <div className="max-w-md mx-auto">
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500 progress-bar"
              style={{ width: `${Math.min(progress, 95)}%` }}
            />
          </div>
          <p className="text-blue-400 text-sm font-bold mt-2">{Math.round(Math.min(progress, 95))}%</p>
        </div>

        {/* Message dynamique */}
        <div className="flex items-center justify-center gap-3 text-blue-200/80 font-bold text-lg md:text-xl animate-in fade-in duration-500" key={messageIndex}>
          <CurrentIcon className="w-5 h-5 text-blue-400" />
          <p>{LOADING_MESSAGES[messageIndex].text}</p>
        </div>

        {/* Citation */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic opacity-70 mt-8">
          "L'IA Gemini construit votre profil psychométrique et identifie vos leviers de réussite."
        </p>
      </div>

      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-indigo-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Loading;
