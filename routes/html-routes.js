// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

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

  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  app.get("/quote", (req, res) => {
    res.render("quote");
  });
};
