interface Props {
  uses: string[];
}

export default function UsesCard({
  uses,
}: Props) {

  return (

    <div className="rounded-3xl border bg-green-50 p-6">

      <h2 className="text-xl font-bold">

        🎯 Uses

      </h2>

      <ul className="mt-5 space-y-3">

        {uses.map((item) => (

          <li key={item}>
            ✓ {item}
          </li>

        ))}

      </ul>

    </div>

  );

}