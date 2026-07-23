import { Sparkles } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="border-b border-[#ECE9E3] pb-8">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-50">

          <Sparkles
            size={28}
            className="text-indigo-600"
          />

        </div>

        <div>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            AI Medical Assistant
          </h1>

          <p className="mt-1 text-zinc-500">
            Ask anything about symptoms, medicines,
            prescriptions or reports.
          </p>

        </div>

      </div>

    </div>
  );
}