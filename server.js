/* eslint-disable no-undef */
//IMPORTS
import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';

//MIDDLEWARE
const app = express();
app.use(express.json());
dotenv.config();
const databaseURL = process.env.DATABASE_URL;
const { Pool } = pkg;
const pool = new Pool({
  connectionString: databaseURL,
});

// console.log(pool); //Pool is working

app.get('/users', async (_, res) => {
  try {
    const results = await pool.query(`SELECT * FROM users;`);
    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .send(results.rows);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .setHeader('Content-Type', 'text/plain')
      .send('INTERNAL SERVER ERROR');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});
