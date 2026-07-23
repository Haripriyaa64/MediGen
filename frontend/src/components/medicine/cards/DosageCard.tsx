interface Props {
  dosage: string;
  how: string;
}

export default function DosageCard({
  dosage,
  how,
}: Props) {

  return (

    <div className="rounded-3xl border bg-blue-50 p-6">

      <h2 className="text-xl font-bold">

        💉 Dosage

      </h2>

      <p className="mt-4">

        {dosage}

      </p>

      <h3 className="mt-6 font-semibold">

        How to Take

      </h3>

      <p className="mt-2">

        {how}

      </p>

    </div>

  );

}