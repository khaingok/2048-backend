const Game = require("../models/Game");

exports.getGame = async (req, res) => {
  try {
    const game = await Game.findOne({ user: req.user.id });
    if (!game) return res.status(404).json({ error: "No saved game found" });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.saveGame = async (req, res) => {
  const { board, score } = req.body;

  try {
    const game = await Game.findOneAndUpdate(
      { user: req.user.id },
      { board, score},
      { new: true, upsert: true }
    );
    res.json({ message: "Game saved successfully", game });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
