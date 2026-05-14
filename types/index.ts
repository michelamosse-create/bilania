export interface Question {
  id: string;
  category: 'soft_skills' | 'hard_skills' | 'values' | 'environment' | 'digital_culture' | 'ai_knowledge' | 'ai_practice' | 'programming' | 'tech_jobs' | 'learning_adaptability';
  text: string;
  options: { value: number; label: string }[];
}

export interface UserAnswers {
  [questionId: string]: number | string;
}

export interface OpenQuestion {
  id: string;
  category: 'open_ended';
  text: string;
  placeholder: string;
}

export interface BigFive {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface Riasec {
  realistic: number;
  investigative: number;
  artistic: number;
  social: number;
  enterprising: number;
  conventional: number;
}

export interface CareerSuggestion {
  title: string;
  description: string;
  relevance: string;
  salary_range: string;
  trend: string;
  matchingScore: number;
  rome: string;
  skillsMatch?: string[];
  formationPath?: string;
}

export interface CPFFormation {
  title: string;
  provider: string;
  duration: string;
  cost: string;
  eligibleCPF: boolean;
  matchingScore: number;
  rsCode: string;
  url: string;
  description: string;
}

export interface DomainScore {
  domain: string;
  label: string;
  score: number;
  maxScore: number;
  interpretation: string;
}

export interface AssessmentResult {
  summary: string;
  profileType: string;
  bigFive: BigFive;
  riasec: Riasec;
  digitalAffinity: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  strengths: string[];
  areasForImprovement: string[];
  domainScores: DomainScore[];
  careerSuggestions: CareerSuggestion[];
  cpfFormations: CPFFormation[];
  skillsRadarData: { subject: string; A: number; fullMark: number }[];
}

export interface CVAnalysis {
  summary: string;
  keySkills: string[];
  experienceLevel: string;
  educationMatch: string;
  recommendations: string[];
  matchingCareers: CareerSuggestion[];
  matchingFormations: CPFFormation[];
}

export interface FreeResult {
  summary: string;
  profileType: string;
  bigFive: BigFive;
  riasec: Riasec;
  digitalAffinity: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  topStrength: string;
  topWeakness: string;
  teaserCareer: CareerSuggestion;
  hiddenCareersCount: number;
}
