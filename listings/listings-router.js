const router = require("express").Router();

const Listings = require("./listings-model.js");
const restricted = require("../auth/authenticate-middleware.js");

router.get("/", restricted, (req, res) => {
  Listings.find()
    .then((listings) => {
      res.status(200).json(listings);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;
  Listings.findById(id)
    .then((listing) => {
      res.status(200).json(listing);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const listingInfo = req.body;
  try {
    Listings.add(listingInfo).then((listings) => {
      res
        .status(201)
        .json({ data: listings })
        .catch((error) => {
          res.status(500).json({ message: error.message });
        });
    });
  } catch (err) {
    return res.status(400).json({
      message: "please provide missing information",
    });
  }
});

router.put("/:id", (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Listings.findById(id)
    .then((listings) => {
      try {
        Listings.update(changes, id).then((updatedlistings) => {
          return res.json(updatedlistings);
        });
      } catch(err) {
        res
          .status(404)
          .json({ message: `${err}: Could not find listings with given id` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update listings" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Listings.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find listing with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to listing scheme" });
    });
});
module.exports = router;
