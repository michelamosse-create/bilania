"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  Sparkles,
  Target,
  Briefcase,
  ArrowRight,
  Brain,
  Code,
  Rocket,
  Shield,
  Check,
  ChevronRight,
  BarChart3,
  Zap,
  Cpu,
  Compass,
  Lightbulb,
  GraduationCap,
  FileText,
  BookOpen,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Bilan<span className="text-blue-600">IA</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
              Comment ça marche
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">
              Offres
            </a>
            <Link href="/assessment">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Test gratuit
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.06),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 text-sm px-4 py-1.5 rounded-full border-blue-200">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Propulsé par l&apos;Intelligence Artificielle
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Révélez votre{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  potentiel
                </span>
              </h1>
              <p className="text-slate-600 text-lg mt-6 leading-relaxed max-w-lg">
                Analysez vos talents et vos motivations grâce à l&apos;intelligence artificielle.
                Obtenez un diagnostic personnalisé et des suggestions de carrière adaptées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/assessment">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg px-8 py-6 shadow-lg shadow-blue-200 group">
                    Faire le test gratuit
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6">
                    En savoir plus
                  </Button>
                </a>
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Sans engagement. Sans carte bancaire. 5 minutes.
              </p>
            </div>
            {/* Hero image from Pexels */}
            <div className="hidden md:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Équipe professionnelle analysant des données"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-800">Analyse par IA</div>
                  <div className="text-xs text-slate-500">Résultats personnalisés immédiats</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un bilan */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Pourquoi faire un bilan de compétences avant de se reconvertir ?
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  <strong className="text-slate-900">70% des reconversions échouent</strong> par manque de préparation.
                  Un bilan de compétences vous permet d&apos;éviter les erreurs coûteuses : choisir un métier qui ne vous correspond pas,
                  vous inscrire à une formation inadaptée, ou perdre du temps dans une voie sans débouchés.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-slate-900">Connaître ses forces et ses motivations profondes</strong> est la première étape.
                  Trop de personnes choisissent un métier sur un coup de tête ou parce que &ldquo;ça recrute&rdquo;, sans se demander
                  si ce métier correspond vraiment à leur personnalité, leurs valeurs et leur style de travail.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-slate-900">Un bilan de compétences traditionnel coûte entre 200€ et 2000€</strong> et prend
                  plusieurs semaines. BilanIA vous donne l&apos;essentiel en 5 minutes pour 0€, et une analyse complète
                  pour 9,90€ — soit 20 à 50 fois moins cher qu&apos;un cabinet classique.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Target, title: "Identifiez vos forces", desc: "Découvrez ce qui vous rend unique et comment le valoriser." },
                { Icon: Compass, title: "Évitez les erreurs", desc: "Ne choisissez pas un métier qui ne vous correspond pas." },
                { Icon: BarChart3, title: "Gagnez du temps", desc: "Ciblez directement les métiers compatibles avec votre profil." },
                { Icon: Lightbulb, title: "Révélez votre potentiel", desc: "L'IA détecte des talents que vous ne soupçonnez pas." },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <Icon className="w-7 h-7 text-blue-600 mb-2" />
                  <div className="font-bold text-slate-800 text-sm mb-1">{title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Comment fonctionne <span className="text-blue-600">BilanIA</span> ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: "1",
                title: "Répondez au test",
                desc: "12 questions sur vos soft skills, vos valeurs et votre environnement de travail idéal. Gratuit, sans inscription.",
                icon: <ClipboardCheck className="w-8 h-8" />,
              },
              {
                step: "2",
                title: "L'IA analyse votre profil",
                desc: "Notre intelligence artificielle évalue vos talents et motivations pour dresser votre portrait professionnel.",
                icon: <Brain className="w-8 h-8" />,
              },
              {
                step: "3",
                title: "Découvrez votre avenir",
                desc: "Métiers recommandés, formations CPF éligibles, et un bilan complémentaire sur les métiers du numérique.",
                icon: <Rocket className="w-8 h-8" />,
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {item.icon}
                </div>
                {i < 2 && (
                  <div className="absolute top-2 left-[calc(50%+2rem)] hidden md:block">
                    <ChevronRight className="w-8 h-8 text-blue-200" />
                  </div>
                )}
                <Badge className="mb-3 bg-blue-600 text-white text-xs">Étape {item.step}</Badge>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with images */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Deux bilans complémentaires
          </h2>
          <p className="text-slate-500 text-center mt-4 max-w-xl mx-auto">
            Un test d'orientation gratuit, et un bilan de compétences complet avec les nouvelles technologies.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Bilan 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop"
                alt="Bilan de compétences"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-blue-100 text-blue-700 border-blue-200">
                  Gratuit
                </Badge>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Test d'orientation</h3>
                <p className="text-slate-500 text-sm mb-4">
                  12 questions rapides sur vos soft skills, vos valeurs et votre environnement de travail.
                  Un premier aperçu de votre profil pour découvrir votre potentiel.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Communication & leadership</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Résolution de problèmes</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Valeurs & motivations</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Environnement de travail idéal</li>
                </ul>
              </div>
            </div>
            {/* Bilan 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-blue-200 overflow-hidden hover:shadow-md transition-shadow relative">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                PREMIUM
              </div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop"
                alt="Nouvelles technologies"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-blue-600 text-white border-blue-600">
                  <Sparkles className="w-3 h-3 mr-1" /> Premium
                </Badge>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Bilan Nouvelles Technologies</h3>
                <p className="text-slate-500 text-sm mb-4">
                  Évaluez votre culture numérique, vos connaissances en IA, en programmation et votre potentiel
                  pour les métiers tech de demain.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Culture numérique & outils</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Connaissances en IA</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Programmation & logique</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Métiers du numérique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rapport premium preview — DESIGN IMPACTANT */}
      <section className="py-24 md:py-32 relative overflow-hidden"><div className="absolute inset-0"><img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"/></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/10">
              Rapport Premium
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Ce que vous allez obtenir</h2>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Un rapport complet, visuel et personnalisé. Pas un PDF générique de 3 pages.
            </p>
          </div>

          {/* Big centered radar */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 shadow-2xl">
              <svg width="340" height="340" viewBox="0 0 200 200">
                {[0.2,0.4,0.6,0.8].map(level => {
                  const pts = [0,1,2,3,4].map(i => {
                    const a = -Math.PI/2 + 2*Math.PI*i/5;
                    return `${100+85*level*Math.cos(a)},${100+85*level*Math.sin(a)}`;
                  }).join(' ');
                  return <polygon key={level} points={pts} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="0.5"/>;
                })}
                <polygon points={[0,1,2,3,4].map(i => {const a=-Math.PI/2+2*Math.PI*i/5;const r=[0.52,0.68,0.44,0.48,0.62][i];return `${100+85*r*Math.cos(a)},${100+85*r*Math.sin(a)}`;}).join(' ')} fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="2"/>
                {[0,1,2,3,4].map(i => {const a=-Math.PI/2+2*Math.PI*i/5;const r=[0.52,0.68,0.44,0.48,0.62][i];return <circle key={i} cx={100+85*r*Math.cos(a)} cy={100+85*r*Math.sin(a)} r="3" fill="#60a5fa"/>;})}
                {['Ouverture','Rigueur','Extraversion','Agréabilité','Stabilité'].map((l,i)=>{const a=-Math.PI/2+2*Math.PI*i/5;return <text key={i} x={100+105*Math.cos(a)} y={100+105*Math.sin(a)} textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#94a3b8" fontWeight="600">{l}</text>;})}
                <text x="100" y="100" textAnchor="middle" dominantBaseline="central" fontSize="22" fontWeight="900" fill="white">Big Five</text>
              </svg>
            </div>
          </div>

          {/* 3 feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { Icon: Target, title: "5 métiers recommandés", desc: "Avec code ROME, fiche France Travail, salaire, tendance marché et score de matching.", color: "border-blue-400/20" },
              { Icon: BarChart3, title: "10 scores de compétences", desc: "Soft skills, hard skills, valeurs, numérique, IA, programmation, adaptabilité et plus.", color: "border-purple-400/20" },
              { Icon: GraduationCap, title: "Formations CPF éligibles", desc: "3 formations finançables avec code RS, organisme, durée, coût et score d'adéquation.", color: "border-emerald-400/20" },
            ].map(({ Icon, title, desc, color }, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur rounded-2xl p-6 border ${color}`}>
                <Icon className="w-8 h-8 text-blue-400 mb-3" />
                <div className="font-bold text-white text-lg mb-2">{title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { v: "110", l: "Questions" },
              { v: "12", l: "Archétypes" },
              { v: "10", l: "Domaines" },
              { v: "PDF", l: "Rapport" },
            ].map((s, i) => (
              <div key={i} className="text-center bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-black text-white">{s.v}</div>
                <div className="text-slate-400 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-400 mb-6">Prêt à découvrir <span className="text-white font-semibold">votre</span> rapport personnalisé ?</p>
            <Link href="/assessment">
              <Button size="lg" className="bg-white hover:bg-slate-100 text-slate-900 rounded-full text-lg px-10 py-6 font-bold shadow-2xl shadow-blue-500/20 group">
                Commencer le test gratuit <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-slate-500 text-sm mt-4">12 questions · 5 minutes · Premium à 9,90€ après le test</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "165", label: "Questions\nbilan complet" },
              { value: "12", label: "Questions\nrédactionnelles" },
              { value: "50", label: "Questions\nnumériques" },
              { value: "12", label: "Archétypes\nde personnalité" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-slate-500 whitespace-pre-line mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Choisissez votre formule
          </h2>
          <p className="text-slate-500 text-center mt-4 max-w-lg mx-auto">
            Un test gratuit pour découvrir votre potentiel. La version premium pour explorer les métiers de demain.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            {/* Free */}
            <Card className="border-slate-200 relative">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-100 border-slate-200">
                  Gratuit
                </Badge>
                <div className="text-3xl font-bold text-slate-900 mb-2">0 €</div>
                <p className="text-slate-500 text-sm mb-6">Test d'orientation — 12 questions en 5 minutes</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Votre profil professionnel identifié",
                    "1 métier suggéré avec score de match",
                    "Vos forces et axes de progression",
                    "Sans inscription, sans engagement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/assessment">
                  <Button className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white">
                    Test gratuit
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="border-blue-300 ring-2 ring-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                RECOMMANDÉ
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                  <Sparkles className="w-3 h-3 mr-1" /> Premium
                </Badge>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  9,90 €
                  <span className="text-sm font-normal text-slate-400 ml-2">paiement unique</span>
                </div>
                <p className="text-slate-500 text-sm mb-6">Bilan complet 165 questions + 12 rédactionnelles + CV + Formations CPF</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Bilan de compétences intégral (40 questions)",
                    "Bilan Nouvelles Technologies (50 questions)",
                    "5 métiers détaillés avec salaires",
                    "Analyse de votre CV par IA",
                    "Recommandations formations CPF",
                    "Rapport PDF exportable",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/assessment">
                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-200">
                    Test gratuit
                  </Button>
                </Link>
                <p className="text-xs text-slate-400 text-center mt-3">
                  Paiement après le test gratuit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: <Shield className="w-6 h-6" />, text: "Données sécurisées" },
              { icon: <BarChart3 className="w-6 h-6" />, text: "Analyse objective par IA" },
              { icon: <Zap className="w-6 h-6" />, text: "Résultats immédiats" },
              { icon: <Cpu className="w-6 h-6" />, text: "DeepSeek AI" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="text-blue-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à révéler votre potentiel ?
          </h2>
          <p className="text-blue-100 mt-4 text-lg">
            La reconversion professionnelle est à votre portée. Et si c&apos;était votre tour ?
          </p>
          <Link href="/assessment">
            <Button size="lg" className="mt-8 bg-white text-blue-700 hover:bg-blue-50 rounded-full text-lg px-10 py-6 font-bold shadow-xl">
              Je démarre le test gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded">
                <ClipboardCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Bilan<span className="text-blue-400">IA</span>
              </span>
            </div>
            <p className="text-sm max-w-sm">
              Analysez vos talents et vos motivations grâce à l&apos;intelligence artificielle.
              Obtenez un diagnostic personnalisé et des suggestions de carrière adaptées.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Liens</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">Comment ça marche</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Offres</a></li>
              <li><Link href="/assessment" className="hover:text-blue-400 transition-colors">Test gratuit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">CGU</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} BilanIA. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
