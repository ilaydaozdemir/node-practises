const express = require("express");
const app = express();

// ? olmasa da olur anlamına gelıyor
app.get("/ile(ti)?sim", (req, res) => {
  res.send("merhaba express ? ");
});

// ? i ifadesının yerıne her sey gelebılırs
app.get("/*letisim", (req, res) => {
  res.send("merhaba express");
});
// sol taraf tekrar ettıgı surece calısır
app.get("/i+letisim", (req, res) => {
  res.send("merhaba express");
});

app.listen(3000, () => {
  console.log("express server calıstırıldı");
});
