export interface MedicineAnalysis {

  medicine_name: string;

  generic_name: string;

  uses: string[];

  dosage: string;

  how_to_take: string;

  side_effects: string[];

  warnings: string[];

  drug_class: string;

  prescription_required: string;

  storage: string;

  alternatives: string[];

  summary: string;

  disclaimer: string;

}

export interface MedicineResponse {

  success: boolean;

  ocr_text: string;

  analysis: MedicineAnalysis;

  error: string | null;

}