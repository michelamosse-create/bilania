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
  Star,
  Quote,
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
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop',
  },
  {
    icon: Palette,
    title: 'Radar IA',
    description: 'Visualisation claire',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
  },
  {
    icon: ShieldCheck,
    title: 'Privé & Sécurisé',
    description: 'Données protégées',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&h=100&fit=crop',
  },
];

const TESTIMONIALS = [
  {
    name: 'Marie L.',
    role: 'Reconversion réussie',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    text: 'Grâce à BilanIA, j\'ai trouvé ma voie en 2 semaines !',
  },
  {
    name: 'Thomas D.',
    role: 'Manager IT',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: 'Analyse précise et suggestions pertinentes.',
  },
  {
    name: 'Sophie M.',
    role: 'Freelance',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: 'Le PDF est super pro, parfait pour mon portfolio !',
  },
];

const STATS = [
  { icon: Users, value: '10K+', label: 'Utilisateurs' },
  { icon: Clock, value: '10 min', label: 'Durée moyenne' },
  { icon: Award, value: '98%', label: 'Satisfaction' },
];

const Welcome: React.FC<WelcomeProps> = ({ totalQuestions, heroImageUrl, onStart }) => {
  return (
    <div className="space-y-16 py-8 animate-in fade-in zoom-in-95 duration-700">
      {/* Section principale */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop"
                alt="Analyse de compétences"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-inner"
              />
            )}
          </div>

          {/* Badge flottant */}
          <div className="absolute -right-4 top-1/4 bg-slate-900/95 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 shadow-xl animate-float">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white">IA Active</span>
            </div>
          </div>

          {/* Badge flottant 2 */}
          <div className="absolute -left-6 bottom-1/4 bg-blue-600/90 backdrop-blur-sm px-4 py-3 rounded-2xl border border-blue-400/30 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-xs font-bold text-white">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Features avec images */}
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

      {/* Section Témoignages */}
      <div className="pt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Ils ont trouvé leur voie
          </h2>
          <p className="text-slate-400 text-lg">Rejoignez des milliers de professionnels épanouis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-blue-500/20 transition-all"
            >
              <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
              <p className="text-white font-medium mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image de fond mobile */}
      <div className="lg:hidden relative rounded-3xl overflow-hidden h-64 mt-8">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
          alt="Équipe professionnelle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white font-bold text-lg">Rejoignez une communauté de professionnels</p>
          <p className="text-slate-300 text-sm">qui ont transformé leur carrière grâce à l'IA</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
