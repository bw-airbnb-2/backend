const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/authenticate-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  const {id} = req.params;
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.send(err));
});

// TODO Add endpoints address, first name, last name, age, birthday, etc to the user router

module.exports = router;
