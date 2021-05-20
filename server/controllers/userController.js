const router = require("express").Router();
const userModel = require("../models/users/userModel");
const auth = require("../authentication/auth");
router.post("/register", userModel.registerUser);
router.post("/login", userModel.loginUser);
router.post("/verfy-token", auth.verifyToken);

module.exports = router;
