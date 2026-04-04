'use server';

import { postRepository } from "@/app/repositories/post";

export async function deletePostAction(id: string) {
    if (!id || typeof id !== 'string') {
        return {
            error: 'ID do post é obrigatório e deve ser uma string.',
        }
    }

    const post = await postRepository.findById(id).catch(() => undefined);

    if (!post) {
        return {
            error: 'Post não encontrado.',
        };
    }
    
    postRepository.deleteById(id)

    return {
        error: '',
    };
}