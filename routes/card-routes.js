//require dependencies
// =============================================================
// const path = require("path");

//require model
// =============================================================
const db = require("../models");

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
        groupSize: req.body.groupSize
      })
      .then(buddyRequest => {
        res.json(buddyRequest);
      });
  });

  app.put("/buddyrequest/:id", (req, res) => {
    db.buddyRequest
      .update(req.body, { where: { id: req.params.id } })
      .then(profileDB => {
        res.json(profileDB);
      });
  });
};
