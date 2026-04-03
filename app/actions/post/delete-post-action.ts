'use server';

export async function deletePostAction(id: string) {
    console.log(`Post a ser deletado: ID ${id}`);    
    return id;
}