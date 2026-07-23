interface Props {
  items: string[];
}

export default function HomeCareCard({
  items,
}: Props) {

  return (

    <div className="rounded-3xl border bg-green-50 p-6">

      <h2 className="text-xl font-bold">
        🏠 Home Care
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