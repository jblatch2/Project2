//require dependencies
// =============================================================
let path = require("path");

//require model
// =============================================================
let db = require("../models");

// Card Routes
// =============================================================
module.exports = function(app) {
  //GET route for getting all of the cards data
  app.get("/User/", function(req, res) {
    db.cardsList.findAll({}).then(function(profile_DB) {
      res.json(profile_DB);
    });
  });

  // POST route for saving a new card
  app.post("/members", (req, res) => {
    console.log(req.body.whichList);
    db.cardsList
      .create({
        name: req.body.name,
        avatar: req.body.avatar,
        zodiac: req.body.zodiac,
        subject: req.body.subject,
        notes: req.body.notes,
        prefer: req.body.prefer,
        buddies: req.body.buddies,
      })
      .then((profile_DB) => {
        res.json(profile_DB);
      });
  });

  app.put("/User/:id", (req, res) => {
    db.cardsList
      .update(req.body, { where: { id: req.params.id } })
      .then((profile_DB) => {
        res.json(profile_DB);
      });
  });
};
