const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.patch("/updateReview/:book_id/:commentId", async (req, res) => {
        const book_id = req.params.book_id;
        const commentId = req.params.commentId;
        const editedComment = req.body;
        console.log(commentId); 
        connection.query(
            "UPDATE review SET review = ? WHERE book_id = ? AND review_id = ?",
            [editedComment.review, book_id, commentId],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        comment: result,
                    });
                } else {
                    console.log(`Comment ${commentId} updated successfully`);
                    res.json({
                        success: true,
                        comment: result,
                    });
                }
            }
        );
    });
    return router;
};
