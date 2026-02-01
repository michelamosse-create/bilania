
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface SkillsRadarProps {
  data: { subject: string; A: number; fullMark: number }[];
}

const SkillsRadar: React.FC<SkillsRadarProps> = ({ data }) => {
  return (
    <div className="w-full h-[450px] sm:h-[550px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.1)" strokeWidth={2} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 900, letterSpacing: '0.05em' }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 5]} 
            tick={false} 
            axisLine={false} 
          />
          <Radar
            name="Profil"
            dataKey="A"
            stroke="#60a5fa"
            strokeWidth={4}
            fill="url(#colorNeon)"
            fillOpacity={0.65}
          />
          <defs>
            <linearGradient id="colorNeon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0.7}/>
            </linearGradient>
          </defs>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;
