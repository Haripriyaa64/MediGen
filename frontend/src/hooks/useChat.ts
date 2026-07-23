import { useState } from "react";
import { sendMessage } from "@/services/chatService";
import type { ChatMessageType } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<
    ChatMessageType[]
  >([]);

  const [loading, setLoading] = useState(false);

  async function send(text: string) {
    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {
      const res = await sendMessage(text);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: res.response,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "❌ Unable to connect to MediGen AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    send,
  };
}