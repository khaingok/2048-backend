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
  const { board, score, bestScore } = req.body;

  try {
    const game = await Game.findOneAndUpdate(
      { user: req.user.id },
      { board, score, bestScore },
      { new: true, upsert: true }
    );
    res.json({ message: "Game saved successfully", game });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Game.findOneAndDelete({ user: req.user.id });
    res.json({ message: "Game deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
