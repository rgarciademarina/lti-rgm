import express, { Request, Response } from 'express';
import pool from './db'; // Import the 'pool' object from the appropriate file

require('dotenv').config();
const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/test-db', async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al conectar con la base de datos');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});