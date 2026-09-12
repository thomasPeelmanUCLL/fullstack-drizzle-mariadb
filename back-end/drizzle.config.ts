import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/model/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/app',
  },
  strict: true,
});
