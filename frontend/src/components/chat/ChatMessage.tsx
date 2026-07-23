import MessageBubble from "./MessageBubble";
import type { ChatMessageType } from "@/types/chat";

interface ChatMessageProps {
  messages: ChatMessageType[];
}

export default function ChatMessage({
  messages,
}: ChatMessageProps) {
  return (
    <div className="space-y-6">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}