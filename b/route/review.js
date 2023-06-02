const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.get('/books/:book_id/comments', async (req, res) => {
        const book_id = req.params.book_id;
        connection.query("SELECT review, review_id FROM review WHERE book_id = ?",[book_id], (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error retrieving book review");
          } else if (result.length === 0) {
            res.status(404).send("Review not found");
          } else {
            res.json({
              success: true,
              message: "Found",
              comment: result,
            });
          }
        });
      });
    return router;
}