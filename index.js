const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Boss is running");
});

app.listen(port, (req, res) => {
  console.log(`Boss is listening on port ${port}`);
});
