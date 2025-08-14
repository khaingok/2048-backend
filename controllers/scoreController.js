const Score = require("../models/Score");
exports.saveScore = async (req, res) => {
  try {
    const { score, bestScore } = req.body;
    const userId = req.user.id;
    const newScore = await Score.create({ user: userId, score, bestScore });
    res.status(201).json({ message: "Score saved", score: newScore });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getUserBestScore = async (req, res) => {
  try {
    console.log("req.user:", req.user); // Debug line
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const bestScoreDoc = await Score.findOne({ user: userId }).sort({ score: -1 });
    res.json({ bestScore: bestScoreDoc ? bestScoreDoc.score : 0 });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch best score" });
  }
};

// exports.getUserBestScore = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const bestScoreDoc = await Score.findOne({ user: userId }).sort({ score: -1 });
//     res.json({ bestScore: bestScoreDoc ? bestScoreDoc.score : 0 });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch best score" });
//   }
// };

exports.deleteScore = async (req, res) => {
  try {
    console.log("Delete request for score id:", req.params.id);
    const score = await Score.findById(req.params.id);
    if (!score) {
      return res.status(404).json({ message: "Score not found" });
    }
    if (score.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this score" });
    }
    await score.deleteOne();
    res.json({ message: "Score deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete score" });
  }
};