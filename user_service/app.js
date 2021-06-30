var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
  var cors = require("cors");
  var demo = require("./routes/index");
  app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/demo", demo);

app.listen(5000, function () {
  console.log("The  Server Has Started!" +5000);
});
