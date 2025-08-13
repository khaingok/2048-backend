const express = require("express");
const { getGame, saveGame, deleteGame } = require("../controllers/gameController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/")
  .get(protect, getGame)
  .post(protect, saveGame)
  .delete(protect, deleteGame);

module.exports = router;
