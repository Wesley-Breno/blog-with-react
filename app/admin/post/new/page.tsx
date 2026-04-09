import { Button } from "@/app/components/button";
import { BugIcon } from "lucide-react";

export const dymic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div>
      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm">
          <BugIcon /> Funciona como o do JSX
        </Button>
        <Button variant="ghost" size="md">
          <BugIcon /> Funciona como o do JSX
        </Button>
        <Button variant="danger" size="lg">
          <BugIcon /> Funciona como o do JSX
        </Button>
      </div>

      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm" disabled>
          <BugIcon /> Funciona como o do JSX
        </Button>
        <Button variant="ghost" size="md" disabled>
          <BugIcon /> Funciona como o do JSX
        </Button>
        <Button variant="danger" size="lg" disabled>
          <BugIcon /> Funciona como o do JSX
        </Button>

        
      </div>
    </div>
  );
}
