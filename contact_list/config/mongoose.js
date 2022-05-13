//getting the mongoose library
const mongoose = require("mongoose");

//connnecting to the database
mongoose.connect("mongodb://localhost/contact_list_db");

//aquire the connection
const db = mongoose.connection;
//now running and checking is the database is working fine

db.on("error", console.error.bind(console, "error binding to the db"));
db.once("open", function () {
  console.log("the db is connected succesfully");
});
