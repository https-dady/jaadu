const express = require("express");

const router = express.Router();
const {
  signupValidation,
  validate,
} = require("../validators/auth.validator");

const {
  signup,
   login,
   getMe,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");


router.get("/me", authMiddleware, getMe);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;