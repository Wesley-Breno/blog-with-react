"use client";

import { ImageUpIcon } from "lucide-react";
import { Button } from "../../button";
import { useRef, useTransition } from "react";
import { toast } from "react-toastify";
import { uploadImageAction } from "@/app/actions/upload/upload-image-action";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/app/constants";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTrasition] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableSize = (IMAGE_UPLOAD_MAX_SIZE / 1024).toFixed(2);
      toast.error(`A imagem deve ser menor que ${readableSize}KB.`);

      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTrasition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        return;
      }

      toast.success(result.url);
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button type="button" className="self-start" onClick={handleChooseFile}>
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
      />
    </div>
  );
}
