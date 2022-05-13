const express = require("express");
const path = require("path");
const port = 8000;
const app = express();
const db = require("./config/mongoose");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

var contacts = [
  {
    name: "tony",
    phone: "098359287",
  },
];
app.get("/", function (req, res) {
  return res.render("index", {
    contact_list: contacts,
  });
});
app.post("/create-contact", function (req, res) {
  contacts.push(req.body);
  console.log(req.body);
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    return;
  }
  console.log(`the server is up on port ${port}`);
});
