/* eslint-disable no-undef */
//IMPORTS
import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

//MIDDLEWARE
const app = express();
app.use(express.json());
dotenv.config();
const databaseURL = process.env.DATABASE_URL;
const { Pool } = pkg;
const pool = new Pool({
  connectionString: databaseURL,
});
app.use(cors({ origin: '*' }));
// console.log(pool); //Pool is working

//ERROR FUNCTIONS
const serverError = (res) => {
  res
    .status(500)
    .setHeader('Content-Type', 'text/plain')
    .send('INTERNAL SERVER ERROR');
};

//RESTFUL ROUTES FOR USERS
app.get('/users', async (_, res) => {
  try {
    const results = await pool.query(`SELECT * FROM users;`);
    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .send(results.rows);
  } catch (error) {
    console.log(error);
    serverError();
  }
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE users_id = ${id}`
    );
    if (result.rowCount === 0) {
      res
        .status(404)
        .setHeader('Content-Type', 'text/plain')
        .send('USER NOT FOUND');
      return;
    }
    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .send(result.rows[0]);
  } catch (error) {
    console.log(error);
    serverError();
  }
});

app.post('/users', async (req, res) => {
  const { firstname, lastname, owned_coins } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users (firstname, lastname, owned_coins) VALUES ('${firstname}', '${lastname}', ARRAY ['${owned_coins}']);`
    );
    console.log(result);
    res
      .status(201)
      .setHeader('Content-Type', 'application/json')
      .send('USER SUCCESSFULLY ADDED');
  } catch (error) {
    console.log(error);
    serverError();
  }
});

//NEED TO FIX THE UNDEFINED PROBLEMS
app.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, owned_coins } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users SET firstname = '${firstname}', lastname = '${lastname}', owned_coins= ARRAY ['${owned_coins}'] WHERE users_id = ${id};`
    );
    //IF THERE IS NO USER
    if (result.rowCount === 0) {
      res
        .status(404)
        .setHeader('Content-Type', 'text/plain')
        .send('USER NOT FOUND');
      return;
    } else {
      res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .send('USER UPDATED SUCCESSFULLY');
      return;
    }
  } catch (error) {
    console.log(error);
    serverError();
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `DELETE FROM users WHERE users_id = ${id} RETURNING *`
    );
    if (result.rowCount === 0) {
      res
        .status(404)
        .setHeader('Content-Type', 'text/plain')
        .send('USER NOT FOUND');
      return;
    }

    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .send('USER HAS BEEN DELETED');
  } catch (error) {
    console.log(error);
    serverError();
  }
});

// //RESTFUL ROUTES FOR COINS
// app.get('/coins', async (_, res) => {
//   try {
//     const results = await pool.query(`SELECT * FROM coins;`);
//     res
//       .status(200)
//       .setHeader('Content-Type', 'application/json')
//       .send(results.rows);
//   } catch (error) {
//     console.log(error);
//     serverError();
//   }
// });

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});
