const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(text, username) {
  try {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
      text,
      username,
    ]);
    console.log();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getMessages, addMessage };