const mysql = require("mysql2");

// Create a pool of database connections
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "admin_motionlab",
  waitForConnections: true,
  connectionLimit: 10, // Adjust this value based on your needs
  queueLimit: 0,
});

module.exports = pool;
