const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(00).send(error));
  }
};