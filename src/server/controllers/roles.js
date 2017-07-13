import models from '../models';

const Role = models.Role;

export default {
  create(req, res) {
    return Role
      .create({
        title: req.body.title
      })
      .then(role => res.status(201).send({
        successful: true,
        role
      }))
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  findAll(req, res) {
    return Role
      .all()
      .then(role => res.status(200).send({
        successful: true,
        role
      }))
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  findOne(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          res.status(404).send({
            successful: false,
            message: 'Role Not Found'
          });
        } else {
          return res.status(200).send({
            successful: true,
            role
          });
        }
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  update(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(404).send({
            successful: false,
            message: 'Role Not Found!'
          });
        }
        role
          .update({
            title: req.body.title
          })
          .then(() => res.status(200).send({
            successful: true,
            role
          }))
          .catch(error => res.status(400).send({
            successful: false,
            error
          }));
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  delete(req, res) {
    return Role
      .findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(404).send({
            successful: false,
            message: 'Role Not Found!'
          });
        }
        role
          .destroy()
          .then(() => res.status(200).send({
            successful: true,
            message: 'Role Deleted!'
          }))
          .catch(error => res.status(400).send({
            successful: false,
            error
          }));
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  }
};
