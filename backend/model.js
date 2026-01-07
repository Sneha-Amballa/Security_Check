const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Location", LocationSchema);
