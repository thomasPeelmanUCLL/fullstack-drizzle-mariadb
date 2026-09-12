import { Router, Request, Response } from 'express';
import { pool } from '../app.js';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute('SELECT 1 AS ok');
    res.json({ message: 'Hello from Express + Drizzle + MariaDB', dbOk: rows });
  } catch (err) {
    res.status(500).json({ message: 'DB error', error: String(err) });
  }
});

export default router;
