const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();

module.exports = (connection) => {
    router.post("/create", async (req, res) => {
        const name = req.body.name;
        const username = req.body.username;
        const email = req.body.email;
        const pass = req.body.pass;
        const hash = await bcrypt.hash(pass, 10);
    
        connection.query(
            "INSERT INTO user (name, username, email, password) VALUES (?,?,?,?)",
            [name, username, email, hash],
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        status: 400,
                        message: "failed to create user"
                    })
                } else {
                    // Using MySQL's LAST_INSERT_ID() function to get the ID of the new user
                    connection.query('SELECT LAST_INSERT_ID() as user_id', (err, rows) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                status: 400,
                                message: "failed to retrieve new user id"
                            });
                        } else {
                            res.json({
                                status: 201,
                                message: "Successfully created account",
                                userId: rows[0].user_id  // Send back the new user's ID
                            });
                        }
                    });
                }
            }
        );
    });
    
    return router;
}