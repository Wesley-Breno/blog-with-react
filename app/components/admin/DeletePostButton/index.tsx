"use client";

import { deletePostAction } from "@/app/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  
  function handleClick() {
    if (!confirm(`Tem certeza que deseja deletar o post: "${title}"?`)) {
      return;
    }

    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`Post deletado: ID ${result}`);
    });
  }

  return (
    <button
      className={clsx(
        "text-red-500",
        "hover:text-red-700 hover:scale-120",
        "cursor-pointer",
        "transition-colors",
        "duration-200",
        "[&_svg]:w-4 [&_svg]:h-4",
        "disabled:text-slate-600 disabled:cursor-not-allowed"
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
