'use server'

import { makePartialPublicPost, PublicPost } from "@/app/dto/post/dto"
import { PostCreateSchema } from "@/app/lib/post/validation";
import { getZodErrorMessages } from "@/app/utils/get-zod-error-messages";

type CreatePostActionState = {
    formState: PublicPost,
    errors: string[],

}

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData
): Promise<CreatePostActionState> {
    
    if (!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            errors: ['Dados invalidos.'],
        };
    }

    const formDataToObj = Object.fromEntries(formData.entries());
    const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);

    if (!zodParsedObj.success) {
        const errors = getZodErrorMessages(zodParsedObj.error.format());
        return {
            errors,
            formState: makePartialPublicPost(formDataToObj),
        }
    }

    const validPostData = zodParsedObj.data;
    const newPost: PostModel = {
        ...validPostData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        id: Date.now().toString(),
        slug: Math.random().toString(36),
    }

    return {
        formState: newPost,
        errors: [],
    }
}
