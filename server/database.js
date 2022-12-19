const mysql = require('mysql')
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOSt,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME
});

 module.exports = db;


