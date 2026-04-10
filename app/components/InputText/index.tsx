import clsx from "clsx";
import { useId } from "react";

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<"input">;

export function InputText({ labelText = "", ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...props}

        className={clsx(
          "bg-white outline-none border border-gray-300 rounded-md p-2",
          "transition focus:ring-blue-500 focus:ring-1 focus:border-blue-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "disabled:placeholder-gray-400",
          "placeholder-slate-300",
          "read-only:bg-gray-700 read-only:border-gray-400 read-only:opacity-70",
          
          props.className,
        )}
        id={id}
      />
    </div>
  );
}
