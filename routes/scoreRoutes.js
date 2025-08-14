const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { saveScore, getUserScores, getUserBestScore, deleteScore } = require("../controllers/scoreController");

router.post("/", protect, saveScore);
router.get("/", protect, getUserScores);
router.get("/best", protect, getUserBestScore);
router.delete("/:id", protect, deleteScore);

module.exports = router;
