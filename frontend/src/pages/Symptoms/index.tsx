import { useState } from "react";

import { analyzeSymptoms } from "@/services/symptoms";

import type {
  SymptomsResponse,
} from "@/types/symptoms";

import SymptomsForm from "@/components/symptoms/SymptomsForm";
import SymptomsResult from "@/components/symptoms/SymptomsResult";

export default function SymptomsPage() {

  const [symptoms, setSymptoms] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<SymptomsResponse | null>(null);

  async function handleAnalyze() {

    if (!symptoms.trim()) return;

    try {

      setLoading(true);

      const response =
        await analyzeSymptoms(
          symptoms
        );

      setResult(response);

    }

    catch (error) {

      console.error(error);

      alert("Analysis failed.");

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <div className="mx-auto max-w-6xl py-10">

      <h1 className="text-5xl font-bold">

        🩺 AI Symptom Checker

      </h1>

      <p className="mt-4 text-lg text-neutral-500">

        Describe your symptoms and MediGen AI
        will provide educational guidance.

      </p>

      <SymptomsForm
        symptoms={symptoms}
        setSymptoms={setSymptoms}
        loading={loading}
        onAnalyze={handleAnalyze}
      />

      {result && (

        <SymptomsResult
          result={result}
        />

      )}

    </div>

  );

}