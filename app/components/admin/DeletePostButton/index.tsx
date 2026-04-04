"use client";

import { deletePostAction } from "@/app/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import { Dialog } from "../../Dialog";
import { toast } from "react-toastify";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss();
    
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(`Erro ao deletar post: ${result.error}`);
        return;
      }
      toast.success(`Post "${title}" deletado com sucesso!`);
    });
  }

  return (
    <>
      <button
        className={clsx(
          "text-red-500",
          "hover:text-red-700 hover:scale-120",
          "cursor-pointer",
          "transition-colors",
          "duration-200",
          "[&_svg]:w-4 [&_svg]:h-4",
          "disabled:text-slate-600 disabled:cursor-not-allowed",
        )}
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>

      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title="Apagar post?"
          content={`Tem certeza que deseja deletar o post: "${title}"?`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
}
