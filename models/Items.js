const mongoose = require("mongoose");
const Game = require("./Games");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemRarity:{
    type: String,
    required: true,

  },
  
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
