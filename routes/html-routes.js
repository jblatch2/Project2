// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const axios = require("axios");
require("dotenv").config();
let db = require("../models");

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

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/buddyreq", (req, res) => {
    res.render("buddyreq");
  });

  // NOT WORKING
  app.get("/api/cards", (req, res) => {
    db.buddyRequest.findAll({});
    console.log("TEST 1: ", res.json(buddyRequest));
    console.log("TEST 2: ");
    // res.render("cards");
    // res.json(res);
  });

  // app.get("/api/cards", (req, res) => {
  //   db.buddyRequest
  //     .findAll({})
  //     })
  //     .then((buddyRequest) => {
  //       console.log("TEST 63");
  //       res.json(buddyRequest);
  //       res.render("cards", buddyRequest);
  //     });
  // };

  app.get("/buddyreq", (req, res) => {
    if (req.user) {
      res.redirect("member");
    }
    res.render("signup");
  });

  app.get("/members", isAuthenticated, (req, res) => {
    let settings = {
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
      .then((results) => {
        res.render("members", { quote: results.data });
        res.render("cards");
        res.render("members");
      });
  });
};
