const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

  moviename: { type: String, required: true },
  review: { type: String },
collected: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", MovieSchema);