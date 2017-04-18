const Role = require('../models').Role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title: req.body.title
      })
      .then(role => res.status(200).send(role))
      .catch(error => res.status(400).send(error));
  },
  findAll(req, res) {
    return Role
      .all()
      .then(role => res.status(200).send(role))
      .catch(error => res.status(400).send(error));
  },
  findOne(req, res) {
    return Role
      .findById(req.params.roleId)
      .then(role => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Not Found'
          })
        } else {
          return res.status(200).send(role)
        }
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Role
      .findById(req.params.roleId)
      .then(role => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Not Found!'
          })
        }
        role
          .update({
            title: req.body.title
          })
          .then(() => res.status(200).send(role))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Role
      .findById(req.params.roleId)
      .then(role => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Not Found!'
          })
        }
        role
          .destroy()
          .then(() => res.status(200).send({
            message: "Role Deleted!"
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
