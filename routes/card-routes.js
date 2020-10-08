//require dependencies
// =============================================================
let path = require("path");

//require model
// =============================================================
let db = require("../models");

// Card Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/cards", (req, res) => {
    db.buddyRequest.findAll({}).then((buddyRequest) => {
      res.json(buddyRequest);
      res.render("cards", buddyRequest);
    });
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
