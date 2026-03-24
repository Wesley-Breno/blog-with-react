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
              className="w-full h-full object-cover object-center group-hover:scale-105 transition"
              priority
            />
          </Link>
          <div className="flex flex-col gap-4 sm:justify-center">
            <time dateTime="2024-06-12" className="text-slate-600 block text-sm/tight">20/06/2024 10:00</time>

            <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
              <Link href="#">Titulo do Post</Link>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              omnis, nulla rem porro error debitis similique, hic fugiat quis
              quaerat suscipit optio soluta perferendis corrupti a quo.
              Reiciendis, dignissimos maiores?
            </p>
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
