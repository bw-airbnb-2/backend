const router = require("express").Router();

const Listings = require("./listings-model.js");
const restricted = require("../auth/authenticate-middleware.js");

router.get("/", restricted, (req, res) => {
  Listings.find()
    .then(listings => {
      res.status(200).json(listings);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  const {id} = req.params;
  Listings.findById(id)
    .then(listing => {
      res.status(200).json(listing);
    })
    .catch(err => res.send(err));
});
module.exports = router;
