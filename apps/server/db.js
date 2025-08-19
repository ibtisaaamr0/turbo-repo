// db.js
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const dbPath = path.resolve(__dirname, "contacts.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("Failed to connect to database:", err);
  else console.log("Connected to SQLite database.");
});

db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS contact_info (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  links TEXT,
  img TEXT)`);

db.run(`
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT,
    bio TEXT,
    profile_pic TEXT,
    Skill_pic TEXT,
    about TEXT
  )
`);
db.run(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Pname TEXT,
    Pdes TEXT,
    Pinfo TEXT,
    Pimg TEXT
  )
`);

module.exports = db;
