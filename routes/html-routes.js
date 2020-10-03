//const isAuthenticated = require("../config/middleware/isAuthenticated");

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

  app.get("/members", (re1, res) => {
    res.render("members");
  });
};
