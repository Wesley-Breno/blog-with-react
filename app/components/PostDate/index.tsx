import { formateDatetime, formateRelativeDate } from "@/app/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={dateTime}
      className="text-slate-600 text-sm/tight"
      title={formateDatetime(dateTime)}
    >
      {formateRelativeDate(dateTime)}
    </time>
  );
}
