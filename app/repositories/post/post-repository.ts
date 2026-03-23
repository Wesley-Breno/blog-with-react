import { PostModel } from "@/app/models/post/post-model";

export interface PostRepository {
    findAll(): Promise<PostModel[]>;
}