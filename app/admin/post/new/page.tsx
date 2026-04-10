import { InputText } from "@/app/components/InputText";

export const dymic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputText labelText="Nome" placeholder="Digite seu nome"/> 
      <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome"/> 
      <InputText disabled labelText="Sobrenome" placeholder="Digite seu sobrenome"/> 
      <InputText readOnly labelText="Sobrenome" placeholder="Digite seu sobrenome"/> 

    </div>
  );
}