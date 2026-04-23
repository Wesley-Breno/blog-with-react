'use server';

import { postRepository } from '@/app/repositories/post';

export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: 'Erro desconhecido',
    };
  }

  return {
    error: '',
  };
}