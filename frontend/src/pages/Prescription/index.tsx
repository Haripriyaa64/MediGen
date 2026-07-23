import { useState } from "react";

import UploadCard from "@/components/upload/UploadCard";
import UploadPreview from "@/components/upload/UploadPreview";
import AnalyzeButton from "@/components/upload/AnalyzeButton";

import { useFileUpload } from "@/hooks/useFileUpload";
import { analyzePrescription } from "@/services/prescription";

import type { AnalysisResponse } from "@/types/analysis";

import AnalysisCard from "@/components/prescription/AnalysisCard";

export default function PrescriptionPage() {
  const {
    files,
    error,
    addFiles,
    removeFile,
  } = useFileUpload();

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<AnalysisResponse | null>(null);

  const [loadingStep, setLoadingStep] = useState("Uploading prescription...");

  async function handleAnalyze() {
  if (!files.length) return;

  try {
    setLoading(true);

    setLoadingStep("📤 Uploading Prescription...");

    await new Promise((r) => setTimeout(r, 400));

    setLoadingStep("🔍 Reading Prescription (OCR)...");

    await new Promise((r) => setTimeout(r, 500));

    setLoadingStep("🧠 AI Understanding Medicines...");

    const response = await analyzePrescription(
      files[0].file
    );

    setLoadingStep("📋 Preparing Medical Report...");

    await new Promise((r) => setTimeout(r, 300));

    setResult(response);

  } catch (err) {
    console.error(err);
    alert("Analysis failed.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="mx-auto max-w-5xl py-10">

      <h1 className="text-5xl font-semibold tracking-tight">
        Prescription Analysis
      </h1>

      <p className="mt-4 text-lg text-neutral-500 leading-8">
        Upload your doctor's prescription and let
        MediGen AI explain medicines, dosage,
        precautions and treatment summary.
      </p>

      <div className="mt-10">
        <UploadCard onSelect={addFiles} />
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      <UploadPreview
        files={files}
        onRemove={removeFile}
      />

      <AnalyzeButton
        disabled={!files.length}
        loading={loading}
        onClick={handleAnalyze}
      />

      {loading && (
  <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-6">

    <div className="flex items-center gap-3">

      <div className="h-5 w-5 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />

      <span className="font-medium">
        {loadingStep}
      </span>

    </div>

    <div className="mt-5 h-2 overflow-hidden rounded-full bg-violet-100">

      <div className="h-full w-full animate-pulse bg-violet-500" />

    </div>

    <p className="mt-4 text-sm text-neutral-600">
      MediGen AI is analyzing your prescription...
    </p>

  </div>
)} 
      {result && (
        <div className="mt-10">

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-semibold">
              AI Prescription Analysis
            </h2>

            <div className="mt-8">

              <h3 className="text-lg font-semibold">
                Extracted Text
              </h3>

              <div className="mt-3 whitespace-pre-wrap rounded-2xl bg-neutral-100 p-5 text-sm leading-7">
                {result.ocr_text}
              </div>

            </div>

          </div>

          <AnalysisCard
    result={result}
/>

        </div>
      )}

    </div>
  );
}