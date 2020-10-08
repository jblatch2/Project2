//require dependencies
// =============================================================
let path = require("path");

//require model
// =============================================================
let db = require("../models");

// Card Routes
// =============================================================
module.exports = function(app) {
  // app.get("/api/cards", (req, res) => {
  //   db.buddyRequest.findAll({
  //     where {
  //       name: req.params.name,
  //       avatar: req.params.avatar,
  //       zodiac: req.params.zodiac,
  //       subject: req.params.subject,
  //       notes: req.params.notes,
  //       location: req.params.location,
  //       groupSize: req.params.groupSize,
  //     }
  //   }).then((buddyRequest) => {
  //     console.log("TEST 63")
  //     res.json(buddyRequest);
  //     res.render("cards", buddyRequest);
  //   });
  // });

  app.get("/api/cards", (req, res) => {
    db.buddyRequest.findAll({});
    console.log("TEST 1: ", res.json(buddyRequest));
    console.log("TEST 2: ");
    // res.render("cards");
    // res.json(res);
  });

  // POST route for saving a new card
  app.post("/api/addcards", (req, res) => {
    db.buddyRequest
      .create({
        name: req.body.name,
        avatar: req.body.avatar,
        zodiac: req.body.zodiac,
        subject: req.body.subject,
        notes: req.body.notes,
        location: req.body.location,
        groupSize: req.body.groupSize,
      })
      .then((buddyRequest) => {
        res.json(buddyRequest);
      });
  });

  app.put("/buddyrequest/:id", (req, res) => {
    db.buddyRequest
      .update(req.body, { where: { id: req.params.id } })
      .then((profile_DB) => {
        res.json(profile_DB);
      });
  });
};
