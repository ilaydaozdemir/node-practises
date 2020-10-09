const express = require("express");
const router = express.Router();

router.get("/signIn", (req, res) => {
  res.send("signIn sayfası");
});
router.get("/", (req, res) => {
  res.send("signIn  index sayfası");

});
router.post("/signIn", (req, res) => {
  res.send("signIn sayfası (POST method)");
});

//bu dosyayı farklı bır dosyaya ımport edecegım ıcın dısa aktarma yapıyorum
module.exports = router;
