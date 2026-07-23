interface Props {
  storage: string;
}

export default function StorageCard({
  storage,
}: Props) {

  return (

    <div className="rounded-3xl border p-6">

      <h2 className="text-xl font-bold">

        📦 Storage

      </h2>

      <p className="mt-4">

        {storage}

      </p>

    </div>

  );

}