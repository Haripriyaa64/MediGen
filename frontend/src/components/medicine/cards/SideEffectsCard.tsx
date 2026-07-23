interface Props {
  items: string[];
}

export default function SideEffectsCard({
  items,
}: Props) {

  return (

    <div className="rounded-3xl border bg-orange-50 p-6">

      <h2 className="text-xl font-bold">

        ⚠ Side Effects

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