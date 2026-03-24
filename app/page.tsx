import { Suspense } from "react";
import { PostsList } from "./components/PostsList";
import { SpinLoader } from "./components/SpinLoader";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PostFeatured } from "./components/PostFeatured";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Header />

        <Suspense fallback={<SpinLoader />}>
          <PostFeatured />
        </Suspense>

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
