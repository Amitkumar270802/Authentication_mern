// Import the required modules
const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
  login,
  signUp,
  sendOTP,
} = require("../controller/Auth");


const { auth } = require("../middleware/auth");

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/signup", signUp);

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP);

// Route for Changing the password

// check token route
router.get("/checktoken", auth, (req, res) => {
  return res.status(200).json({
    message: "Token is valid",
    success: true,
  });
});

module.exports = router;
