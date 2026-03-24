import {
  formateDatetime,
  formateRelativeDate,
} from "@/app/utils/format-datetime";
import { PostHeading } from "../PostHeading";
import { PostModel } from "@/app/models/post/post-model";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        dateTime={createdAt}
        className="text-slate-600 block text-sm/tight"
        title={formateDatetime(createdAt)}
      >
        {formateRelativeDate(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
