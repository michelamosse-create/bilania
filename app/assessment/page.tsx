"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardCheck,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Sparkles,
  Brain,
  Lock,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { FREE_QUESTIONS, FREE_QUESTIONS_COUNT } from "@/constants/questions";
import Link from "next/link";

const STORAGE_KEY = "bilania_free_answers";
const RESULT_KEY = "bilania_free_result";

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState<"landing" | "questions" | "loading">("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setStep("questions");
    setCurrentIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentIndex < FREE_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setStep("landing");
    }
  };

  const handleSubmit = async () => {
    setStep("loading");
    setError(null);

    try {
      const res = await fetch("/api/quick-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      if (!res.ok) throw new Error("Erreur API");

      const data = await res.json();
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
      sessionStorage.setItem(RESULT_KEY, JSON.stringify(data));
      router.push("/results");
    } catch (err) {
      console.error(err);
      setError("Désolé, une erreur s'est produite. Veuillez réessayer.");
      setStep("questions");
    }
  };

  const progress = ((currentIndex + 1) / FREE_QUESTIONS_COUNT) * 100;
  const currentQuestion = FREE_QUESTIONS[currentIndex];
  const categoryLabels: Record<string, string> = {
    soft_skills: "Soft Skills",
    hard_skills: "Hard Skills",
    values: "Valeurs",
    environment: "Environnement",
    digital_culture: "Numérique",
    ai_knowledge: "IA",
    ai_practice: "IA Pratique",
    programming: "Programmation",
    tech_jobs: "Métiers Tech",
    learning_adaptability: "Adaptabilité",
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Bilan<span className="text-blue-600">IA</span>
            </span>
          </Link>
          <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 bg-blue-50">
            Test gratuit
          </Badge>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {step === "landing" && (
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                  <Sparkles className="w-4 h-4" /> Test d&apos;orientation gratuit
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Découvrez votre{" "}
                  <span className="text-blue-600">profil professionnel</span>
                </h1>
                <p className="text-slate-600 text-lg max-w-xl mx-auto">
                  12 questions pour identifier votre potentiel dans le numérique. Gratuit, sans inscription, en 5 minutes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left">
                {[
                  { Icon: Brain, title: "Analyse IA" },
                  { Icon: Zap, title: "5 minutes" },
                  { Icon: Target, title: "Métier suggéré" },
                  { Icon: Lock, title: "Sans inscription" },
                ].map(({ Icon, title }, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">{title}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleStart}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg px-10 py-6 shadow-lg shadow-blue-200 group"
              >
                Commencer le test gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {step === "questions" && currentQuestion && (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 animate-in zoom-in-95 duration-300">
              {/* Progress */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex flex-col items-center w-full">
                  <Progress value={progress} className="w-full h-2" />
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-medium text-slate-400">
                      Question {currentIndex + 1}/{FREE_QUESTIONS_COUNT}
                    </span>
                    <span className="text-xs text-blue-500 font-medium">
                      {categoryLabels[currentQuestion.category]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center leading-tight">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between group ${
                        answers[currentQuestion.id] === option.value
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          answers[currentQuestion.id] === option.value
                            ? "border-blue-600 bg-blue-600"
                            : "border-slate-300"
                        }`}
                      >
                        {answers[currentQuestion.id] === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-3 rounded-lg">
                    {error}
                  </p>
                )}

                <div className="flex justify-center pt-4">
                  <Button
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                    className={`px-10 py-6 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 transition-all ${
                      answers[currentQuestion.id]
                        ? "bg-blue-600 hover:bg-blue-700 text-white active:scale-95"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    {currentIndex === FREE_QUESTIONS.length - 1
                      ? "Analyser mes résultats"
                      : "Suivant"}
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === "loading" && (
            <div className="text-center space-y-8">
              <div className="relative inline-block">
                <div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-600 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-900">Analyse en cours...</h2>
                <p className="text-slate-500 animate-pulse">
                  L&apos;IA examine vos réponses pour identifier les métiers du numérique qui vous correspondent.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
