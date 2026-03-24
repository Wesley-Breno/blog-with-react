import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const HeadingClassesMap = {
    h1: "text-4xl/tight sm:text-5xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  };

  const commonClasses = "";

  return (
    <Tag className={clsx(commonClasses, HeadingClassesMap[Tag])}>
      <Link className="group-hover:text-slate-600 transition" href={url}>{children}</Link>
    </Tag>
  );
}
