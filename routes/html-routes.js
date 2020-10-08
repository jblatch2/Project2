const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/main", (req, res) => {
    if (req.user) {
      res.redirect("members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("members");
    }
    res.render("login");
  });

<<<<<<< HEAD
=======
  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/buddyreq", (req, res) => {
    res.render("buddyreq");
  });
>>>>>>> hbsAPIs3

  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");

  });
};
