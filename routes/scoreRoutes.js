const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { saveScore, getUserScores, getUserBestScore } = require("../controllers/scoreController");
const { getScores } = require("../controllers/scoreController");
const auth = require("../middleware/auth");

router.post("/", protect, saveScore);
router.get("/", protect, getUserScores);
router.get("/best", protect, getUserBestScore);
router.get("/", auth, getScores);
router.delete("/:id", protect, deleteScore);

module.exports = router;
