interface Props {
  items: string[];
}

export default function RedFlagsCard({
  items,
}: Props) {

  return (

    <div className="rounded-3xl border border-red-200 bg-red-50 p-6">

      <h2 className="text-xl font-bold text-red-700">
        🚨 Red Flags
      </h2>

      <ul className="mt-5 space-y-3">

        {items.map((item) => (

          <li key={item}>
            • {item}
          </li>

        ))}

      </ul>

    </div>

  );

}