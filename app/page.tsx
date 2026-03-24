import { Suspense } from "react";
import { PostsList } from "./components/PostsList";
import { SpinLoader } from "./components/SpinLoader";
import { Container } from "./components/Container";

export default async function HomePage() {
  return (
    <>
      <Container>
        <header>
          <h1 className="text-6xl font-bold text-center py-8">
            Aqui é a HEADER
          </h1>

          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            sapiente corrupti esse iure! Quos, atque. Vero veritatis iure
            incidunt totam provident laudantium quo quidem iusto dolorem!
            Dolorum officiis molestiae rem?
          </p>
        </header>

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
