export default function EmptyState() {

  return (

    <div className="mt-12 rounded-3xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">

      <div className="text-6xl">
        💊
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        Scan Any Medicine
      </h2>

      <p className="mt-4 text-neutral-500 leading-8">

        Upload a medicine strip, bottle or box.

        MediGen AI will explain:

      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div>✅ Uses</div>
        <div>💉 Dosage</div>
        <div>⚠ Side Effects</div>
        <div>🚨 Warnings</div>
        <div>📦 Storage</div>
        <div>🔄 Alternatives</div>

      </div>

    </div>

  );

}