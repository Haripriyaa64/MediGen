export interface AnalysisResponse {
  success: boolean;
  ocr_text: string;
  analysis: {
  medicines?: {
    name: string;
    purpose: string;
    dosage: string;
    warnings: string[];
  }[];

  precautions?: string[];

  side_effects?: string[];

  follow_up?: string;

  summary?: string;

  disclaimer?: string;

  error?: string;
};
  error: string | null;
}