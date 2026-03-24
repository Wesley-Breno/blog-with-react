import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "qualquer coisa";
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

      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt="2024-06-12"
        title="Titulo do post"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis, nulla rem porro error debitis similique, hic fugiat quis quaerat suscipit optio soluta perferendis corrupti a quo. Reiciendis, dignissimos maiores?"
      />
    </section>
  );
}
