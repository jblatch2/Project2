// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const axios = require("axios");
require("dotenv").config();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
      
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    
    //api quote here
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/quote", (req, res)=> {
    console.log("AAAARHRHRHRHRH")
    var settings = {
      headers: {
        "x-rapidapi-host":
          "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
        "x-rapidapi-key": process.env.SECRET_KEY,
      },
    };
    axios
      .get(
        "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
        settings
      )
      .then(function(results) {
        console.log(results.data)
        res.render("quote",{quote:results.data});
      });
  })
};
