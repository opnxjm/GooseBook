const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var jwt = require('jsonwebtoken');

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
      console.log(result);
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
});


app.post("/club", (req, res) => {
  const club_name = req.body.club_name;
  const club_description = req.body.club_description;
  const club_cover = req.body.club_cover;
  if (!club_name || !club_description || !club_cover) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  connection.query(
    "INSERT INTO bookClub (club_name, club_description, club_cover) VALUES (?,?,?)",
    [club_name, club_description, club_cover],
    (err, result) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        return res.status(500).json({ error: "Failed to create club" });
      }
      res.status(201).json({ 
        message: "Club created successfully", 
        clubId: result.insertId });
    }
  );
});

// app.post("/search", (req, res) => {
//   const  = req.body.club_name;
//   const club_description = req.body.club_description;
//   const club_cover = req.body.club_cover;
//   if (!club_name || !club_description || !club_cover) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }
//   connection.query(
//     "INSERT INTO bookClub (club_name, club_description, club_cover) VALUES (?,?,?)",
//     [club_name, club_description, club_cover],
//     (err, result) => {
//       if (err) {
//         console.error("Error executing SQL query:", err);
//         return res.status(500).json({ error: "Failed to create club" });
//       }
//       res.status(201).json({ 
//         message: "Club created successfully", 
//         clubId: result.insertId });
//     }
//   );
// });

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  connection.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    async (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        const numRows = rows.length;
        if (numRows == 0) {
          res.json({
            success: false,
            message: "This email does not exist",
          });
        } else {
          const isMatch = comparePasswords(password, rows[0].pass);
          console.log(password);
          console.log(rows[0].pass);
          if (!isMatch) {
            res.json({
              success: false,
              message: "The password is incorrect",
            });
          } else {
            const token = jwt.sign(
              {
                userId: rows[0].id,
              },
              "ZJGX1QL7ri6BGJWj3t",
              { expiresIn: "1h" }
            );
            res.cookie("user", token);
            res.json({
              success: true,
              message: "The password is correct",
              user: rows[0],
            });
          }
        }
      }
    }
  );
});

function comparePasswords(password, hashedPassword) {
  const passwordBuffer = Buffer.from(password, 'utf-8');
  const hashedPasswordBuffer = Buffer.from(hashedPassword, 'utf-8');

  return crypto.timingSafeEqual(passwordBuffer, hashedPasswordBuffer);
}

app.get("/title/:review", async (req, res) => {
  const title = req.params.title;
  connection.query("SELECT review FROM review INNER JOIN book b on review.book_id = b.book_id WHERE SELECT review FROM review INNER JOIN book b on review.book_id = b.book_id WHERE title = ?", [title], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving review");
    } else if (result.length === 0) {
      res.status(404).send("No review");
    } else {
      res.send(result[0]);
    }
  });
});

app.get("/title", async (req, res) => {

  connection.query("SELECT * FROM book",(err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving user record");
    } else if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.json({
        success: true,
        message: "The password is correct",
        user: result,
      });
    }
  });
  
});

app.listen(3008, () => {
  console.log("Yey, your server is running on port 3008");
});
