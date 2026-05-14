"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ClipboardCheck, Sparkles, CheckCircle2, Target, Briefcase, Trophy, Zap,
  Download, TrendingUp, GraduationCap, Clock, Euro, Upload, ExternalLink,
  Brain, ChartBar, Users, Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "@/types";
import { BigFiveRadar, BigFiveBars, RiasecHexagon, RiasecBars } from "@/components/results/PersonalityRadar";

const FULL_RESULT_KEY = "bilania_full_result";

import ExportPDFButton from '@/components/results/ExportPDF';

function romeUrl(code: string) {
  return `https://candidat.francetravail.fr/metierscope/fiche-metier/${code}`;
}

function rsUrl(rsCode: string) {
  const num = rsCode.replace(/\D/g, '');
  return `https://www.francecompetences.fr/recherche/?query=${num}`;
}

export default function FullResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(FULL_RESULT_KEY);
    if (!stored) { router.push("/dashboard"); return; }
    try { setResult(JSON.parse(stored)); } catch { router.push("/dashboard"); }
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg"><ClipboardCheck className="w-5 h-5 text-white" /></div>
            <span className="font-bold text-xl text-slate-800">Bilan<span className="text-blue-600">IA</span></span>
          </Link>
          <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
            <Zap className="w-3 h-3 mr-1" /> Premium
          </Badge>
        </div>
      </header>

      <main className="flex-grow py-8 px-4">
        <div id="report-content" className="max-w-5xl mx-auto space-y-8">

          {/* Hero */}
          <Card className="border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5" /><span className="text-blue-100 text-sm font-medium">Rapport Premium</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {result.profileType}
              </h1>
              <p className="text-blue-50/90 text-lg leading-relaxed">{result.summary}</p>
            </div>

            <CardContent className="p-8 space-y-10">
              {/* Big Five + RIASEC */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" /> Personnalité : Big Five
                  </h2>
                  <BigFiveRadar data={result.bigFive} />
                  <div className="mt-4">
                    <BigFiveBars data={result.bigFive} />
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" /> Intérêts : RIASEC
                  </h2>
                  <RiasecHexagon data={result.riasec} />
                  <div className="mt-4">
                    <RiasecBars data={result.riasec} />
                  </div>
                </div>
              </div>

              {/* Domain Scores */}
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <ChartBar className="w-5 h-5 text-blue-600" /> Scores par domaine
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {result.domainScores.map((d) => (
                    <div key={d.domain} className="bg-white rounded-xl p-4 border border-slate-100">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700 text-sm">{d.label}</span>
                        <span className="text-sm font-bold text-blue-600">{d.score}/{d.maxScore}</span>
                      </div>
                      <Progress value={(d.score / d.maxScore) * 100} className="h-2 mb-2" />
                      <p className="text-xs text-slate-500">{d.interpretation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths + Improvements */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="font-bold text-green-800 text-lg mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-green-600" /> Forces
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="flex gap-2 text-green-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600" /> À développer
                  </h3>
                  <ul className="space-y-2">
                    {result.areasForImprovement.map((a, i) => (
                      <li key={i} className="flex gap-2 text-amber-700 text-sm">
                        <Target className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Career Suggestions */}
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" /> 5 métiers recommandés
                </h2>
                <div className="space-y-4">
                  {result.careerSuggestions.map((career, i) => (
                    <Card key={i} className={`border-slate-200 hover:shadow-md transition-all ${i === 0 ? 'ring-2 ring-blue-200 border-blue-300' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              {i === 0 && <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">Top match</Badge>}
                              <h3 className="font-bold text-lg text-slate-900">{career.title}</h3>
                              <a href={romeUrl(career.rome)} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-xs">
                                <ExternalLink className="w-3 h-3" /> Fiche ROME
                              </a>
                            </div>
                            <p className="text-slate-600 text-sm mb-3">{career.description}</p>
                            {career.skillsMatch && (
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {career.skillsMatch.map((skill, j) => (
                                  <Badge key={j} variant="outline" className="text-xs border-blue-200 bg-blue-50 text-blue-700">{skill}</Badge>
                                ))}
                              </div>
                            )}
                            {career.formationPath && (
                              <p className="text-xs text-slate-400 flex items-center gap-1">
                                <GraduationCap className="w-3 h-3" /> {career.formationPath}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-6 shrink-0">
                            <div className="text-center">
                              <div className="text-xs text-slate-400">Salaire</div>
                              <div className="font-bold text-slate-700 text-sm">{career.salary_range}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-slate-400">Tendance</div>
                              <div className="font-bold text-green-600 text-sm flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />{career.trend}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border-2 border-blue-200">
                                <span className="text-xl font-black text-blue-600">{career.matchingScore}%</span>
                              </div>
                              <div className="text-xs text-slate-400 mt-1">match</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CPF Formations */}
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" /> Formations CPF recommandées
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {result.cpfFormations.map((f, i) => (
                    <Card key={i} className="border-slate-200 hover:border-blue-200 transition-all">
                      <CardContent className="p-5">
                        <h3 className="font-bold text-slate-900 text-sm mb-2">{f.title}</h3>
                        <p className="text-slate-500 text-xs mb-3">{f.description}</p>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between"><span className="text-slate-400">Durée</span><span className="font-medium">{f.duration}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Coût</span><span className="font-medium">{f.cost}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">CPF</span><Badge className="bg-green-100 text-green-700 border-green-200 text-xs">Éligible</Badge></div>
                          <div className="flex justify-between"><span className="text-slate-400">Match</span><span className="font-bold text-blue-600">{f.matchingScore}%</span></div>
                        </div>
                        <a href={rsUrl(f.rsCode)} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs font-medium hover:underline mt-3 inline-flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" /> France Compétences
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t">
                <Link href="/dashboard/cv">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 font-bold">
                    <Upload className="w-4 h-4 mr-2" /> Analyser mon CV
                  </Button>
                </Link>
                <ExportPDFButton />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
