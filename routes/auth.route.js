const express = require('express');
const router = express.Router();

const signupHandler = require("../controller/signupController");
const LoginHandler = require("../controller/loginController");
 
router.route("/register")
    .post(signupHandler)

router.route("/login")
    .post(LoginHandler)

module.exports = router;