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
 * tags:
 *   - name: Game
 *     description: Game save/load operations
 *
 * /api/game:
 *   get:
 *     tags: [Game]
 *     summary: Load the last saved game for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Game loaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       401:
 *         description: Unauthorized
 *
 *   post:
 *     tags: [Game]
 *     summary: Save the current game for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               board:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: integer
 *               score:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Game saved successfully
 *       401:
 *         description: Unauthorized
 */