interface Props {
  analysis: any;
}

export default function MedicineHeader({
  analysis,
}: Props) {

  return (

    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <h1 className="text-4xl font-bold">

        💊 {analysis.medicine_name}

      </h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-sm text-neutral-500">

            Generic Name

          </p>

          <p className="font-semibold">

            {analysis.generic_name}

          </p>

        </div>

        <div>

          <p className="text-sm text-neutral-500">

            Drug Class

          </p>

          <p className="font-semibold">

            {analysis.drug_class}

          </p>

        </div>

        <div>

          <p className="text-sm text-neutral-500">

            Prescription

          </p>

          <p className="font-semibold">

            {analysis.prescription_required}

          </p>

        </div>

      </div>

    </div>

  );

}