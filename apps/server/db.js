
const path=require("path");
const sqlite3=require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "contacts.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to connect to database:", err);
  } else {
    console.log("Connected to SQLite database.");
  }
});


db.run(`
    CREATE TABLE IF NOT EXISTS contacts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT

    )`)

module.exports=db;