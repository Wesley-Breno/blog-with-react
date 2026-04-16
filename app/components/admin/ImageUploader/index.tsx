"use client";

import { ImageUpIcon } from "lucide-react";
import { Button } from "../../button";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { uploadImageAction } from "@/app/actions/upload/upload-image-action";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/app/constants";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTrasition] = useTransition();
  const [imgURL, setImgURL] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) {
      return;
    }

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgURL("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) {
      setImgURL("");
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableSize = (IMAGE_UPLOAD_MAX_SIZE / 1024).toFixed(2);
      toast.error(`A imagem deve ser menor que ${readableSize}KB.`);

      fileInput.value = "";
      setImgURL("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTrasition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        setImgURL("");
        return;
      }

      setImgURL(result.url);
      toast.success("Imagem enviada com sucesso!");
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      <Button
        type="button"
        className="self-start"
        onClick={handleChooseFile}
        disabled={isUploading}
      >
        <ImageUpIcon />
        Enviar uma imagem
      </Button>

      {!!imgURL && (
        <div className="flex flex-col gap-4">
          <p>
            <b>URL: </b> {imgURL}
          </p>

          {/* eslint-disable-next-line */}
          <img className="rounded-lg" src={imgURL} />
        </div>
      )}

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        disabled={isUploading}
      />
    </div>
  );
}
