import { useState } from "react";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatWindow from "@/components/chat/ChatWindow";
import SuggestedPrompts from "@/components/chat/SuggestedPrompts";
import type { ChatMessageType } from "@/types/chat";

export default function ChatPage() {

  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "👋 Hello! I'm MediGen AI. Ask me anything about symptoms, medicines, prescriptions or reports.",
    },
  ]);

  const [typing, setTyping] = useState(false);

  function handleSend(text: string) {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "This is a demo response. In the next pack this will come from the FastAPI backend and Hugging Face model.",
        },
      ]);

      setTyping(false);
    }, 1500);
  }

  return (
    <div className="mx-auto flex h-full max-w-6xl flex-col py-6">

      <ChatHeader />

      {messages.length === 1 && (
        <SuggestedPrompts />
      )}

      <ChatWindow
        messages={messages}
        typing={typing}
      />

      <ChatInput onSend={handleSend} />

    </div>
  );
}