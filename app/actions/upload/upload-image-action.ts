'use server'

const IMAGE_UPLOAD_MAX_SIZE = 921600; // 900KB

type UploadImageActionResult = {
    url: string,
    error: string,
}

export async function uploadImageAction(formData: FormData): Promise<UploadImageActionResult> {
    const makeResult = ({url = '', error = ''}) => ({url, error});

    if (!(formData instanceof FormData)) {
        return makeResult({error: 'Dados inválidos'});
    }

    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
        return makeResult({error: 'Arquivo invalido'});
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
        return makeResult({error: `Arquivo muito grande.`});
    }

    if (!file.type.startsWith('image/')) {
        return makeResult({error: 'Imagem invalida.'});
    }

    return makeResult({url: 'URL DA IMAGEM'});
}