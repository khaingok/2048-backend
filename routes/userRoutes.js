const express = require("express");
const { registerUser, loginUser, updatePassword } = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.put("/password", protect, updatePassword);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
