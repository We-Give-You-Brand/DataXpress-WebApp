const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5500;

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Connected to http://localhost:${PORT}`);
});

// Static files
app.use(express.static("assets"));

// Templating Engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/account", (req, res) => {
  res.render("pages/account");
});
