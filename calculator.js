const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var resu = a + b;
  console.log(resu);

  res.send(`calculate ${resu} `);
});

app.listen(3000, () => {
  console.log("setup is running");
});
