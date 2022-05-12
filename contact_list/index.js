const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", function (req, res) {
  return res.render("index");
});
app.listen(port, function (err) {
  if (err) {
    return;
  }
  console.log(`the server is up on port ${port}`);
});
