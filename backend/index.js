require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Location = require("./model");

const app = express();

/* Middleware */
app.use(cors({ origin: "*" }));
app.use(express.json());

/* MongoDB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

/* Routes */
app.post("/location", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const { latitude, longitude } = req.body;

    if (latitude === undefined || longitude === undefined) {
      return res.status(400).json({ error: "Invalid location data" });
    }

    await Location.create({ latitude, longitude });
    console.log("Saved to DB");

    res.json({ message: "Location saved" });
  } catch (err) {
    console.error("SAVE ERROR:", err);
    res.sendStatus(500);
  }
});


/* Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
