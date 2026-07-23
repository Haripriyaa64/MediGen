import {
  Pill,
  ShieldAlert,
  Clock3,
  CircleAlert,
} from "lucide-react";

interface Medicine {
  name: string;
  purpose: string;
  dosage: string;
  warnings: string[];
}

interface Props {
  medicine: Medicine;
}

export default function MedicineCard({
  medicine,
}: Props) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-violet-100 p-4">
          <Pill className="h-7 w-7 text-violet-600" />
        </div>

        <div>

          <h2 className="text-xl font-bold">
            {medicine.name}
          </h2>

          <span className="mt-1 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Medication
          </span>

        </div>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <div className="mb-2 flex items-center gap-2">

            <CircleAlert
              className="text-blue-600"
              size={18}
            />

            <p className="font-semibold">
              Purpose
            </p>

          </div>

          <p className="text-neutral-600">
            {medicine.purpose}
          </p>

        </div>

        <div>

          <div className="mb-2 flex items-center gap-2">

            <Clock3
              className="text-violet-600"
              size={18}
            />

            <p className="font-semibold">
              Dosage
            </p>

          </div>

          <p className="text-neutral-600">
            {medicine.dosage}
          </p>

        </div>

      </div>

      {medicine.warnings?.length > 0 && (

        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

          <div className="mb-3 flex items-center gap-2">

            <ShieldAlert
              className="text-yellow-600"
              size={20}
            />

            <h3 className="font-semibold text-yellow-700">
              Warnings
            </h3>

          </div>

          <ul className="space-y-2">

            {medicine.warnings.map((warning) => (

              <li
                key={warning}
                className="flex items-start gap-2 text-sm"
              >
                • {warning}
              </li>

            ))}

          </ul>

        </div>

      )}

    </div>
  );
}