const express = require("express");
const app = express();
const port = 3000;
const db = require("./db"); // Import the db.js module

// Define a route
app.get("/", (req, res) => {
  //   res.send("Server is working");
  // Attempt to get a connection from the pool
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: "Database connection error" });
    }

    // Release the connection
    connection.release();

    // If no error occurred, the database is available
    res.json({ message: "Database is available" });
  });
});

// listner
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
