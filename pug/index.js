const express = require("express");
const app = express();

//1.pug dosyası set edılmelı
app.set("view engine", "pug");

app.get("/", (req, res) => {
  //1.pug dosyasının kullanılabılmesı render edılmelı
  //2.istersek parametre de verebılırız nesne olusturarak
  res.render("index", { name: "ilayda", surname: "özdemir" });
});
app.listen(3002, () => {
  console.log("express server calıstırıldı");
});

//1. .pug dosyası nesne klasörü ister.

//3. baska bir pug dosyasını index.pug dosyama include etme.
