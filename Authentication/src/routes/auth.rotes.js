// routes is for the endpoints of the application. It will handle all the routes related to authentication like register, login, logout etc.

// for the logic of an api, we will create a controller file and write the logic there and then we will import that logic in the routes file and use it in the routes.

const express = require('express');
const authController = require("../controller/auth.controller");

const router = express.Router();

router.post("/register", authController.registerUser);
module.exports = router;