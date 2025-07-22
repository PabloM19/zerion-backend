import mysql from 'mysql2/promise';

const db = await mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'zerion_mvp',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 8889
});

export default db;
