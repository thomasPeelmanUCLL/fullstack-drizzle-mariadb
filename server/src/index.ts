import express from 'express';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './db/schema.js';

const app = express();
app.use(express.json());

const DATABASE_URL =
  process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/app';

const pool = mysql.createPool(DATABASE_URL);
const db = drizzle(pool, { schema, mode: 'default' });

app.get('/api/hello', async (_req, res) => {
  // Simple query to ensure DB connection works
  try {
    const [rows] = await pool.execute('SELECT 1 AS ok');
    res.json({ message: 'Hello from Express + Drizzle + MariaDB', dbOk: rows });
  } catch (err) {
    res.status(500).json({ message: 'DB error', error: String(err) });
  }
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
