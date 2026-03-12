const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
async function registerUser(req, res) {
    // ensure we actually received a JSON body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Request body is missing" });
    }

    // destructure with a fallback object to avoid runtime crash
    const { username, email, password } = req.body || {};

    const user = await userModel.create({
        username, email, password
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET,)

    res.status(201).json({
        message: "User registered successfully",
        user,
        token,
    });
}

module.exports = { registerUser };