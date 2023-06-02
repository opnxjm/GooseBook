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


const loginRouter = require("./route/login")(connection, "somesecretkey");
const registerRouter = require("./route/register")(connection);
const getUserRouter = require("./route/getUser")(connection);
const bookId = require("./route/book_id")(connection);
const deleteReviewRouter = require("./route/deleteReview")(connection);
const editReviewRouter = require("./route/editReview")(connection);
const addReviewRouter = require("./route/addReview")(connection);
const searchRouter = require("./route/search")(connection);
const reviewRouter = require("./route/review")(connection);
const getBookRouter = require("./route/getBook")(connection);


app.post("/login", loginRouter);
app.post("/create", registerRouter);
app.get("/getUser/:userId", getUserRouter);
app.get("/book/:book_id", bookId);
app.get("/books/:book_id/comments", reviewRouter);
app.post("/addReview/:userId/:book_id", addReviewRouter);
app.patch("/updateReview/:book_id/:commentId", editReviewRouter);
app.delete("/review/:book_id/:review_id", deleteReviewRouter);
app.get("/search", searchRouter);
app.get("/title", getBookRouter);




app.listen(3008, () => {
  console.log("Yey, your server is running on port 3008");
});
