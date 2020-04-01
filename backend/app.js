var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("iniciando");
});

app.listen(3000);
