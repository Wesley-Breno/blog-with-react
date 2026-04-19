import { PostModel } from "@/app/models/post/post-model";

export type PublicPost = Omit<PostModel, "updatedAt">

export const makePartialPublicPost = (post?: Partial<PostModel>): PublicPost => {
    return {
        id: post?.id || "",
        title: post?.title || "",
        slug: post?.slug || "",
        excerpt: post?.excerpt || "",
        author: post?.author || "",
        content: post?.content || "",
        coverImageUrl: post?.coverImageUrl || "",
        published: post?.published || false,
        createdAt: post?.createdAt || "",
    }
}

export const makePublicPostFromDb = (post: PostModel): PublicPost => {
    return makePartialPublicPost(post)
}