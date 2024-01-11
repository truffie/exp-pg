require('dotenv').config();
const { Pool } = require('pg');

const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const USER = process.env.USER;

const pool = new Pool({
  user: USER,
  host: HOST,
  database: 'skills',
  password: PASSWORD,
  port: '5432',
});

module.exports = { pool };
