'use server'

import { PublicPost } from "@/app/dto/post/dto"

type CreatePostActionState = {
    formState: PublicPost,
    errors: string[],

}

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData
): Promise<CreatePostActionState> {

    const title = formData.get("title")?.toString() || "";

    return {
        formState: { ...prevState.formState, title },
        errors: [],
    }
}