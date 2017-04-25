const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const User = require('../models').User;
require('dotenv').config();

module.exports = {
  login(req, res) {
    return User
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            status: 404,
            message: "Authentication failed! User not found."
          });
        } else if (user.matchPassword(req.body.password)) {
          const userData = {
            name: user.name,
            username: user.username,
            email: user.email,
            roleId: user.RoleId,
            userId: user.id
          };
          // create token
          var token = jwt.sign({
            expiresIn: 86400,
            userData
          }, process.env.SECRETE_KEY);

          // return token
          res.status(200).json({
            status: 200,
            message: "Authentication successful!",
            token: token
          });
        } else {
          res.status(401).json({
            status: 401,
            password: user.matchPassword(req.body.password),
            message: "Authentication failed! Wrong user credentials."
          });
        }
      })
      .catch(error => res.status(400).send(error));
  },
  create(req, res) {
    if(req.body.name && req.body.username && req.body.email
      && req.body.password && req.body.roleId) {
      User
        .findOne({
          where: {
            username: req.body.username
          }
        })
        .then((user) => {
          if (!user) {
            User
              .create({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                RoleId: req.body.RoleId,
            userId: user.id
              })
              .then(user => {
                const userData = {
                  name: user.name,
                  username: user.username,
                  email: user.email,
                  roleId: user.roleId
                };
                // create token
                var token = jwt.sign({
                  expiresIn: 86400,
                  userData
                }, process.env.SECRETE_KEY);

                return res.status(201).json({
                  status: 201,
                  message: "User registration successful",
                  token: token
                });
              })
          } else {
            return res.status(409).json({
              status: 409,
              message: "User already exits"
            })
          }
        })
        .catch(error => res.status(400).send(error));
    } else {
      return res.status(400).send({
        status: 400,
        message: "Please fill in the all fields"
      })
    }
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
          return res.status(404).json({
            status: 404,
            message: 'User Not Found!'
          })
        }
        user
          .update({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            roleId: req.body.roleId
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
          return res.status(404).json({
            status: 404,
            message: 'User Not Found!'
          })
        }
        user
          .destroy()
          .then(() => res.status(200).json({
            status: 200,
            message: "User Deleted!"
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};