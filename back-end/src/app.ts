import express from 'express';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './model/schema.js';
import helloController from './controller/hello.controller.js';

const app = express();
app.use(express.json());

const DATABASE_URL =
  process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/app';

const pool = mysql.createPool(DATABASE_URL);
const db = drizzle(pool, { schema, mode: 'default' });

// Simple route to expose DB via controller
app.use('/api/hello', helloController);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

export { db, pool };
