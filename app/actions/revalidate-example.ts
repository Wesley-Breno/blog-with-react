'use server';

import { revalidatePath, revalidateTag } from "next/cache";


export async function revalidateExampleAction(formData: FormData) {
  const path = String(formData.get('path') || '').trim();
  console.log('Estou em uma server action', path);

  if (!path) return;

  revalidatePath(path);
  revalidateTag('posts', 'max');

  if (path === '/') {
    return;
  }

  const slug = path.match(/^\/post\/(.+)$/)?.[1];

  if (slug) {
    revalidateTag(`post-${slug}`, 'max');
  }
}