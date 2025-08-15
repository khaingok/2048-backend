const express = require("express");
const { registerUser, loginUser, updatePassword } = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.put("/password", protect, updatePassword);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User management and authentication
 *
 * /api/users/register:
 *   post:
 *     tags: [User]
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Username or email already exists
 *
 * /api/users/login:
 *   post:
 *     tags: [User]
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 *
 * /api/users/update-password:
 *   put:
 *     tags: [User]
 *     summary: Update user password
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Current password is incorrect
 */