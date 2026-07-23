import api from "./api";

import type { AnalysisResponse } from "@/types/analysis";

export async function analyzePrescription(
  file: File
): Promise<AnalysisResponse> {

  const formData = new FormData();

  formData.append("file", file);

  const { data } = await api.post<AnalysisResponse>(
    "/prescription/analyze",
    formData
  );

  return data;
}