const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 4000;

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Connected to http://localhost:${PORT}`);
});

// Static files
app.use(express.static("assets"));

// Templating Engine
app.set("view engine", "ejs");

// Router

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
