import type { ChatMessageType } from "@/types/chat";

interface Props {
  message: ChatMessageType;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-[24px] px-6 py-4 text-[15px] leading-7 shadow-sm ${
          isUser
            ? "bg-indigo-600 text-white"
            : "border border-[#ECE9E3] bg-white text-zinc-800"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}