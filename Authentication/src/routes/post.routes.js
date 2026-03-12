const express =require('express');

const router = express.Router();


router.post("/create", (req, res) => {
    const token = req.cookies.token; // Assuming the token is stored in a cookie named 'token'
    if (!token) {
        return res.status(401).json({ message: "Unauthorized"})
        }
    JsonWebTokenError.
    // respond with a simple message or JSON
    res.send("Post created successfully");
});
module.exports = router;