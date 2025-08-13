const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  board: { type: [[Number]], required: true },
  score: { type: Number, required: true },
});

module.exports = mongoose.model("Game", gameSchema);
