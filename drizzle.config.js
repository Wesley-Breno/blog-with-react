import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './app/db/drizzle/migrations',
    schema: './app/db/drizzle/schemas.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: './db.sqlite3'
    }
});
