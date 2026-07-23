export interface SymptomsAnalysis {

  possible_conditions: string[];

  urgency: string;

  questions: string[];

  home_care: string[];

  red_flags: string[];

  summary: string;

  disclaimer: string;

}

export interface SymptomsResponse {

  success: boolean;

  analysis: SymptomsAnalysis;

  error: string | null;

}