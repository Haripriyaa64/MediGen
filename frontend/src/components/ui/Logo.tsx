import { HeartPulse } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 shadow-lg shadow-indigo-500/20">
        <HeartPulse
          className="text-white"
          size={28}
          strokeWidth={2.2}
        />
      </div>

      <div>
        <h1 className="text-[22px] font-semibold tracking-tight text-zinc-900">
          MediGen AI
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          AI Medical Workspace
        </p>
      </div>
    </div>
  );
}