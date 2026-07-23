interface Props {
  items: string[];
}

export default function WarningsCard({
  items,
}: Props) {

  return (

    <div className="rounded-3xl border border-red-200 bg-red-50 p-6">

      <h2 className="text-xl font-bold text-red-700">

        🚨 Warnings

      </h2>

      <ul className="mt-5 space-y-2">

        {items.map((item) => (

          <li key={item}>

            • {item}

          </li>

        ))}

      </ul>

    </div>

  );

}