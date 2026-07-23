interface Props {
  summary: string;
}

export default function SummaryCard({
  summary,
}: Props) {

  return (

    <div className="rounded-3xl border bg-neutral-100 p-6">

      <h2 className="text-xl font-bold">

        📋 AI Summary

      </h2>

      <p className="mt-4 leading-8">

        {summary}

      </p>

    </div>

  );

}