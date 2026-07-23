export type UploadStatus =
  | "idle"
  | "dragging"
  | "uploading"
  | "success"
  | "error";

export interface UploadedFile {
  id: string;
  file: File;
  preview?: string;
  status: UploadStatus;
}

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024;