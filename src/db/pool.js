const {Pool} = require('pg');
require('dotenv').config();

module.exports = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PASS,
    port: process.env.DB_PORT
}) 