const express = require("express");
const path = require("path");
const port = 8000;
const app = express();
const db = require("./config/mongoose");
const Contact = require("./models/contact");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//using the middleware for parsing the req
app.use(express.urlencoded());

// var contacts = [
//   {
//     name: "tony",
//     phone: "098359287",
//   },
// ];
app.get("/", function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log("there is an error fetching the data");
      return;
    }

    res.render("index", {
      contact_list: contacts,
    });
  });

  //   return res.render("index", {
  //     contact_list: contacts,
  //   });
});
app.post("/create-contact", function (req, res) {
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log("error in adding to db");
        return;
      }
      console.log("******", newContact);
      return res.redirect("back");
    }
  );
});

app.listen(port, function (err) {
  if (err) {
    return;
  }
  console.log(`the server is up on port ${port}`);
});
