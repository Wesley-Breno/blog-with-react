import { postRepository } from "@/app/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                dateTime={post.createdAt}
                className="text-slate-600 block text-sm/tight"
              >
                {post.createdAt}
              </time>

              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>

              <p>
                {post.excerpt}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
