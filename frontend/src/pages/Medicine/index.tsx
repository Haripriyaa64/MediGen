import { useState } from "react";

import UploadCard from "@/components/upload/UploadCard";
import UploadPreview from "@/components/upload/UploadPreview";
import AnalyzeButton from "@/components/upload/AnalyzeButton";
import EmptyState from "@/components/medicine/EmptyState";
import LoadingAnalysis from "@/components/medicine/LoadingAnalysis";
import OCRPreview from "@/components/medicine/OCRPreview";
import MedicineActions from "@/components/medicine/MedicineActions";
import { useFileUpload } from "@/hooks/useFileUpload";
import { downloadMedicineReport } from "@/utils/pdf";
import {
  analyzeMedicine,
} from "@/services/medicine";

import type {
  MedicineResponse,
} from "@/types/medicine";

import MedicineResult from "@/components/medicine/MedicineResult";

export default function MedicinePage() {

  const {
    files,
    error,
    addFiles,
    removeFile,
  } = useFileUpload();

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<MedicineResponse | null>(null);

  async function handleAnalyze() {

    if (!files.length) return;

    try {

      setLoading(true);

      const response =
        await analyzeMedicine(
          files[0].file
        );

      setResult(response);

    }

    catch (err) {

      console.error(err);

      alert("Medicine analysis failed.");

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <div className="mx-auto max-w-6xl py-10">

      <h1 className="text-5xl font-bold">

        💊 Medicine Scanner

      </h1>

      <p className="mt-4 text-lg text-neutral-500">

        Upload a medicine strip, bottle or box.

        MediGen AI will explain it in simple language.

      </p>

      <div className="mt-10">

        <UploadCard
          onSelect={addFiles}
        />

      </div>

      {error && (

        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">

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
  <LoadingAnalysis />
)}

      {!loading && !result && (
        <EmptyState />
      )}

      {result && (
        <>
          <OCRPreview
            text={result.ocr_text}
          />

          <MedicineResult
            result={result}
          />

          <div className="mt-8">
            <MedicineActions
                onDownload={() =>
                downloadMedicineReport(result)
              } 
            />
          </div>
        </>
      )}

    </div>

  );

}