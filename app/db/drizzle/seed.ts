import { JsonPostRepository } from "@/app/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
    const jsonPostRepository = new JsonPostRepository();
    const posts = await jsonPostRepository.findAll();

    try {
        // Reset table so seed can run repeatedly without duplicate key errors.
        await drizzleDb.delete(postsTable);
        await drizzleDb.insert(postsTable).values(posts);
        console.log(`Seed concluido: ${posts.length} posts inseridos.`);
    } catch (error) {
        console.error("Error seeding posts:", error);
        process.exitCode = 1;
    }
})();    