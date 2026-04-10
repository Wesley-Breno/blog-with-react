"use client";

import React from "react";
import { Button } from "../../button";
import { InputCheckbox } from "../../InputCheckbox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";

export function ManagePostForm() {
  const [contentValue, setContentValue] = React.useState("Este é um exemplo de conteúdo em Markdown.");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="Nome"
          placeholder="Digite seu nome"
          type="password"
        />
        <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />

        <InputCheckbox labelText="Sobrenome" />

        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
        />

        <MarkdownEditor
          disabled={false}
          labelText="Conteúdo"
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />


        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
        />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          readOnly
        />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
          readOnly
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
