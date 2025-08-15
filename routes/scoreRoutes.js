const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { saveScore, getUserScores, getUserBestScore, deleteScore } = require("../controllers/scoreController");

router.post("/", protect, saveScore);
router.get("/", protect, getUserScores);
router.get("/best", protect, getUserBestScore);
router.delete("/:id", protect, deleteScore);

module.exports = router;

/**
 * @swagger
 * tags:
 *   - name: Score
 *     description: Score management
 *
 * /api/score:
 *   post:
 *     tags: [Score]
 *     summary: Save a user's score
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               score:
 *                 type: integer
 *               bestScore:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Score saved
 *
 *   get:
 *     tags: [Score]
 *     summary: Get all scores for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of scores
 *
 * /api/score/best:
 *   get:
 *     tags: [Score]
 *     summary: Get the best score for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Best score
 *
 * /api/score/{id}:
 *   delete:
 *     tags: [Score]
 *     summary: Delete a score by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Score deleted
 *       404:
 *         description: Score not found
 */