"use client";

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function handleClick() {
    alert(`Post a ser deletado: ${title} (ID: ${id})`);
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
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
