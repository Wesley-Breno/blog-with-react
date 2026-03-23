import { PostModel } from "@/app/models/post/post-model";
import { PostRepository } from "@/app/repositories/post/post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
    private async readFromDisk() {}

    async findAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();

console.log("ROOT_DIR", ROOT_DIR);
