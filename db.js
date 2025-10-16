import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const { Client } = pg;

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  // This ensures SSL works smoothly with Neon
  },
});

db.connect()
  .then(() => console.log('Connected to Neon DB'))
  .catch((err) => console.error('Connection error', err.stack));

export default db;
