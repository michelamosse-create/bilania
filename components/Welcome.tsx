import React from 'react';
import {
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layout,
  Palette,
  ShieldCheck,
  Clock,
  Zap,
  FileText,
} from 'lucide-react';

interface WelcomeProps {
  totalQuestions: number;
  heroImageUrl: string | null;
  onStart: () => void;
}

const FEATURES = [
  {
    icon: Layout,
    title: 'Profil 360°',
    description: 'Analyse complète de vos compétences',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop',
  },
  {
    icon: Palette,
    title: 'Radar IA',
    description: 'Visualisation claire de vos forces',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
  },
  {
    icon: FileText,
    title: 'Export PDF',
    description: 'Téléchargez votre bilan complet',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&h=100&fit=crop',
  },
];

const INFO = [
  { icon: Clock, value: '~10 min', label: 'Durée estimée' },
  { icon: ShieldCheck, value: '100%', label: 'Gratuit' },
  { icon: Zap, value: 'Gemini', label: 'Propulsé par' },
];

const Welcome: React.FC<WelcomeProps> = ({ totalQuestions, heroImageUrl, onStart }) => {
  return (
    <div className="space-y-16 py-8 animate-in fade-in zoom-in-95 duration-700">
      {/* Section principale */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-10 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-100 text-sm font-bold shadow-xl">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Bilan Approfondi en {totalQuestions} Questions
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
            Révélez votre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
              potentiel.
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-200 text-xl md:text-2xl leading-relaxed max-w-xl font-semibold drop-shadow-lg">
            Analysez vos talents et vos motivations grâce à l'intelligence artificielle.
            Obtenez un diagnostic personnalisé et des suggestions de carrière adaptées.
          </p>

          {/* Bouton CTA */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button
              onClick={onStart}
              className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-4 hover:bg-blue-500 transition-all hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-2 active:scale-95 group shadow-2xl"
            >
              Commencer le Bilan
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Infos */}
          <div className="flex gap-8 pt-6">
            {INFO.map((info, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center gap-2 text-white font-black text-xl">
                  <info.icon className="w-5 h-5 text-blue-400" />
                  {info.value}
                </div>
                <p className="text-slate-400 text-xs font-medium">{info.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image hero */}
        <div className="relative group hidden lg:block">
          {/* Glow effect */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[120px]" />

          {/* Cercles décoratifs */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-blue-500/20 rounded-full animate-float" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-indigo-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />

          {/* Container image */}
          <div className="relative bg-slate-900/90 p-4 rounded-[3.5rem] shadow-2xl border border-white/20 aspect-square overflow-hidden flex items-center justify-center">
            {heroImageUrl ? (
              <img
                src={heroImageUrl}
                alt="Analyse de compétences"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-inner animate-in fade-in duration-1000"
              />
            ) : (
              <div className="w-full h-full bg-slate-800/50 flex flex-col items-center justify-center gap-6 rounded-[2.5rem]">
                <RefreshCw className="w-16 h-16 text-blue-500/30 animate-spin" />
                <p className="text-xs font-black text-blue-200/40 uppercase tracking-widest">
                  Chargement...
                </p>
              </div>
            )}
          </div>

          {/* Badge flottant */}
          <div className="absolute -right-4 top-1/4 bg-slate-900/95 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 shadow-xl animate-float">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white">IA Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-2 overflow-hidden"
          >
            {/* Image de fond */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                src={feature.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform shrink-0`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-lg font-black text-white">
                  {feature.title}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Comment ça marche */}
      <div className="pt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Comment ça marche ?
          </h2>
          <p className="text-slate-400 text-lg">Un processus simple en 3 étapes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Répondez aux questions</h3>
            <p className="text-slate-400">40 questions sur vos compétences, valeurs et aspirations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-white font-bold text-lg mb-2">L'IA analyse votre profil</h3>
            <p className="text-slate-400">Gemini génère un rapport personnalisé basé sur vos réponses</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-600 text-white text-2xl font-black flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Découvrez vos opportunités</h3>
            <p className="text-slate-400">Recevez des suggestions de carrière adaptées à votre profil</p>
          </div>
        </div>
      </div>

      {/* Image mobile */}
      <div className="lg:hidden relative rounded-3xl overflow-hidden h-64 mt-8">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
          alt="Équipe professionnelle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white font-bold text-lg">Prêt à découvrir votre potentiel ?</p>
          <p className="text-slate-300 text-sm">Commencez votre bilan de compétences gratuit</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
