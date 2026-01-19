const mongoose = require("mongoose");
const User = require("./User");

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
