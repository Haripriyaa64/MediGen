export default function RecentActivity() {
  return (
    <div className="mt-8 rounded-[30px] border border-[#ECE9E3] bg-white p-8 shadow-sm">

      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        <div>

          <p className="font-medium">
            Symptoms Analysis
          </p>

          <p className="text-sm text-zinc-500">
            No activity yet.
          </p>

        </div>

        <div>

          <p className="font-medium">
            Prescription Summary
          </p>

          <p className="text-sm text-zinc-500">
            No activity yet.
          </p>

        </div>

      </div>

    </div>
  );
}