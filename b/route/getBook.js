const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.get("/title", async (req, res) => {
        connection.query("SELECT * FROM book", (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error retrieving book record");
            } else if (result.length === 0) {
                res.status(404).send("Book not found");
            } else {
                res.json({
                    success: true,
                    message: "Found",
                    book: result,
                });
            }
        });
    });
    return router;
}