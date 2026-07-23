import api from "./api";

import type {
  SymptomsResponse,
} from "@/types/symptoms";

export async function analyzeSymptoms(
  symptoms: string
): Promise<SymptomsResponse> {

  const { data } =
    await api.post<SymptomsResponse>(
      "/symptoms/analyze",
      {
        symptoms,
      }
    );

  return data;

}