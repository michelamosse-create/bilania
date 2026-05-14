"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ClipboardCheck, Sparkles, ArrowRight, CheckCircle2, Target, Briefcase,
  Eye, Trophy, Zap, ChevronRight, ExternalLink, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { BigFiveBars } from "@/components/results/PersonalityRadar";
import { FreeResult } from "@/types";

const RESULT_KEY = "bilania_free_result";

const affinityLabels: Record<string, { label: string; color: string }> = {
  beginner: { label: "Débutant", color: "text-amber-600 bg-amber-50 border-amber-200" },
  intermediate: { label: "Intermédiaire", color: "text-blue-600 bg-blue-50 border-blue-200" },
  advanced: { label: "Avancé", color: "text-green-600 bg-green-50 border-green-200" },
  expert: { label: "Expert", color: "text-blue-600 bg-blue-50 border-blue-200" },
};

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<FreeResult | null>(null);
  const [showPremium, setShowPremium] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(RESULT_KEY);
    if (!stored) { router.push("/assessment"); return; }
    try { setResult(JSON.parse(stored)); } catch { router.push("/assessment"); }
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  const affinity = affinityLabels[result.digitalAffinity] || affinityLabels.beginner;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg"><ClipboardCheck className="w-5 h-5 text-white" /></div>
            <span className="font-bold text-xl text-slate-800">Bilan<span className="text-blue-600">IA</span></span>
          </Link>
          <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 bg-blue-50">Résultat gratuit</Badge>
        </div>
      </header>

      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5" /><span className="text-blue-100 text-sm font-medium">Analyse IA complétée</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {result.profileType}
              </h1>
              <p className="text-blue-50 text-lg leading-relaxed opacity-90">{result.summary}</p>
            </div>

            <CardContent className="p-8 space-y-8">
              {/* Big Five bars */}
              {result.bigFive && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" /> Traits de personnalité — Big Five
                </h2>
                <BigFiveBars data={result.bigFive} />
              </div>
              )}

              {/* Affinity */}
              <div className="flex flex-col sm:flex-row gap-6 items-center bg-slate-50 rounded-2xl p-6">
                <div className="text-center">
                  <Badge className={`text-sm px-4 py-1.5 rounded-full border ${affinity.color}`}>{affinity.label}</Badge>
                  <p className="text-xs text-slate-500 mt-2">Affinité numérique</p>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Potentiel détecté</span>
                    <span className="font-bold text-blue-600">
                      {result.digitalAffinity === "advanced" || result.digitalAffinity === "expert" ? "Élevé" : result.digitalAffinity === "intermediate" ? "Bon" : "À développer"}
                    </span>
                  </div>
                  <Progress value={result.digitalAffinity === "expert" ? 90 : result.digitalAffinity === "advanced" ? 75 : result.digitalAffinity === "intermediate" ? 50 : 30} className="h-2.5" />
                </div>
              </div>

              {/* Strengths / Weaknesses */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-2 mb-3"><Trophy className="w-5 h-5 text-green-600" /><h3 className="font-bold text-green-800">Force principale</h3></div>
                  <p className="text-green-700">{result.topStrength}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <div className="flex items-center gap-2 mb-3"><Target className="w-5 h-5 text-amber-600" /><h3 className="font-bold text-amber-800">Axe de progression</h3></div>
                  <p className="text-amber-700">{result.topWeakness}</p>
                </div>
              </div>

              {/* Teaser Career */}
              <div className="border border-blue-200 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Métier recommandé</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{result.teaserCareer.title}</h3>
                      {result.teaserCareer.rome && (
                        <a href={`https://www.francetravail.fr/fiche-metier/${result.teaserCareer.rome.toLowerCase()}.html`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{result.teaserCareer.description}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-slate-500">Pertinence : <strong className="text-blue-600">{result.teaserCareer.relevance}</strong></span>
                      <span className="text-slate-500">Salaire : <strong className="text-slate-700">{result.teaserCareer.salary_range}</strong></span>
                      <span className="text-slate-500">Code ROME : <strong className="text-slate-700">{result.teaserCareer.rome}</strong></span>
                    </div>
                  </div>
                  <div className="text-center shrink-0 ml-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{result.teaserCareer.matchingScore}%</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">match</p>
                  </div>
                </div>
              </div>

              {/* Premium Section */}
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                    <Zap className="w-6 h-6 text-yellow-300 mb-2" />
                    <h2 className="text-xl font-bold">Obtenez votre bilan de compétences complet</h2>
                    <p className="text-blue-100 text-sm mt-1">Voici ce que vous allez débloquer :</p>
                  </div>

                  {/* Visual previews */}
                  <div className="p-6 space-y-5">
                    {/* 1. Personality charts preview */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="flex items-start gap-4">
                        <div className="flex-grow">
                          <div className="font-bold text-slate-800 text-sm mb-1">Profil de personnalité complet (Big Five + RIASEC)</div>
                          <div className="text-slate-500 text-xs mb-2 leading-relaxed">Découvrez votre archétype parmi 12 profils. Visualisez vos 5 traits de personnalité et vos 6 types d'intérêts avec des graphiques radar.</div>
                          <div className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-full">Valeur : 150€ en cabinet</div>
                        </div>
                        <div className="shrink-0 hidden sm:block">
                          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-80">
                            <polygon points="50,10 72,35 65,65 35,65 28,35" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="1.5"/>
                            <polygon points="50,20 65,35 60,55 40,55 32,35" fill="rgba(37,99,235,0.3)" stroke="#2563eb" stroke-width="1.5"/>
                            <circle cx="50" cy="20" r="2" fill="#2563eb"/>
                            <circle cx="65" cy="35" r="2" fill="#2563eb"/>
                            <circle cx="60" cy="55" r="2" fill="#2563eb"/>
                            <circle cx="40" cy="55" r="2" fill="#2563eb"/>
                            <circle cx="32" cy="35" r="2" fill="#2563eb"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* 2. Domain scores preview */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="font-bold text-slate-800 text-sm mb-2">10 scores de compétences détaillés</div>
                      <div className="space-y-1.5">
                        {["Soft Skills","Hard Skills","Valeurs","Environnement","Culture Num.","Connaiss. IA","Programmation","Métiers Tech","Adaptabilité","Psychologie"].map((label, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <span className="w-20 text-slate-500 truncate">{label}</span>
                            <div className="flex-grow bg-slate-200 rounded-full h-1.5">
                              <div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${40 + Math.random()*50}%`}}/>
                            </div>
                            <span className="text-blue-600 font-bold w-6 text-right">?</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-full mt-2">110 questions • 10 domaines</div>
                    </div>

                    {/* 3. Career cards preview */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="font-bold text-slate-800 text-sm mb-2">5 métiers recommandés avec fiches ROME</div>
                      <div className="space-y-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex items-center justify-between bg-white rounded-lg p-2.5 text-xs border border-slate-100">
                            <div>
                              <span className="font-semibold text-slate-700">Métier #{i}</span>
                              <span className="text-slate-300 ml-2">—</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-300">ROME: ?</span>
                              <span className="bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full">??%</span>
                            </div>
                          </div>
                        ))}
                        <div className="text-center text-xs text-slate-400">+ 2 autres métiers débloqués</div>
                      </div>
                      <div className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-full mt-2">Avec salaire, tendance marché et parcours de formation</div>
                    </div>

                    {/* 4. Other benefits compact */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: "PenTool", title: "Analyse rédactionnelle", sub: "6 réponses analysées" },
                        { icon: "FileText", title: "Analyse du CV", sub: "Croisement parcours × profil" },
                        { icon: "GraduationCap", title: "Formations CPF", sub: "3 formations avec code RS" },
                        { icon: "BookOpen", title: "Rapport PDF", sub: "10+ pages à télécharger" },
                      ].map((item, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                          <div className="text-lg">{item.icon}</div>
                          <div className="font-bold text-slate-800 text-xs mt-1">{item.title}</div>
                          <div className="text-slate-400 text-xs">{item.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center mb-4">
                      <div className="text-xs text-amber-700 font-medium">Un bilan de compétences en cabinet coûte 200€ à 2000€</div>
                      <div className="text-4xl font-black text-slate-900 mt-1">9,90 €</div>
                      <div className="text-sm text-slate-500">paiement unique • accès à vie • résultats immédiats</div>
                    </div>

                    <Button onClick={() => setShowPremium(true)} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-bold text-lg py-6 shadow-lg shadow-blue-200">
                      Obtenir mon bilan complet pour 9,90 € <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-xs text-slate-400 text-center mt-3">Paiement sécurisé Stripe • Accès immédiat après paiement</p>

                    <div className="mt-6 pt-4 border-t-2 border-slate-200">
                      <p className="text-sm font-bold text-slate-800 text-center mb-3">Vous avez un code promo ?</p>
                      <PromoCodeInput onSuccess={() => router.push('/assessment/full')} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {showPremium && <UpgradeDialog onClose={() => setShowPremium(false)} />}
    </div>
  );
}

function UpgradeDialog({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    if (!email || !email.includes("@")) { toast.error("Veuillez entrer un email valide."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else toast.error("Erreur lors de la création du paiement.");
    } catch { toast.error("Erreur de connexion."); }
    setLoading(false);
  };
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4"><Zap className="w-4 h-4" /> Premium</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Débloquez votre bilan complet</h2>
          <p className="text-slate-500 text-sm">Entrez votre email pour accéder au paiement sécurisé.</p>
        </div>
        <div className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800" />
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm">Inclus :</h4>
            <ul className="space-y-1.5">
              {["90 questions sur 10 domaines","Profil de personnalité complet","5 métiers avec fiches ROME","Analyse de votre CV par IA","Formations CPF éligibles","Rapport PDF complet"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <Button onClick={handleCheckout} disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-bold text-lg py-6 shadow-lg shadow-blue-200">
            {loading ? "Redirection vers Stripe..." : <>Payer 9,90 € <ArrowRight className="w-5 h-5 ml-2" /></>}
          </Button>
          <button onClick={onClose} className="w-full text-center text-sm text-slate-400 hover:text-slate-600 py-2">Peut-être plus tard</button>
        </div>
      </div>
    </div>
  );
}

function PromoCodeInput({ onSuccess }: { onSuccess: () => void }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValidate = async () => {
    if (!code.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/validate-code", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: code.trim() }) });
      const data = await res.json();
      if (data.valid) {
        sessionStorage.setItem("bilania_promo_used", "true");
        toast.success("Code valide ! Accès premium activé.");
        onSuccess();
      } else {
        toast.error(data.error || "Code invalide.");
      }
    } catch { toast.error("Erreur de validation."); }
    setLoading(false);
  };

  return (
    <div className="bg-slate-100 rounded-xl p-4 border-2 border-dashed border-slate-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🎁</span>
        <span className="font-bold text-slate-700 text-sm">Code promo</span>
        <span className="text-xs text-slate-400">— accès gratuit au bilan complet</span>
      </div>
      <div className="flex gap-2">
        <input type="text" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="Entrez votre code ici"
          className="flex-grow px-4 py-3 rounded-xl bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-400 font-medium text-center uppercase tracking-wider outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          onKeyDown={(e) => e.key === "Enter" && handleValidate()} />
        <button onClick={handleValidate} disabled={loading || !code.trim()} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm">
          {loading ? "..." : "Valider"}
        </button>
      </div>
    </div>
  );
}
