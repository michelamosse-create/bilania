import React from 'react';
import { Zap } from 'lucide-react';

interface LoadingProps {
  totalQuestions: number;
}

const Loading: React.FC<LoadingProps> = ({ totalQuestions }) => {
  return (
    <div className="text-center space-y-12 py-24 animate-in fade-in zoom-in-95">
      <div className="relative inline-flex">
        <div className="w-40 h-40 md:w-48 md:h-48 border-[12px] border-white/5 border-t-blue-500 rounded-full animate-spin shadow-[0_0_80px_rgba(59,130,246,0.3)]" />
        <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 text-blue-400 animate-pulse" />
      </div>
      <div className="space-y-4 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
          Analyse de vos {totalQuestions} réponses...
        </h2>
        <p className="text-blue-200/80 font-bold text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed italic opacity-80">
          "L'IA Gemini construit votre profil psychométrique et identifie vos leviers de réussite."
        </p>
      </div>
    </div>
  );
};

export default Loading;
