import { Suspense } from "react";
import { PostsList } from "./components/PostsList";
import { SpinLoader } from "./components/SpinLoader";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PostHeading } from "./components/PostHeading";
import { PostCoverImage } from "./components/PostCoverImage";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Header />

        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
          <PostCoverImage src="/images/bryen_9.png" alt="Titulo do post" url="#" width={1200} height={720} />

          <div className="flex flex-col gap-4 sm:justify-center">
            <time dateTime="2024-06-12" className="text-slate-600 block text-sm/tight">20/06/2024 10:00</time>

            <PostHeading url="#" as="h1">
              asasdads asdasd ass sadasdasd
            </PostHeading>

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
