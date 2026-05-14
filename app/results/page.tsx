"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ClipboardCheck, Sparkles, ArrowRight, CheckCircle2, Target, Briefcase,
  Eye, Trophy, Zap, ChevronRight, ExternalLink, Brain, ChartBar
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
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" /> Traits de personnalité — Big Five
                </h2>
                <BigFiveBars data={result.bigFive} />
              </div>

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

              {/* Hidden careers + CTA */}
              <div className="text-center space-y-4">
                <p className="text-slate-500 text-sm">
                  L&apos;IA a identifié <strong className="text-blue-600">{result.hiddenCareersCount} autres métiers</strong> + votre profil de personnalité complet + vos formations CPF.
                </p>

                <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-200">
                  <div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-yellow-300" /><span className="text-blue-100 text-sm font-semibold">PREMIUM</span></div>
                  <h2 className="text-2xl font-bold mb-2">Débloquez votre analyse complète</h2>
                  <p className="text-blue-100 text-sm mb-6">90 questions • 5 métiers avec fiches ROME • Personnalité complète • Formations CPF • Rapport PDF</p>
                  <div className="text-3xl font-bold mb-6">9,90 € <span className="text-sm font-normal text-blue-200">paiement unique</span></div>
                  <Button onClick={() => setShowPremium(true)} className="w-full bg-white text-blue-700 hover:bg-blue-50 rounded-full font-bold text-lg py-6 shadow-lg">
                    Débloquer mon rapport complet<ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-blue-200 text-xs text-center mt-3">Paiement sécurisé via Stripe. Accès immédiat.</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <PromoCodeInput onSuccess={() => router.push('/assessment/full')} />
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
  const [showInput, setShowInput] = useState(false);

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

  if (!showInput) return (
    <button onClick={() => setShowInput(true)} className="w-full text-center text-sm text-blue-200 hover:text-white transition-colors py-2 underline underline-offset-4">
      Vous avez un code promo ?
    </button>
  );

  return (
    <div className="flex gap-2">
      <input type="text" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="BILANIA-XXXX-XXXX"
        className="flex-grow px-4 py-2.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/50 text-sm text-center uppercase tracking-wider outline-none focus:bg-white/30 transition-all"
        onKeyDown={(e) => e.key === "Enter" && handleValidate()} />
      <button onClick={handleValidate} disabled={loading || !code.trim()} className="px-4 py-2.5 bg-white text-blue-700 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all disabled:opacity-50">
        {loading ? "..." : "OK"}
      </button>
    </div>
  );
}
