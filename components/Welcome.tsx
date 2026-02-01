import React from 'react';
import {
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layout,
  Palette,
  ShieldCheck,
  Clock,
  Users,
  Award,
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
    description: 'Analyse complète',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Palette,
    title: 'Radar IA',
    description: 'Visualisation claire',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Privé & Sécurisé',
    description: 'Données protégées',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
];

const STATS = [
  { icon: Users, value: '10K+', label: 'Utilisateurs' },
  { icon: Clock, value: '10 min', label: 'Durée moyenne' },
  { icon: Award, value: '98%', label: 'Satisfaction' },
];

const Welcome: React.FC<WelcomeProps> = ({ totalQuestions, heroImageUrl, onStart }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="space-y-10 text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-100 text-sm font-bold shadow-xl animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-blue-400 animate-bounce-subtle" />
          Bilan Approfondi en {totalQuestions} Questions
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
          Révélez votre <br />
          <span className="text-gradient-animated">
            potentiel.
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-200 text-xl md:text-2xl leading-relaxed max-w-xl font-semibold drop-shadow-lg">
          Analysez vos talents et vos motivations grâce à notre algorithme IA de pointe.
          Obtenez un diagnostic complet en quelques minutes.
        </p>

        {/* Bouton CTA */}
        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <button
            onClick={onStart}
            className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-4 hover:bg-blue-500 transition-all hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-2 active:scale-95 group shadow-2xl shine-effect"
          >
            Lancer mon Diagnostic
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Statistiques */}
        <div className="flex gap-8 pt-6">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center gap-2 text-white font-black text-2xl">
                <stat.icon className="w-5 h-5 text-blue-400" />
                {stat.value}
              </div>
              <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-10 border-t border-white/10">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="space-y-3 group cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-white uppercase tracking-tight">
                  {feature.title}
                </p>
                <p className="text-[10px] text-slate-400 hidden md:block">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image hero */}
      <div className="relative group hidden lg:block">
        {/* Glow effect */}
        <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] animate-gradient" />

        {/* Cercles décoratifs */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border border-blue-500/20 rounded-full animate-float" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-indigo-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />

        {/* Container image */}
        <div className="relative bg-slate-900/90 p-4 rounded-[3.5rem] shadow-2xl border border-white/20 aspect-square overflow-hidden flex items-center justify-center hover-lift">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Expertise Professionnelle"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-inner animate-in fade-in duration-1000"
            />
          ) : (
            <div className="w-full h-full bg-slate-800/50 flex flex-col items-center justify-center gap-6 rounded-[2.5rem] skeleton">
              <RefreshCw className="w-16 h-16 text-blue-500/30 animate-spin" />
              <p className="text-xs font-black text-blue-200/40 uppercase tracking-widest">
                Initialisation IA...
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
  );
};

export default Welcome;
