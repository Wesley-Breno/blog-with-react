import { ManagePostForm } from "@/app/components/admin/ManagePostForm";
import { makePublicPostFromDb } from "@/app/dto/post/dto";
import { findPostByIdAdmin } from "@/app/lib/post/queries/admin";
import notFound from "@/app/not-found";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Editar post",
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch();

  if (!post) {
    notFound();
  }

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold">Editar post</h1>
      <ManagePostForm mode='update' publicPost={publicPost} />
    </div>
  );
}
