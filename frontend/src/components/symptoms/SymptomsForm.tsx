interface Props {

  symptoms: string;

  setSymptoms: (
    value: string
  ) => void;

  loading: boolean;

  onAnalyze: () => void;

}

export default function SymptomsForm({

  symptoms,

  setSymptoms,

  loading,

  onAnalyze,

}: Props) {

  return (

    <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">

      <textarea

        rows={8}

        value={symptoms}

        onChange={(e) =>
          setSymptoms(e.target.value)
        }

        placeholder="Example:
I have fever, headache and body pain for 2 days."

        className="w-full rounded-2xl border p-5 outline-none"

      />

      <button

        disabled={loading}

        onClick={onAnalyze}

        className="mt-6 rounded-xl bg-violet-600 px-6 py-3 text-white"

      >

        {loading
          ? "Analyzing..."
          : "Analyze Symptoms"}

      </button>

    </div>

  );

}