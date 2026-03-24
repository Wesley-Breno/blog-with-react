import { postRepository } from "@/app/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="flex flex-col group gap-4">
            <PostCoverImage
              src={`${post.coverImageUrl}`}
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
