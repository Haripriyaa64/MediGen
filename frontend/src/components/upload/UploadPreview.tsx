import type { UploadedFile } from "@/types/upload";

import {
  FileText,
  ImageIcon,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

interface UploadPreviewProps {
  files: UploadedFile[];
  onRemove: (id: string) => void;
}

export default function UploadPreview({
  files,
  onRemove,
}: UploadPreviewProps) {
  if (!files.length) return null;

  return (
    <div className="mt-8 space-y-5">

      {files.map((item) => {

        const isImage =
          item.file.type.startsWith("image");

        return (

          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            whileHover={{
              y: -2,
            }}
            className="
bg-white
rounded-[28px]
border
border-neutral-200
shadow-sm
hover:shadow-lg
transition-all
duration-300
p-5
"
          >

            <div className="flex items-center gap-5">

              {/* Preview */}

              {isImage ? (

                <img
                  src={item.preview}
                  alt=""
                  className="
h-20
w-20
rounded-2xl
object-cover
border
"
                />

              ) : (

                <div
                  className="
flex
h-20
w-20
items-center
justify-center
rounded-2xl
bg-red-50
"
                >
                  <FileText
                    size={36}
                    className="text-red-500"
                  />
                </div>

              )}

              {/* File Info */}

              <div className="flex-1">

                <h3 className="text-lg font-semibold">

                  {item.file.name}

                </h3>

                <p className="mt-1 text-neutral-500">

                  {(item.file.size / 1024 / 1024).toFixed(2)}
                  {" "}
                  MB

                </p>

                <div className="mt-4 flex items-center gap-2 text-green-600">

                  <CheckCircle2 size={18} />

                  <span className="text-sm">

                    Ready for AI analysis

                  </span>

                </div>

              </div>

              {/* Remove */}

              <button
                onClick={() => onRemove(item.id)}
                className="
rounded-2xl
p-3
transition
hover:bg-red-50
"
              >

                <Trash2
                  size={20}
                  className="text-red-500"
                />

              </button>

            </div>

          </motion.div>

        );

      })}

    </div>
  );
}