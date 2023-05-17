const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");
const crypto = require('crypto');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'server2.bsthun.com',
  user: 'lab_1seeas',
  port: "6105",
  password: 'FFa0LjByPPlG1clt',
  database: 'lab_blank01_1s3kdhx',
});
connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database = ', err)
    return;
  }
  console.log('MySQL successfully connected!');
})

app.get("/login", (req, res) => {
  connection.query("SELECT email, pass FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/user/:email", async (req, res) => {
  const email = req.params.email;
  connection.query("SELECT name, profile_pic FROM user WHERE email = ?", email, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving user record");
    } else if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(result[0]);
    }
  });
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const pass = req.body.pass;

  connection.query(
    "INSERT INTO user (name, surname, email, pass) VALUES (?,?,?,?)",
    [name, surname, email, pass],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});// Assuming you have an Express.js server set up



app.post("/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  connection.query(
      "SELECT pass, salt FROM user WHERE email = ?",
      [email],
      (err, result) => {
      if (err) {
          console.error(err.message);
          return res.json({
            success: false,
            data: null,
            error: err.message,
          });
      }
      if (result.length === 0) {
          return res.status(401).json({ message: "Authentication failed" });
      }
      const encryptedPassword = result[0].pass;
      const decryptedPassword = decrypt(encryptedPassword);
      if (pass === decryptedPassword) {
        return res.status(200).json({ message: "Authentication successful" });
      } else {
        return res.status(401).json({ message: "Authentication failed" });
      }
    }
  );
});

app.get("/book/:title", async (req, res) => {
  const title = req.params.title;
  connection.query("SELECT title, author, publisher, published_year, book_description, language, book_cover FROM book WHERE title = ?", [title], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving book record");
    } else if (result.length === 0) {
      res.status(404).send("Book not found");
    } else {
      res.send(result[0]);
    }
  });
});

app.get("/book", (req, res) => {
  connection.query("SELECT * FROM book", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3008, () => {
  console.log("Yey, your server is running on port 3008");
});
