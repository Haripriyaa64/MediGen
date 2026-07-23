import { UploadCloud, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface UploadCardProps {
  onSelect: (files: FileList) => void;
}

export default function UploadCard({
  onSelect,
}: UploadCardProps) {
  return (
    <motion.label
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      className="
      group
      relative
      flex
      min-h-[340px]
      cursor-pointer
      flex-col
      items-center
      justify-center
      overflow-hidden
      rounded-[36px]
      border
      border-dashed
      border-neutral-300
      bg-white
      p-10
      transition-all
      duration-300
      hover:border-neutral-900
      hover:shadow-2xl
      "
    >
      <input
        type="file"
        multiple
        accept=".pdf,.png,.jpg,.jpeg"
        className="hidden"
        onChange={(e) => {
          if (e.target.files) {
            onSelect(e.target.files);
          }
        }}
      />

      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-neutral-100
        via-white
        to-neutral-50
        "
      />

      {/* Upload Icon */}

      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.08,
        }}
        className="
        relative
        z-10
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-[30px]
        bg-neutral-100
        "
      >
        <UploadCloud
          size={42}
          className="text-neutral-800"
        />
      </motion.div>

      {/* Heading */}

      <h2
        className="
        relative
        z-10
        mt-8
        text-3xl
        font-semibold
        tracking-tight
        text-neutral-900
        "
      >
        Upload Prescription
      </h2>

      {/* Subtitle */}

      <p
        className="
        relative
        z-10
        mt-4
        max-w-lg
        text-center
        text-lg
        leading-8
        text-neutral-500
        "
      >
        Drag and drop your prescription or click to
        browse.
      </p>

      {/* Supported */}

      <div
        className="
        relative
        z-10
        mt-8
        flex
        items-center
        gap-3
        rounded-full
        bg-neutral-100
        px-5
        py-3
        "
      >
        <FileText size={18} />

        <span className="text-sm text-neutral-600">
          PDF • PNG • JPG • JPEG
        </span>
      </div>
    </motion.label>
  );
}