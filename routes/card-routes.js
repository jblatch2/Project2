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
  app.get("/profile_DB/", (req, res) => {
    db.cardsList.findAll({}).then((buddy_requests) => {
      res.json(buddy_requests);
      res.render("cards", buddy_requests);
    });
  });

  // POST route for saving a new card
  app.post("/cards", (req, res) => {
    console.log(req.body.name);
    db.profile_DB
      .create({
        name: req.body.name,
        avatar: req.body.avatar,
        zodiac: req.body.zodiac,
        subject: req.body.subject,
        notes: req.body.notes,
        prefer: req.body.prefer,
        buddies: req.body.buddies,
      })
      .then((buddy_requests) => {
        res.json(buddy_requests);
      });
  });

  app.put("/buddyrequest/:id", (req, res) => {
    db.cardsList
      .update(req.body, { where: { id: req.params.id } })
      .then((profile_DB) => {
        res.json(profile_DB);
      });
  });
};
