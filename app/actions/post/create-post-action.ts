'use server'

type CreatePostActionState = {
    numero: number
}

export async function createPostAction(prevState: CreatePostActionState): Promise<CreatePostActionState> {
    return {
        numero: prevState.numero + 1,
    }
}