const express = require("express");
const { getGame, saveGame } = require("../controllers/gameController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/")
  .get(protect, getGame)
  .post(protect, saveGame);
  
module.exports = router;
