"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import {
  ClipboardCheck,
  Upload,
  FileText,
  Loader2,
  Sparkles,
  CheckCircle2,
  Target,
  Briefcase,
  Brain,
  Zap,
  ArrowRight,
  X,
  GraduationCap,
  TrendingUp,
  Clock,
  Euro,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { CVAnalysis } from "@/types";

const FULL_RESULT_KEY = "bilania_full_result";

export default function CVUploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<CVAnalysis | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push("/"); return; }
      supabase.from("profiles").select("tier").eq("email", user.email).single().then(({ data }) => {
        if (data?.tier !== "premium") { router.push("/dashboard"); return; }
        setIsAuthorized(true);
        setChecking(false);
      });
    });
  }, [router]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setAnalysis(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const storedResult = sessionStorage.getItem(FULL_RESULT_KEY);
      const profile = storedResult ? JSON.parse(storedResult) : null;

      const formData = new FormData();
      formData.append("cv", file);
      formData.append(
        "profile",
        profile
          ? JSON.stringify({ profileType: profile.profileType, summary: profile.summary })
          : "Profil non disponible"
      );

      const res = await fetch("/api/cv-analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Erreur analyse CV");

      const data = await res.json();
      setAnalysis(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Bilan<span className="text-blue-600">IA</span>
            </span>
          </Link>
          <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
            <Zap className="w-3 h-3 mr-1" /> Premium
          </Badge>
        </div>
      </header>

      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Analyse de CV</h1>
            <p className="text-slate-500 mt-1">
              Importez votre CV (PDF). Notre IA le croise avec votre bilan de compétences.
            </p>
          </div>

          {/* Upload Zone */}
          {!analysis && (
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                    isDragActive
                      ? "border-blue-400 bg-blue-50"
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <input {...getInputProps()} />
                  {file ? (
                    <div className="space-y-4">
                      <FileText className="w-12 h-12 text-blue-500 mx-auto" />
                      <p className="font-medium text-slate-700">{file.name}</p>
                      <p className="text-sm text-slate-400">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 mx-auto"
                      >
                        <X className="w-3 h-3" /> Supprimer
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 text-slate-300 mx-auto" />
                      <div>
                        <p className="font-medium text-slate-700">
                          Glissez-déposez votre CV ici
                        </p>
                        <p className="text-sm text-slate-400 mt-1">
                          Format PDF uniquement : Max 10 MB
                        </p>
                      </div>
                      <Button variant="outline" className="rounded-full">
                        Parcourir mes fichiers
                      </Button>
                    </div>
                  )}
                </div>

                {file && (
                  <div className="flex justify-center mt-6">
                    <Button
                      onClick={handleAnalyze}
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 font-bold shadow-lg shadow-blue-200"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Analyse en cours...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Analyser mon CV
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="border-blue-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Analyse de votre CV</h2>
                  <p className="text-blue-100">{analysis.summary}</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Compétences clés
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {analysis.keySkills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-amber-500" />
                        Niveau d&apos;expérience
                      </h3>
                      <Badge className="text-sm px-4 py-1.5 bg-amber-100 text-amber-700 border-amber-200">
                        {analysis.experienceLevel}
                      </Badge>
                      <p className="text-sm text-slate-600 mt-2">{analysis.educationMatch}</p>
                    </div>
                  </div>

                  {analysis.recommendations.length > 0 && (
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3">Recommandations</h3>
                      <ul className="space-y-2">
                        {analysis.recommendations.map((r, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-600">
                            <Sparkles className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Matching careers */}
                  {analysis.matchingCareers.length > 0 && (
                    <div>
                      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        Métiers recommandés après croisement CV
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {analysis.matchingCareers.map((career, i) => (
                          <Card key={i} className="border-slate-200">
                            <CardContent className="p-4">
                              <h4 className="font-bold text-slate-800 text-sm">{career.title}</h4>
                              <p className="text-slate-500 text-xs mt-1">{career.description}</p>
                              <div className="flex gap-4 mt-3 text-xs">
                                <span className="text-blue-600 font-bold">{career.relevance}</span>
                                <span className="text-slate-500">{career.salary_range}</span>
                                <span className="text-blue-600 font-bold">{career.matchingScore}%</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching formations */}
                  {analysis.matchingFormations.length > 0 && (
                    <div>
                      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-500" />
                        Formations CPF recommandées
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {analysis.matchingFormations.map((formation, i) => (
                          <Card key={i} className="border-slate-200">
                            <CardContent className="p-4">
                              <h4 className="font-bold text-slate-800 text-sm">{formation.title}</h4>
                              <p className="text-slate-500 text-xs mt-1">{formation.description}</p>
                              <div className="flex gap-3 mt-2 text-xs text-slate-500">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formation.duration}</span>
                                <span className="flex items-center gap-1"><Euro className="w-3 h-3" /> {formation.cost}</span>
                                <span className="text-blue-600 font-bold">{formation.matchingScore}%</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => { setFile(null); setAnalysis(null); }}
                  className="rounded-full"
                >
                  Analyser un autre CV
                </Button>
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Retour au dashboard
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
