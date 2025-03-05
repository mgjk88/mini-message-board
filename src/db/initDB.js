const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS messages
   (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
   text VARCHAR (255),
   username VARCHAR (255), 
   date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
   
   INSERT INTO messages (text, username)
   VALUES 
   ('Hi there!', 'Amando'),
   ('Hello World!', 'Charles');
   `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      `postgresql://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
