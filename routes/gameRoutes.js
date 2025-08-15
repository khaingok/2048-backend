const express = require("express");
const { getGame, saveGame } = require("../controllers/gameController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/")
  .get(protect, getGame)
  .post(protect, saveGame);
  
module.exports = router;

/**
 * @swagger
 * /api/game/start:
 *   post:
 *     summary: Start a new game
 *     responses:
 *       201:
 *         description: Game started
 *
 * /api/game/move:
 *   post:
 *     summary: Make a move in the game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               direction:
 *                 type: string
 *                 enum: [up, down, left, right]
 *     responses:
 *       200:
 *         description: Move processed
 */