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
                  <strong className="text-slate-900">70% des reconversions échouent</strong>{" "}par manque de préparation.
                  Un bilan de compétences vous permet d&apos;éviter les erreurs coûteuses : choisir un métier qui ne vous correspond pas,
                  vous inscrire à une formation inadaptée, ou perdre du temps dans une voie sans débouchés.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-slate-900">Connaître ses forces et ses motivations profondes</strong>{" "}est la première étape.
                  Trop de personnes choisissent un métier sur un coup de tête ou parce que &ldquo;ça recrute&rdquo;, sans se demander
                  si ce métier correspond vraiment à leur personnalité, leurs valeurs et leur style de travail.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-slate-900">Un bilan de compétences traditionnel coûte entre 200€ et 2000€</strong>{" "}et prend
                  plusieurs semaines. BilanIA vous donne l&apos;essentiel en 5 minutes pour 0€, et une analyse complète
                  pour 9,90€ : soit 20 à 50 fois moins cher qu&apos;un cabinet classique.
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

      {/* Exemple de rapport */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">Exemple de rapport premium</h2>
          <p className="text-slate-500 text-center mb-12">Voici à quoi ressemble un vrai rapport généré par BilanIA</p>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm space-y-8">
            {/* Big Five + RIASEC mock */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="text-sm font-bold text-slate-800 mb-4">Personnalité : Big Five</div>
                <div className="grid grid-cols-5 gap-3">
                  {[{l:'Ouverture',v:68,c:'#2563eb'},{l:'Rigueur',v:72,c:'#0891b2'},{l:'Extraversion',v:45,c:'#7c3aed'},{l:'Agréabilité',v:75,c:'#059669'},{l:'Stabilité',v:62,c:'#d97706'}].map(({l,v,c})=>(
                    <div key={l} className="text-center">
                      <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                        <circle cx="30" cy="30" r="22" fill="none" stroke="#e2e8f0" strokeWidth="4"/>
                        <circle cx="30" cy="30" r="22" fill="none" stroke={c} strokeWidth="4"
                          strokeDasharray={2*Math.PI*22} strokeDashoffset={2*Math.PI*22-(v/100)*2*Math.PI*22}
                          strokeLinecap="round" transform="rotate(-90 30 30)"/>
                        <text x="30" y="32" textAnchor="middle" fontSize="12" fontWeight="800" fill={c}>{v}</text>
                      </svg>
                      <div className="text-xs font-semibold text-slate-600 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="text-sm font-bold text-slate-800 mb-4">Intérêts : RIASEC</div>
                <div className="grid grid-cols-6 gap-2">
                  {[{l:'R',v:50},{l:'I',v:65},{l:'A',v:40},{l:'S',v:75},{l:'E',v:55},{l:'C',v:60}].map(({l,v})=>(
                    <div key={l} className="text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mx-auto text-xs font-bold text-purple-700">{v}</div>
                      <div className="text-xs text-slate-500 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-4">Réaliste · Investigateur · Artistique · Social · Entreprenant · Conventionnel</div>
              </div>
            </div>

            {/* Domain scores */}
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <div className="text-sm font-bold text-slate-800 mb-4">10 scores de compétences (sur 5)</div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[{l:'Relationnel',v:4.2},{l:'Analyse',v:3.8},{l:'Créativité',v:3.0},{l:'Organisation',v:4.5},{l:'Numérique',v:3.2},{l:'IA',v:2.5},{l:'Adaptabilité',v:4.0},{l:'Leadership',v:3.5},{l:'Technique',v:3.8},{l:'Communication',v:4.5}].map(({l,v})=>(
                  <div key={l} className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-500">{l}</div>
                    <div className="text-lg font-bold text-blue-600">{v}<span className="text-xs text-slate-400">/5</span></div>
                    <div className="mt-1 bg-slate-200 rounded-full h-1.5"><div className="bg-blue-500 h-1.5 rounded-full" style={{width:`${(v/5)*100}%`}}/></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers + Formations + Action plan */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-bold text-slate-800 mb-3">5 métiers recommandés</div>
                {[{t:'Product Owner',r:'M1703',s:'45-65k€',m:92},{t:'Chef de projet IT',r:'M1806',s:'40-65k€',m:85},{t:'Consultant IA',r:'M1402',s:'50-75k€',m:78}].map((c,i)=>(
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 text-sm">
                    <div><span className="font-medium">{c.t}</span><span className="text-xs text-slate-400 ml-2">ROME {c.r}</span></div>
                    <span className="font-bold text-blue-600 text-xs">{c.m}%</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-green-200">
                <div className="text-sm font-bold text-green-800 mb-3">Formations CPF</div>
                {[{t:'PSPO I',rs:'RS1234',d:'3 jours',c:'1 200€'},{t:'Data Analyst',rs:'RS5678',d:'6 mois',c:'4 500€'},{t:'No-Code',rs:'RS6789',d:'3 mois',c:'2 500€'}].map((f,i)=>(
                  <div key={i} className="py-2 border-b border-green-50 text-sm">
                    <div className="font-medium text-green-900">{f.t}</div>
                    <div className="text-xs text-green-600">RS {f.rs} · {f.d} · {f.c}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-bold text-slate-800 mb-3">Plan d'action</div>
                {[{w:1,a:'Contacter 3 pros sur LinkedIn'},{w:2,a:'Suivre MOOC IA pour tous'},{w:4,a:"S'inscrire à une formation CPF"}].map((s,i)=>(
                  <div key={i} className="flex gap-3 py-2 text-sm">
                    <span className="bg-blue-100 text-blue-700 font-bold text-xs px-2 py-0.5 rounded-full h-fit">S{s.w}</span>
                    <span className="text-slate-600">{s.a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/assessment">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg px-10 py-6 shadow-lg shadow-blue-200 group">
                Faire le test gratuit <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
                <p className="text-slate-500 text-sm mb-6">Test d'orientation : 12 questions en 5 minutes</p>
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
              <li><Link href="/mentions#confidentialite" className="hover:text-blue-400 transition-colors">Confidentialité</Link></li>
              <li><Link href="/mentions#cgu" className="hover:text-blue-400 transition-colors">CGU</Link></li>
              <li><Link href="/mentions" className="hover:text-blue-400 transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} BilanIA. Tous droits réservés.<br/>
          <span className="text-slate-600">BilanIA est un outil d'auto-positionnement. Il ne remplace pas un bilan de compétences réalisé par un prestataire habilité (<a href="https://www.service-public.fr/particuliers/vosdroits/F3087" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-400">en savoir plus</a>).</span>
        </div>
      </footer>
    </div>
  );
}
