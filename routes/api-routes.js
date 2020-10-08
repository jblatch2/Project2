// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
// const axios = require("axios");
console.log("hello" + db.buddyRequest);
require("dotenv").config();

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.get("/api/quote", (req, res) => {
  //   const settings = {
  //     headers: {
  //       "x-rapidapi-host":
  //         "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
  //       "x-rapidapi-key": process.env.API_KEY,
  //     },
  //   };
  //   axios
  //     .get(
  //       "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
  //       settings
  //     )
  //     .then((results) => {
  //       res.json({ quote: results.data });
  //     });
  // });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  //Route for submitting buddy request
  app.post("/api/buddyreq", (req, res) => {
    db.buddyRequest
      .create({
        notes: req.body.notes,
        subject: req.body.subject,
        group: req.body.group,
        meet: req.body.meet,
        zodiac: req.body.zodiac
      })
      .then(response => {
        res.json(response);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // app.get("/api/cards", (req, res) => {
  //   // res.json({
  //   //   email: req.user.email,
  //   //   id: req.user.id,
  //   //   name: req.user.name,
  //   // });
  //   console.log("something");
  // });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        name: req.user.name,
      });
    }
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/buddyreq", (req, res) => {
    if (!req.buddy) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        notes: req.body.notes,
        subject: req.body.subject,
        group: req.body.group,
        meet: req.body.meet,
        zodiac: req.body.zodiac,
      });
    }
  });
};
