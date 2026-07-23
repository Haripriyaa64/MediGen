interface Props {
  conditions: string[];
}

export default function ConditionsCard({
  conditions,
}: Props) {

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        🩺 Possible Conditions
      </h2>

      <div className="mt-5 flex flex-wrap gap-3">

        {conditions.map((item) => (

          <span
            key={item}
            className="rounded-full bg-violet-100 px-4 py-2 text-violet-700"
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );

}