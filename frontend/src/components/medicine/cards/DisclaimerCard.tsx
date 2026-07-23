interface Props {
  disclaimer: string;
}

export default function DisclaimerCard({
  disclaimer,
}: Props) {

  return (

    <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">

      <h2 className="font-bold text-yellow-700">

        ⚠ Medical Disclaimer

      </h2>

      <p className="mt-4">

        {disclaimer}

      </p>

    </div>

  );

}