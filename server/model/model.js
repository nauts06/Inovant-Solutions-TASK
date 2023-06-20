const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  addImages1: {
    type: String,
  },
  addImages2: {
    type: String,
  },
  addImages3: {
    type: String,
  },
  addImages4: {
    type: String,
  },
});

module.exports = mongoose.model("User", dataSchema);
