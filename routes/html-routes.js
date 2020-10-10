// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const axios = require("axios");
const db = require("../models");
require("dotenv").config();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/main", isAuthenticated, (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index");
  });
  app.get("/", (req, res) => {
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

  app.get("/buddyreq", isAuthenticated, (req, res) => {
    res.render("buddyreq");
    console.log(res);
  });

  // NOT WORKING
  app.get("/api/cards", (req, res) => {
    console.log("TEST 1: ");
    console.log("TEST 2: ", res.json(any));
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

  // app.get("/buddyreq", (req, res) => {
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.render("signup");
  // });

  app.get("/members", isAuthenticated, (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.render("login");
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      const settings = {
        headers: {
          "x-rapidapi-host":
            "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
          "x-rapidapi-key": process.env.SECRET_KEY
        },
      };
      axios
        .get(
          "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
          settings
        )
        .then((results) => {
          db.buddyRequest.findAll({}).then((data) => {
            console.log("data", data);
            res.render("members", {
              layout: "mainmemb",
              quote: results.data,
              user: req.user,
              buddies: data
            });
          });
        });
    }
  });
};
