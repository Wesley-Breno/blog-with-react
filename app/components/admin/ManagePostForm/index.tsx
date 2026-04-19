"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Button } from "../../button";
import { InputCheckbox } from "../../InputCheckbox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";
import { ImageUploader } from "../ImageUploader";
import { PublicPost } from "@/app/dto/post/dto";
import { createPostAction } from "@/app/actions/post/create-post-action";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(
    publicPost?.content || "Escreva o conteúdo do post aqui...",
  );

  const initialState = {
    numero: 0,
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState,
  );

  useEffect(() => {
    
  }, [state.numero])

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="ID"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={publicPost?.id || ""}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerado automaticamente"
          type="text"
          defaultValue={publicPost?.slug || ""}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={publicPost?.author || ""}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o título do post"
          type="text"
          defaultValue={publicPost?.title || ""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={publicPost?.excerpt || ""}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a URL da imagem"
          type="text"
          defaultValue={publicPost?.coverImageUrl || ""}
        />

        <InputCheckbox
          labelText="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={publicPost?.published || false}
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
