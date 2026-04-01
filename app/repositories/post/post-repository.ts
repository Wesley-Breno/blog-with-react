import { PostModel } from "@/app/models/post/post-model";

export interface PostRepository {
    findAllPublic(): Promise<PostModel[]>;
    findBySlugPublic(slug: string): Promise<PostModel>;
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
}