//jshint esversion:6

/*
Name: Brisa Carter
Assignment: Week 5 - Weekend To do List
Description: Creates a weekend list of things to do extending Debasis To Do list
Date: 02/13/25
*/


//jshint esversion:6

/* for this activity I used AI to add jest test suits and verify if server is running
run app using  node.index
- test using npm test 

What I did:
- Modified index.ejs, header.ejs, footer.ejs, package.json
- Modified CSS
- Added images folder and image
- Searched correct path for images folder - answer from Stacker Overflow
- Added npm nodemon to speed up restarting the server (tip from Angela Yu)
    • to restart the server without having to stop ntype
- Searched for html code for island emoji
*/
//adds express and body-parser
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for tests

let items = ["Study", "Exercise", "Play Video Games", "Sleep" ];
let weekendItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {  // Fixed typo here
  let today = new Date();
  let options = { weekday: "long", day: "numeric", month: "long" };
  let day = today.toLocaleDateString("en-US", options); // Store the date in a variable

  res.render("list", { listTitle: day, newListItems: items }); // Send it to the template
});



app.post("/", function (req, res) {  // Fixed typo here
  let item = req.body.newItem;

  if (req.body.list === "weekend") {
    weekendItems.push(item);
    res.redirect("/weekend");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/weekend", function (req, res) {  // Fixed typo here
  res.render("list", { listTitle: "Weekend Things To Do List", newListItems: weekendItems });
});

// Start the server only if not in test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;
