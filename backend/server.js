const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express(); // 👈 THIS was missing

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
