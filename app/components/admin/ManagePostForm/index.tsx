"use client";

import React from "react";
import { Button } from "../../button";
import { InputCheckbox } from "../../InputCheckbox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
  const [contentValue, setContentValue] = React.useState("Este é um exemplo de conteúdo em Markdown.");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">

        <InputText
          labelText="ID"
          name="ID"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={"asdasdasdas"}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerado automaticamente"
          type="text"
          defaultValue={"asdasdasdas"}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={""}
        />


        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o título do post"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={""}
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
          defaultValue={""}
        />

        <InputCheckbox 
          labelText="Publicar?"
          name="published"
          type="checkbox"
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
