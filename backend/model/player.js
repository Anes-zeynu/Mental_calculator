const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date.now(),
  },
});

module.exports = mongoose.model("player", playerSchema);
