const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

module.exports = (connection, secretKey) => {
  router.post("/login", async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
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
              message: "This username does not exist",
            });
          } else {
            const user = rows[0];
            bcrypt.compare(pass, user.password, (err, isMatch) => {
              if (err) {
                res.json({
                  success: false,
                  data: null,
                  error: err.message,
                });
              } else {
                if (!isMatch) {
                  console.log(pass);
                  console.log(user.password);
                  res.json({
                    success: false,
                    message: "The password is incorrect",
                  });
                } else {
                  const token = jwt.sign(
                    { username: user.username },
                    secretKey,
                    { expiresIn: "1h" }
                  );
                  res.cookie("token", token);
                  res.cookie("user_id", user.user_id);

                  res.json({
                    success: true,
                    message: "The password is correct",
                    user: rows[0],
                  });
                }
              }
            });
          }
        }
      }
    );
  });
  return router;
};