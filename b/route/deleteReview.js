const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.delete("/review/:book_id/:commentId", async (req, res) => {
        const book_id = req.params.book_id;
        const commentId = req.params.commentId;
        connection.query("DELETE FROM review WHERE book_id = ? AND review_id = ?", [book_id, commentId], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error deleting review");
            }
            else if (result.length === 0) {
                res.status(400).send("No review");
            }
            else{
                res.send({
                    success: true,
                    message: 'Delete successfully',
                    comment: result,
                });
            }
        });
    });
    return router;
}