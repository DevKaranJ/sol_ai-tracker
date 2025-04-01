const pool = require("./db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ Database Query Error", err);
  } else {
    console.log("✅ PostgreSQL Test Query:", res.rows);
  }
  pool.end();
});
// This code connects to a PostgreSQL database and runs a simple query to test the connection.