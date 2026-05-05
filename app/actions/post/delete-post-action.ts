'use server';

import { verifyLoginSession } from '@/app/lib/login/manage-login';
import { postRepository } from '@/app/repositories/post';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: 'Faça login novamente em outra aba',
    };
  }

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