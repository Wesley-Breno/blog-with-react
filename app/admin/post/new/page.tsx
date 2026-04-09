import { Button } from "@/app/components/button";

export const dymic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex gap-4 flex-wrap">
      <Button variant="default" size="sm">Funciona como o do JSX</Button>
      <Button variant="ghost" size="md">Funciona como o do JSX</Button>
      <Button variant="danger" size="lg">Funciona como o do JSX</Button>
    </div>
  );
}
