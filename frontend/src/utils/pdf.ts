import jsPDF from "jspdf";

import type { AnalysisResponse } from "@/types/analysis";
import type { MedicineResponse } from "@/types/medicine";

export function downloadPrescriptionReport(
  result: AnalysisResponse
) {
  const pdf = new jsPDF();

  let y = 20;

  pdf.setFontSize(22);
  pdf.text("MediGen AI", 20, y);

  y += 12;

  pdf.setFontSize(18);
  pdf.text("Prescription Analysis Report", 20, y);

  y += 18;

  pdf.setFontSize(12);

  pdf.text("Extracted Text:", 20, y);

  y += 8;

  const extracted = pdf.splitTextToSize(
    result.ocr_text || "",
    170
  );

  pdf.text(extracted, 20, y);

  y += extracted.length * 6 + 10;

  pdf.setFontSize(16);
  pdf.text("AI Summary", 20, y);

  y += 10;

  pdf.setFontSize(11);

  const summary = pdf.splitTextToSize(
    result.analysis.summary || "",
    170
  );

  pdf.text(summary, 20, y);

  y += summary.length * 6 + 12;

  pdf.setFontSize(16);
  pdf.text("Medicines", 20, y);

  y += 10;

  result.analysis.medicines?.forEach((medicine: any) => {

    pdf.setFontSize(13);

    pdf.text(
      medicine.name,
      20,
      y
    );

    y += 8;

    pdf.setFontSize(11);

    pdf.text(
      `Purpose: ${medicine.purpose}`,
      25,
      y
    );

    y += 7;

    pdf.text(
      `Dosage: ${medicine.dosage}`,
      25,
      y
    );

    y += 7;

    medicine.warnings?.forEach(
      (warning: string) => {

        pdf.text(
          `• ${warning}`,
          30,
          y
        );

        y += 6;

      }
    );

    y += 10;

  });

  pdf.setFontSize(10);

  pdf.text(
    result.analysis.disclaimer || "",
    20,
    280
  );

  pdf.save("Prescription_Report.pdf");
}

export function downloadMedicineReport(
  result: MedicineResponse
) {
  const pdf = new jsPDF();

  let y = 20;

  pdf.setFontSize(22);

  pdf.text(
    "MediGen AI",
    20,
    y
  );

  y += 12;

  pdf.setFontSize(18);

  pdf.text(
    "Medicine Scanner Report",
    20,
    y
  );

  y += 18;

  pdf.setFontSize(12);

  pdf.text(
    `Medicine Name: ${result.analysis.medicine_name}`,
    20,
    y
  );

  y += 10;

  pdf.text(
    `Generic Name: ${result.analysis.generic_name}`,
    20,
    y
  );

  y += 10;

  pdf.text(
    `Drug Class: ${result.analysis.drug_class}`,
    20,
    y
  );

  y += 10;

  pdf.text(
    `Prescription Required: ${result.analysis.prescription_required}`,
    20,
    y
  );

  y += 10;

  pdf.text(
    `Dosage: ${result.analysis.dosage}`,
    20,
    y
  );

  y += 10;

  pdf.text(
    `How To Take: ${result.analysis.how_to_take}`,
    20,
    y
  );

  y += 15;

  pdf.setFontSize(15);

  pdf.text(
    "Uses",
    20,
    y
  );

  y += 8;

  result.analysis.uses.forEach((item) => {

    pdf.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

  y += 5;

  pdf.text(
    "Side Effects",
    20,
    y
  );

  y += 8;

  result.analysis.side_effects.forEach((item) => {

    pdf.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

  y += 5;

  pdf.text(
    "Warnings",
    20,
    y
  );

  y += 8;

  result.analysis.warnings.forEach((item) => {

    pdf.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

  y += 5;

  pdf.text(
    `Storage: ${result.analysis.storage}`,
    20,
    y
  );

  y += 12;

  pdf.text(
    "Alternatives",
    20,
    y
  );

  y += 8;

  result.analysis.alternatives.forEach((item) => {

    pdf.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

  y += 10;

  pdf.setFontSize(15);

  pdf.text(
    "AI Summary",
    20,
    y
  );

  y += 8;

  const summary = pdf.splitTextToSize(
    result.analysis.summary,
    170
  );

  pdf.setFontSize(11);

  pdf.text(
    summary,
    20,
    y
  );

  pdf.setFontSize(10);

  pdf.text(
    result.analysis.disclaimer,
    20,
    280
  );

  pdf.save("Medicine_Report.pdf");
}