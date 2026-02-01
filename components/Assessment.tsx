import React from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Question, UserAnswers } from '../types';

interface AssessmentProps {
  currentQuestion: Question;
  currentIdx: number;
  totalQuestions: number;
  progress: number;
  answers: UserAnswers;
  onSingleAnswer: (value: any) => void;
  onMultiAnswer: (value: string) => void;
  onTextChange: (value: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canGoNext: boolean;
}

const Assessment: React.FC<AssessmentProps> = ({
  currentQuestion,
  currentIdx,
  totalQuestions,
  progress,
  answers,
  onSingleAnswer,
  onMultiAnswer,
  onTextChange,
  onPrevious,
  onNext,
  onSubmit,
  canGoNext,
}) => {
  const isLastQuestion = currentIdx === totalQuestions - 1;

  return (
    <div className="bg-slate-900/95 shadow-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 animate-in zoom-in-95 duration-500 max-w-4xl mx-auto">
      <div className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">
              Question {currentIdx + 1} / {totalQuestions}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
              {currentQuestion.partTitle}
            </h3>
          </div>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
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
              placeholder={currentQuestion.placeholder || 'Répondez ici...'}
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => onTextChange(e.target.value)}
            />
          ) : (
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
              {currentQuestion.options?.map((opt) => {
                const isSelected =
                  currentQuestion.type === 'multi'
                    ? (answers[currentQuestion.id] || []).includes(opt.value)
                    : answers[currentQuestion.id] === opt.value;

                return (
                  <button
                    key={String(opt.value)}
                    onClick={() =>
                      currentQuestion.type === 'multi'
                        ? onMultiAnswer(String(opt.value))
                        : onSingleAnswer(opt.value)
                    }
                    className={`p-5 md:p-6 rounded-2xl border-2 text-left transition-all flex items-center justify-between group relative overflow-hidden ${
                      isSelected
                        ? 'border-blue-500 bg-blue-600/30 text-white shadow-lg shadow-blue-500/10'
                        : 'border-white/5 bg-slate-800/50 hover:border-white/20 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold text-base md:text-lg relative z-10">
                      {opt.label}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? 'border-blue-400 bg-blue-400' : 'border-white/20'
                      }`}
                    >
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
            onClick={onPrevious}
            disabled={currentIdx === 0}
            className="flex items-center gap-2 text-white/30 font-black uppercase text-[10px] tracking-widest hover:text-white disabled:opacity-0 transition-all"
          >
            <ChevronLeft className="w-5 h-5" /> Précédent
          </button>
          <button
            onClick={isLastQuestion ? onSubmit : onNext}
            disabled={!canGoNext}
            className={`px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center gap-4 ${
              canGoNext
                ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-500 hover:scale-105'
                : 'bg-white/5 text-white/10 cursor-not-allowed border border-white/10'
            }`}
          >
            {isLastQuestion ? "Lancer l'analyse IA" : 'Suivant'}{' '}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
