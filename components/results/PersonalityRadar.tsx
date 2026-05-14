"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { BigFive, Riasec } from '@/types';

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

export function BigFiveRadar({ data }: { data: BigFive }) {
  const chartData = [
    { trait: 'Ouverture', score: data.openness },
    { trait: 'Rigueur', score: data.conscientiousness },
    { trait: 'Extraversion', score: data.extraversion },
    { trait: 'Agréabilité', score: data.agreeableness },
    { trait: 'Stabilité', score: 100 - data.neuroticism },
  ];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="trait" tick={{ fill: '#334155', fontSize: 13, fontWeight: 600 }} />
        <Radar name="Vous" dataKey="score" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} strokeWidth={2.5} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function BigFiveBars({ data }: { data: BigFive }) {
  const chartData = [
    { trait: 'Ouverture', score: data.openness, label: 'Créativité, curiosité, goût pour la nouveauté' },
    { trait: 'Rigueur', score: data.conscientiousness, label: 'Organisation, discipline, fiabilité' },
    { trait: 'Extraversion', score: data.extraversion, label: 'Sociabilité, énergie, assertivité' },
    { trait: 'Agréabilité', score: data.agreeableness, label: 'Empathie, coopération, bienveillance' },
    { trait: 'Stabilité', score: 100 - data.neuroticism, label: 'Résilience émotionnelle, sérénité' },
  ];

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 80, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="trait" tick={{ fill: '#334155', fontSize: 13, fontWeight: 600 }} width={80} />
          <Tooltip formatter={(value) => [`${value}/100`, 'Score']} />
          <Bar dataKey="score" radius={[0, 8, 8, 0]}>
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="space-y-1.5 mt-2">
        {chartData.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i] }} />
            <span className="font-medium text-slate-600">{item.trait}</span>
            <span className="text-slate-400">— {item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RiasecHexagon({ data }: { data: Riasec }) {
  const chartData = [
    { trait: 'Réaliste', score: data.realistic },
    { trait: 'Investigateur', score: data.investigative },
    { trait: 'Artistique', score: data.artistic },
    { trait: 'Social', score: data.social },
    { trait: 'Entreprenant', score: data.enterprising },
    { trait: 'Conventionnel', score: data.conventional },
  ];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="trait" tick={{ fill: '#334155', fontSize: 12, fontWeight: 600 }} />
        <Radar name="RIASEC" dataKey="score" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.3} strokeWidth={2.5} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function RiasecBars({ data }: { data: Riasec }) {
  const chartData = [
    { trait: 'Réaliste', score: data.realistic, label: 'Manuel, concret, technique' },
    { trait: 'Investigateur', score: data.investigative, label: 'Analyse, recherche, résolution' },
    { trait: 'Artistique', score: data.artistic, label: 'Création, expression, design' },
    { trait: 'Social', score: data.social, label: 'Aide, formation, relationnel' },
    { trait: 'Entreprenant', score: data.enterprising, label: 'Leadership, vente, influence' },
    { trait: 'Conventionnel', score: data.conventional, label: 'Organisation, méthode, process' },
  ];

  const riasecColors = ['#f59e0b', '#2563eb', '#7c3aed', '#10b981', '#ef4444', '#6366f1'];

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 90, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="trait" tick={{ fill: '#334155', fontSize: 13, fontWeight: 600 }} width={85} />
          <Tooltip formatter={(value) => [`${value}/100`, 'Score']} />
          <Bar dataKey="score" radius={[0, 8, 8, 0]}>
            {chartData.map((_, i) => (
              <Cell key={i} fill={riasecColors[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="space-y-1.5 mt-2">
        {chartData.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: riasecColors[i] }} />
            <span className="font-medium text-slate-600">{item.trait}</span>
            <span className="text-slate-400">— {item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
