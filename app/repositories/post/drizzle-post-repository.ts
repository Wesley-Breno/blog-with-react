import { drizzleDb } from "@/app/db/drizzle";
import { postsTable } from "@/app/db/drizzle/schemas";
import { PostModel } from "@/app/models/post/post-model";
import { PostRepository } from "@/app/repositories/post/post-repository";
import { desc, eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";


export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]> {
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, {desc}) => desc(posts.createdAt),
            where: (posts, {eq}) => eq(posts.published, true)
        });

        return posts;
    }
        
    async findBySlugPublic(slug: string): Promise<PostModel> {
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, {eq, and}) => and(eq(posts.slug, slug), eq(posts.published, true))
        });

        if (!post) throw new Error(`Post with slug ${slug} not found`);

        return post;
    }

    async findAll(): Promise<PostModel[]> {
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, {desc}) => desc(posts.createdAt),
        });

        return posts;
    }
        
    async findById(id: string): Promise<PostModel> {
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, {eq}) => eq(posts.id, id)
        });

        if (!post) throw new Error(`Post with id ${id} not found`);

        return post;
    }

    async deleteById(id: string) {
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, {eq}) => eq(posts.id, id)
        });

        if (!post) throw new Error(`Post with id ${id} not found`);

        await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

        revalidateTag('posts', {});
        revalidateTag(`post-${post.slug}`, {});
        
    }
}

// (async () => {
//     const repo = new DrizzlePostRepository();
//     const posts =await repo.findAllPublic();

//     posts.forEach((post) => {
//         console.log(post.slug, post.published);
//     });
// })();