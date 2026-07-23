import { Paperclip } from "lucide-react";

interface AttachmentButtonProps {
  onFileSelect?: (file: File) => void;
}

export default function AttachmentButton({
  onFileSelect,
}: AttachmentButtonProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <label className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl transition hover:bg-zinc-100">
      <Paperclip size={20} />

      <input
        type="file"
        hidden
        accept=".pdf,.png,.jpg,.jpeg"
        onChange={handleChange}
      />
    </label>
  );
}