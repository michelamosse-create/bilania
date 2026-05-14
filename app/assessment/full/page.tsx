"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import {
  ClipboardCheck, ChevronRight, ChevronLeft, Loader2, Sparkles, Zap, FileText, Upload, X, Pencil, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PREMIUM_QUESTIONS, FREE_QUESTIONS, QUESTION_CATEGORIES, OPEN_ENDED_QUESTIONS, EXTENDED_OPEN_QUESTIONS } from "@/constants/questions";
import { createClient } from "@/lib/supabase/client";

const RESULT_KEY = "bilania_free_result";
const FULL_RESULT_KEY = "bilania_full_result";

type Step = 'cv' | 'open' | 'scale' | 'loading';

export default function FullAssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('cv');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvText, setCvText] = useState<string>("");
  const [openIndex, setOpenIndex] = useState(0);
  const [openAnswers, setOpenAnswers] = useState<Record<string, string>>({});
  const [scaleIndex, setScaleIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setCvFile(acceptedFiles[0]);
      const reader = new FileReader();
      reader.onload = (e) => setCvText(e.target?.result as string || "");
      reader.readAsText(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept: { "application/pdf": [".pdf"] }, maxFiles: 1, maxSize: 10 * 1024 * 1024,
  });

  useEffect(() => {
    const hasPromo = sessionStorage.getItem("bilania_promo_used");
    if (hasPromo === "true") {
      const stored = sessionStorage.getItem(RESULT_KEY);
      if (stored) { try { setAnswers(JSON.parse(stored)); } catch {} }
      setIsAuthorized(true); setChecking(false); return;
    }
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push("/"); return; }
      supabase.from("profiles").select("tier").eq("email", user.email).single().then(({ data }) => {
        if (data?.tier === "premium") {
          const stored = sessionStorage.getItem(RESULT_KEY);
          if (stored) { try { setAnswers(JSON.parse(stored)); } catch {} }
          setIsAuthorized(true);
        } else { router.push("/results"); }
        setChecking(false);
      });
    });
  }, [router]);

  const handleSubmit = async () => {
    setStep('loading'); setError(null); setSubmitting(true);
    try {
      const allAnswers = { ...answers };
      const res = await fetch("/api/full-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: allAnswers, openAnswers, cvText }),
      });
      if (!res.ok) throw new Error("Erreur API");
      const data = await res.json();
      sessionStorage.setItem(FULL_RESULT_KEY, JSON.stringify(data));
      router.push("/results/full");
    } catch (err) {
      console.error(err); setError("Erreur. Veuillez réessayer."); setStep('scale');
    } finally { setSubmitting(false); }
  };

  if (checking) return <div className="min-h-screen flex items-center justify-center"><div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" /></div>;
  if (!isAuthorized) return null;

  const allOpen = [...OPEN_ENDED_QUESTIONS, ...EXTENDED_OPEN_QUESTIONS];
  const totalOpen = allOpen.length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg"><ClipboardCheck className="w-5 h-5 text-white" /></div>
            <span className="font-bold text-xl text-slate-800">Bilan<span className="text-blue-600">IA</span></span>
          </Link>
          <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0"><Zap className="w-3 h-3 mr-1" /> Premium</Badge>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {step === 'cv' && (
            <Card className="border-blue-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><FileText className="w-8 h-8 text-blue-600" /></div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Importez votre CV</h2>
                  <p className="text-slate-500 text-sm">Notre IA analysera votre parcours pour des recommandations plus précises. Vous pouvez sauter cette étape.</p>
                </div>
                <div {...getRootProps()} className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer mb-6 ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                  <input {...getInputProps()} />
                  {cvFile ? (
                    <div className="space-y-3">
                      <FileText className="w-10 h-10 text-blue-500 mx-auto" />
                      <p className="font-medium text-slate-700">{cvFile.name}</p>
                      <p className="text-xs text-slate-400">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      <button onClick={(e) => { e.stopPropagation(); setCvFile(null); setCvText(""); }} className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 mx-auto"><X className="w-3 h-3" /> Supprimer</button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Upload className="w-10 h-10 text-slate-300 mx-auto" />
                      <p className="font-medium text-slate-700">Glissez-déposez votre CV (PDF)</p>
                      <p className="text-xs text-slate-400">Max 10 MB</p>
                      <Button variant="outline" className="rounded-full" onClick={(e) => e.stopPropagation()}>Parcourir</Button>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => setStep('open')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">Continuer <ChevronRight className="w-4 h-4 ml-2" /></Button>
                  <Button variant="ghost" onClick={() => setStep('open')} className="text-slate-400 rounded-full">Sauter cette étape</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 'open' && (
            <Card className="border-blue-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10" />
                  <div className="flex flex-col items-center flex-grow">
                    <Progress value={((openIndex + 1) / OPEN_ENDED_QUESTIONS.length) * 100} className="w-full h-2" />
                    <span className="text-xs font-medium text-slate-400 mt-2">Question ouverte {openIndex + 1}/{totalOpen}</span>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 shrink-0"><MessageSquare className="w-3 h-3 mr-1" /> Rédaction</Badge>
                </div>
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-800 text-center">{allOpen[openIndex].text}</h2>
                  <textarea
                    value={openAnswers[allOpen[openIndex].id] || ''}
                    onChange={(e) => setOpenAnswers(prev => ({ ...prev, [allOpen[openIndex].id]: e.target.value }))}
                    placeholder={allOpen[openIndex].placeholder}
                    className="w-full h-40 p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-none text-slate-700"
                  />
                  <div className="flex justify-center">
                    <Button onClick={() => openIndex < totalOpen - 1 ? setOpenIndex(i => i + 1) : setStep('scale')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                      {openIndex < totalOpen - 1 ? <>Question suivante <ChevronRight className="w-4 h-4 ml-2" /></> : <>Commencer le questionnaire <ChevronRight className="w-4 h-4 ml-2" /></>}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 'scale' && (
            <Card className="border-blue-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex flex-col items-center w-full">
                    <Progress value={((scaleIndex + 1) / PREMIUM_QUESTIONS.length) * 100} className="w-full h-2" />
                    <div className="flex items-center justify-between w-full mt-2">
                      <span className="text-xs font-medium text-slate-400">Q. {scaleIndex + 1}/{PREMIUM_QUESTIONS.length}</span>
                      <span className="text-xs text-blue-500 font-medium">{QUESTION_CATEGORIES[PREMIUM_QUESTIONS[scaleIndex]?.category]?.icon} {QUESTION_CATEGORIES[PREMIUM_QUESTIONS[scaleIndex]?.category]?.label}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center">{PREMIUM_QUESTIONS[scaleIndex].text}</h2>
                  <div className="grid gap-3">
                    {PREMIUM_QUESTIONS[scaleIndex].options.map((opt) => (
                      <button key={opt.value} onClick={() => setAnswers(prev => ({ ...prev, [PREMIUM_QUESTIONS[scaleIndex].id]: opt.value }))}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${answers[PREMIUM_QUESTIONS[scaleIndex].id] === opt.value ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 hover:border-blue-200 text-slate-600'}`}
                      >
                        <span className="font-medium">{opt.label}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[PREMIUM_QUESTIONS[scaleIndex].id] === opt.value ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                          {answers[PREMIUM_QUESTIONS[scaleIndex].id] === opt.value && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</p>}
                  <div className="flex justify-center pt-4">
                    <Button onClick={() => scaleIndex < PREMIUM_QUESTIONS.length - 1 ? setScaleIndex(i => i + 1) : handleSubmit()}
                      disabled={!answers[PREMIUM_QUESTIONS[scaleIndex].id]}
                      className={`px-10 py-6 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 ${answers[PREMIUM_QUESTIONS[scaleIndex].id] ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    >
                      {scaleIndex < PREMIUM_QUESTIONS.length - 1 ? <>Suivant <ChevronRight className="w-5 h-5" /></> : 'Analyser mes résultats'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 'loading' && (
            <div className="text-center space-y-8">
              <div className="relative inline-block"><div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" /><Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-600 animate-pulse" /></div>
              <h2 className="text-3xl font-bold text-slate-900">Analyse approfondie en cours...</h2>
              <p className="text-slate-500">Notre IA analyse votre CV, vos réponses rédactionnelles et votre questionnaire pour créer votre profil personnalisé.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
