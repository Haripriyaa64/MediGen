import { HeartPulse } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center rounded-[34px] border border-dashed border-[#D7D7D7] bg-white py-20">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50">

        <HeartPulse
          size={42}
          className="text-indigo-600"
        />

      </div>

      <h2 className="mt-8 text-3xl font-semibold">

        Welcome to MediGen AI

      </h2>

      <p className="mt-4 max-w-xl text-center text-lg leading-8 text-zinc-500">

        Start a conversation about your health.

        Upload prescriptions.

        Analyze symptoms.

        Generate professional medical reports.

      </p>

    </div>
  );
}