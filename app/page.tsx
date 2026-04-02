import { Suspense } from "react";
import { PostsList } from "./components/PostsList";
import { SpinLoader } from "./components/SpinLoader";
import { PostFeatured } from "./components/PostFeatured";

export const dynamic = 'force-static';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
