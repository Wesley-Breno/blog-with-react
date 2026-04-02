import { postRepository } from "@/app/repositories/post";
import { cache } from "react";

export const findPostByIdAdmin = cache(
  async (id: string) => {
    return await postRepository.findById(id);
  }
);

export const findAllPostsAdmin = cache(async () => {
    return await postRepository.findAll();
});