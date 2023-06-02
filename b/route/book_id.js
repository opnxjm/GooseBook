const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.get("/book/:book_id", async (req, res) => {
        const book_id = req.params.book_id;
        connection.query("SELECT * FROM book WHERE book_id = ?", [+book_id], (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error retrieving book");
          } else if (result.length === 0) {
            res.status(404).send("No book");
          } else {
            res.send({
              success: true,
              message: "Found",
              book: result[0]
            });
          }
        });
    });
    return router;
}