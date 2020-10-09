const express = require("express");
const app = express();

//içe aktarıyorum

const signIn = require("./routes/signIn");

app.use("/user", signIn);

app.listen(3000, () => {
  console.log("express server calıstı");
});