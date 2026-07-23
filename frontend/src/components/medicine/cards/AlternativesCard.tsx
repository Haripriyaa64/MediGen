interface Props {
  items: string[];
}

export default function AlternativesCard({
  items,
}: Props) {

  return (

    <div className="rounded-3xl border p-6">

      <h2 className="text-xl font-bold">

        🔄 Alternatives

      </h2>

      <div className="mt-5 flex flex-wrap gap-3">

        {items.map((item) => (

          <span
            key={item}
            className="rounded-full bg-violet-100 px-4 py-2"
          >

            {item}

          </span>

        ))}

      </div>

    </div>

  );

}