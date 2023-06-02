const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.post("/addReview/:userId/:book_id", async (req, res) => {
        const userId = req.params.userId;
        const book_id = req.params.book_id;
        const comment = req.body.review;
        console.log(comment);
        connection.query(
            "INSERT INTO review (user_id, book_id, review) VALUES (?, ?, ?)",
            [userId, book_id, comment],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Failed to add review");
                }
                else{
                    res.status(201).json({
                        message: "Comment added successfully",
                        comment: comment
                    });
                }
        });
    });
    return router;
}