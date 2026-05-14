"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ClipboardCheck,
  Sparkles,
  ArrowRight,
  FileText,
  Upload,
  Download,
  Target,
  Briefcase,
  Brain,
  CheckCircle2,
  Lock,
  Zap,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/lib/supabase/client";

const RESULT_KEY = "bilania_free_result";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/");
        return;
      }
      setUser(user);
      // Check if premium
      supabase
        .from("profiles")
        .select("tier")
        .eq("email", user.email)
        .single()
        .then(({ data }) => {
          setIsPremium(data?.tier === "premium");
          setLoading(false);
        });
    });
  }, [router]);

  if (loading) {
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
            <div className="bg-blue-600 p-2 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Bilan<span className="text-blue-600">IA</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge
              className={
                isPremium
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0"
                  : "bg-slate-100 text-slate-600"
              }
            >
              {isPremium ? (
                <>
                  <Zap className="w-3 h-3 mr-1" /> Premium
                </>
              ) : (
                "Gratuit"
              )}
            </Badge>
            <span className="text-sm text-slate-500">{user?.email}</span>
          </div>
        </div>
      </header>

      <main className="flex-grow py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Mon Dashboard</h1>
            <p className="text-slate-500 mt-1">
              {isPremium
                ? "Accédez à votre bilan complet et à vos analyses."
                : "Passez en Premium pour débloquer toutes les fonctionnalités."}
            </p>
          </div>

          {!isPremium && <UpgradeCTA />}

          {isPremium && (
            <Tabs defaultValue="assessment" className="space-y-6">
              <TabsList className="bg-white border border-slate-200 p-1 rounded-xl">
                <TabsTrigger value="assessment" className="rounded-lg">
                  <ClipboardCheck className="w-4 h-4 mr-2" />
                  Bilan complet
                </TabsTrigger>
                <TabsTrigger value="cv" className="rounded-lg">
                  <Upload className="w-4 h-4 mr-2" />
                  Analyse CV
                </TabsTrigger>
                <TabsTrigger value="formations" className="rounded-lg">
                  <Brain className="w-4 h-4 mr-2" />
                  Formations CPF
                </TabsTrigger>
              </TabsList>

              <TabsContent value="assessment">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold text-slate-800">
                      Questionnaire complet : 84 questions
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Passez le bilan intégral sur 10 domaines pour obtenir votre analyse approfondie.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Link href="/assessment/full">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                        Commencer le bilan complet
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cv">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold text-slate-800">
                      Analyse de votre CV
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Importez votre CV pour le croiser avec votre bilan de compétences.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Link href="/dashboard/cv">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Uploader mon CV
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="formations">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold text-slate-800">
                      Formations CPF recommandées
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Découvrez les formations éligibles au CPF qui correspondent à votre profil.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400">
                      Passez d&apos;abord le bilan complet pour voir vos recommandations.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
    </div>
  );
}

function UpgradeCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-200">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <Zap className="w-6 h-6 text-yellow-300" />
            <span className="text-blue-100 font-semibold text-lg">Passez en Premium</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Débloquez votre potentiel
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "Questionnaire complet de 84 questions",
              "Analyse approfondie sur 10 domaines",
              "5 métiers détaillés avec salaires",
              "Analyse de votre CV par IA",
              "Recommandations formations CPF",
              "Rapport PDF exportable",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-blue-100">
                <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="text-3xl font-bold mb-6">
            9,90 € <span className="text-lg font-normal text-blue-200">paiement unique</span>
          </div>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full font-bold text-lg px-10 py-6 shadow-lg">
            Passer en Premium
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
