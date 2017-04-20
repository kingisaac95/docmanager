const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        RoleId: req.body.roleId
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  findAll(req, res) {
    let options = {};

    if (req.query.q) {
      options.where = {
        username: { $iLike: `%${ req.query.q }%` }
      }
    }

    if (req.query.limit || req.query.offset) {
        options = {
        limit: req.query.limit || 2,
        offset: req.query.offset || 0
      };
    }
    return User
      .findAll(options)
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  findOne(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found!'
          })
        } else {
          return res.status(200).send(user)
        }
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found!'
          })
        }
        user
          .update({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            RoleId: req.body.roleId
          })
          .then(() => res.status(200).send(user))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found!'
          })
        }
        user
          .destroy()
          .then(() => res.status(200).send({
            message: "User Deleted!"
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};