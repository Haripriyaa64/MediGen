import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatWindow from "@/components/chat/ChatWindow";
import SuggestedPrompts from "@/components/chat/SuggestedPrompts";

import { useChat } from "@/hooks/useChat";

export default function ChatPage() {
  const {
    messages,
    loading,
    send,
  } = useChat();

  return (
    <div className="mx-auto flex h-full max-w-6xl flex-col py-6">

      <ChatHeader />

      {messages.length === 0 && (
        <SuggestedPrompts />
      )}

      <ChatWindow
        messages={messages}
        typing={loading}
      />

      <ChatInput
        onSend={send}
      />

    </div>
  );
}