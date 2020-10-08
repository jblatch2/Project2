// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const axios = require("axios");
require("dotenv").config();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/main", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

<<<<<<< HEAD
  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/buddyreq", (req, res) => {
    res.render("buddyreq");
  });
=======
  app.get(".buddyreq", (req, res) => {
    if (req.user) {
      res.redirect("member");
    }
    res.render("signup");
  });
>>>>>>> 58489594bb5f0a2c75ac78619dd2572f9cc32e3e

  app.get("/members", isAuthenticated, (req, res) => {
    //api quote here
    res.render("members");
<<<<<<< HEAD
  });

  app.get("/members", (req, res) => {
    console.log("AAAARHRHRHRHRH");
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
        console.log(results.data);
        res.render("members", { quote: results.data });
      });
=======
>>>>>>> 58489594bb5f0a2c75ac78619dd2572f9cc32e3e
  });
};
