import { useState } from "react";
import {
  Mic,
  SendHorizontal,
} from "lucide-react";

import AttachmentButton from "./AttachmentButton";

interface ChatInputProps {
  onSend?: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend?.(message);

    setMessage("");
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="sticky bottom-0 mt-10 rounded-[28px] border border-[#ECE9E3] bg-white p-3 shadow-lg">

      <div className="flex items-end gap-3">

        <AttachmentButton />

        <textarea
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask MediGen AI anything..."
          className="max-h-40 min-h-[52px] flex-1 resize-none bg-transparent px-2 py-3 text-[15px] outline-none placeholder:text-zinc-400"
        />

        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-zinc-100"
        >
          <Mic size={20} />
        </button>

        <button
          onClick={handleSend}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white transition hover:bg-indigo-700"
        >
          <SendHorizontal size={18} />
        </button>

      </div>

    </div>
  );
}