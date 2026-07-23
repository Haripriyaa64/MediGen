import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import type { ChatMessageType } from "@/types/chat";

interface Props {
  messages: ChatMessageType[];
  typing?: boolean;
}

export default function ChatWindow({
  messages,
  typing,
}: Props) {
  return (
    <div className="mt-10 flex-1 overflow-y-auto">

      <ChatMessage messages={messages} />

      {typing && (
        <div className="mt-6">
          <TypingIndicator />
        </div>
      )}

    </div>
  );
}