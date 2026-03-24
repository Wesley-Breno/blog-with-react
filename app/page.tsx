import { Suspense } from "react";
import { PostsList } from "./components/PostsList";
import { SpinLoader } from "./components/SpinLoader";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Header />

        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
          <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
            <Image
              src="/images/bryen_0.png"
              alt="Titulo do post"
              width={1200}
              height={720}
              className="group-hover:scale-105 transition"
            />
          </Link>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            omnis, nulla rem porro error debitis similique, hic fugiat quis
            quaerat suscipit optio soluta perferendis corrupti a quo.
            Reiciendis, dignissimos maiores?
          </div>
        </section>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className="text-6xl font-bold text-center py-8">Footer</p>
        </footer>
      </Container>
    </>
  );
}
