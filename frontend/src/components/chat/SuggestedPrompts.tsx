import {
  FileText,
  Pill,
  Stethoscope,
  Thermometer,
} from "lucide-react";

const prompts = [
  {
    icon: Stethoscope,
    text: "I have headache and fever",
  },
  {
    icon: Pill,
    text: "Explain my prescription",
  },
  {
    icon: FileText,
    text: "Summarize this medical report",
  },
  {
    icon: Thermometer,
    text: "I have fever for two days",
  },
];

export default function SuggestedPrompts() {
  return (
    <div className="mt-10">

      <h3 className="mb-5 text-lg font-semibold">
        Suggested Prompts
      </h3>

      <div className="grid grid-cols-2 gap-4">

        {prompts.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.text}
              className="flex items-center gap-4 rounded-2xl border border-[#ECE9E3] bg-white p-5 text-left transition hover:border-indigo-200 hover:bg-indigo-50"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100">

                <Icon size={20} />

              </div>

              <span className="text-sm font-medium">

                {item.text}

              </span>

            </button>

          );

        })}

      </div>

    </div>
  );
}