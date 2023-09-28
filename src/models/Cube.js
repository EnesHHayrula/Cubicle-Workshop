const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,

  accessories: [
    {
      type: mongoose.Types.ObjectId, // syntax from mongo
      ref: "Accessory", // name of the model
    },
  ],
});
const Cube = mongoose.model("Cube", cubeSchema);
module.exports = Cube;
