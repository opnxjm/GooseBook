const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

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

app.get("/user", (req, res) => {
    connection.query("SELECT * FROM user", (err, result) => {
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
})

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
  });

app.listen(3008, () => {
    console.log("Yey, your server is running on port 3008");
});
