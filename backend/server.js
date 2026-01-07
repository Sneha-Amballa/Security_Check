const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Location = require("./model");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/locationDB");

app.post("/location", async (req, res) => {
  await Location.create(req.body);
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
