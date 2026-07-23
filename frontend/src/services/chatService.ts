import api from "./api";

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  response: string;
}

export async function sendMessage(
  message: string
): Promise<ChatResponse> {
  const response = await api.post<ChatResponse>(
    "/chat",
    {
      message,
    }
  );

  return response.data;
}