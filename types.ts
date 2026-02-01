
export type QuestionType = 'single' | 'multi' | 'rating' | 'text';

export interface Question {
  id: string;
  category: string;
  part: number;
  partTitle: string;
  text: string;
  type: QuestionType;
  maxChoices?: number;
  options?: { value: string | number; label: string; points?: number }[];
  placeholder?: string;
}

export interface UserAnswers {
  [questionId: string]: any;
}

export interface CareerSuggestion {
  title: string;
  description: string;
  relevance: string;
  salary_range: string;
}

export interface AssessmentResult {
  summary: string;
  strengths: string[];
  areasForImprovement: string[];
  valuesAlignment: string;
  careerSuggestions: CareerSuggestion[];
  skillsRadarData: { subject: string; A: number; fullMark: number }[];
}
