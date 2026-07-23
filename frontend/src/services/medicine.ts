import api from "./api";

import type {
  MedicineResponse,
} from "@/types/medicine";

export async function analyzeMedicine(
  file: File
): Promise<MedicineResponse> {

  const formData = new FormData();

  formData.append(
    "file",
    file
  );

  const { data } =
    await api.post<MedicineResponse>(
      "/medicine/analyze",
      formData
    );

  return data;

}