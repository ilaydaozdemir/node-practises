const express = require("express");
const app = express();
app.set("view engine", "pug");

//static(stil dosylarım) sayfalarımızın bulundugu dosyayı belırtıyorum
app.use(express.static("public"));
app.use(express.static("other-public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000, () => {
  console.log("express server calıstı");
});
