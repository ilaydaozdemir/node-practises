const express = require("express");
const app = express();
app.set("view engine", "pug");
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3001, () => {
  console.log("express server calıstı");
});
