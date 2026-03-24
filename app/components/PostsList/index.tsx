import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/app/lib/post/queries";

export async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="flex flex-col group gap-4">
            <PostCoverImage
              src={post.coverImageUrl}
              alt={post.title}
              url={postLink}
              width={1200}
              height={720}
            />

            <PostSummary
              postLink={postLink}
              postHeading="h2"
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
