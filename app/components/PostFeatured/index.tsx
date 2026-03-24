import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
    const slug = 'qualquer coisa';
    const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        src="/images/bryen_9.png"
        alt="Titulo do post"
        url={postLink}
        width={1200}
        height={720}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          dateTime="2024-06-12"
          className="text-slate-600 block text-sm/tight"
        >
          20/06/2024 10:00
        </time>

        <PostHeading url={postLink} as="h1">
          asasdads asdasd ass sadasdasd
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          omnis, nulla rem porro error debitis similique, hic fugiat quis
          quaerat suscipit optio soluta perferendis corrupti a quo. Reiciendis,
          dignissimos maiores?
        </p>
      </div>
    </section>
  );
}
