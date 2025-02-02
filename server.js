const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/random-quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.get("/search", async (req, res) => {
  try {
    const { author } = req.query;
    const response = await axios.get(`https://api.quotable.io/quotes?author=${author}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
