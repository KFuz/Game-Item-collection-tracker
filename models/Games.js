const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },

});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
