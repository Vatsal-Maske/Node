const express = require('express');
const cookieParser = require('cookie-parser');   // ← add this
const authRoutes = require("./routes/auth.rotes");
const postRoutes = require("./routes/post.routes");
const app = express();

app.use(express.json());
app.use(cookieParser());                        // ← now req.cookies will be populated

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
module.exports = app;