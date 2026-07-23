interface Props {
  onDownload: () => void;
}

export default function MedicineActions({
  onDownload,
}: Props) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onDownload}
        className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
      >
        📄 Download PDF
      </button>
    </div>
  );
}