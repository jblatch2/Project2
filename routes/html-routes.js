const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/home", (req, res) => {
    if (req.user) {
      res.redirect("members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("members");
    }
  });

  app.get(".buddyreq", (req, res) => {
    if (req.user) {
      res.redirect("member");
    }
    res.render("signup");
  });

  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });
};
