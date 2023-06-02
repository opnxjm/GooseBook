const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.get("/search", async (req, res) => {
        const title = req.query.title;
        connection.query("SELECT * FROM book WHERE title = ?", [title], (err, result) => {
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
