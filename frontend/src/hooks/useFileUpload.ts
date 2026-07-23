import { useState } from "react";
import type { UploadedFile } from "@/types/upload";

import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
} from "@/types/upload";

export function useFileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [error, setError] = useState("");

  function validateFile(file: File) {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "Only PDF, PNG and JPG files are allowed.";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "Maximum file size is 10 MB.";
    }

    return null;
  }

  function addFiles(selectedFiles: FileList | File[]) {
    const list = Array.from(selectedFiles);

    const uploaded: UploadedFile[] = [];

    for (const file of list) {
      const validation = validateFile(file);

      if (validation) {
        setError(validation);
        continue;
      }

      uploaded.push({
        id: crypto.randomUUID(),
        file,
        preview:
          file.type === "application/pdf"
            ? undefined
            : URL.createObjectURL(file),
        status: "success",
      });
    }

    setFiles((prev) => [...prev, ...uploaded]);

    if (uploaded.length > 0) {
      setError("");
    }
  }

  function removeFile(id: string) {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id);

      if (target?.preview) {
        URL.revokeObjectURL(target.preview);
      }

      return prev.filter((file) => file.id !== id);
    });
  }

  function clearFiles() {
    files.forEach((file) => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });

    setFiles([]);
  }

  return {
    files,
    error,
    addFiles,
    removeFile,
    clearFiles,
  };
}