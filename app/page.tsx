import { Header } from "./components/Header";
import { SpinLoader } from "./components/SpinLoader";

export default async function HomePage() {
  return (
    <>
    <div>
      <SpinLoader className="min-h-[500px] bg-amber-500" />
    </div>
    </>
  );
}
