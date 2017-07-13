import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import models from '../models';
import pagination from '../../helpers/pagination';

dotenv.config();

const User = models.User;

export default {
  login(req, res) {
    if (req.body.username === '' || req.body.password === '') {
      res.status(400).json({
        successful: false,
        status: 400,
        message: 'Fields cannot be empty'
      });
    } else {
      return User
        .findOne({
          where: {
            username: req.body.username
          }
        })
        .then((user) => {
          if (!user) {
            return res.status(404).json({
              successful: false,
              status: 404,
              message: 'Authentication failed! User not found.'
            });
          } else if (user.matchPassword(req.body.password)) {
            const userData = {
              name: user.name,
              username: user.username,
              email: user.email,
              role: user.RoleId,
              userId: user.id
            };
            // create token
            const token = jwt.sign({
              expiresIn: 86400,
              userData
            }, process.env.SECRETE_KEY);
            // return token
            res.status(200).json({
              successful: true,
              status: 200,
              message: 'Authentication successful!',
              token
            });
          } else {
            res.status(401).json({
              successful: false,
              status: 401,
              password: user.matchPassword(req.body.password),
              message: 'Authentication failed! Wrong user credentials.'
            });
          }
        })
        .catch(error => res.status(400).send({
          successful: false,
          error
        }));
    }
  },
  logout(req, res) {
    res.setHeader.authorization = '';
    res.status(200)
      .json({
        successful: true,
        message: 'User logged out',
      });
  },
  create(req, res) {
    if (req.body.name && req.body.username && req.body.email
      && req.body.password) {
      User
        .findOne({
          where: {
            username: req.body.username
          }
        })
        .then((user) => {
          if (user) {
            return res.status(400).json({
              sucessful: false,
              status: 400,
              message: 'User already exists'
            });
          }

          User
            .create({
              name: req.body.name,
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              RoleId: 3,
            })
            .then((curUser) => {
              // create token
              const userData = {
                name: curUser.name,
                username: curUser.username,
                email: curUser.email,
                role: 3,
                userId: curUser.id
              };

              // create token
              const token = jwt.sign({
                expiresIn: 86400,
                userData
              }, process.env.SECRETE_KEY);

              return res.status(201).json({
                successful: true,
                status: 201,
                message: 'User registration successful',
                token
              });
            });
        })
        .catch(error => res.status(400).send({
          successful: false,
          error
        }));
    } else {
      return res.status(400).send({
        successful: false,
        status: 400,
        message: 'Please fill in the all fields'
      });
    }
  },
  findAll(req, res) {
    const options = {};

    if (req.query.q) {
      options.where = {
        username: { $iLike: `%${req.query.q}%` }
      };
    }

    options.offset = req.query.offset > 0 ? req.query.offset : 0;
    options.limit = req.query.limit > 0 ? req.query.limit : 8;
    options.order = [['createdAt', 'DESC']];
    options.attributes = {
      exclude: ['password', 'createdAt', 'updatedAt']
    };
    options.include = [
      {
        model: models.Role,
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt']
        }
      }
    ];

    return User
      .findAndCountAll(options)
      .then((data) => {
        const paginationDetails = pagination(
          options.limit, options.offset, data.count);
        return res.status(200).send({
          successful: true,
          users: data.rows,
          paginationDetails });
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  findOne(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          res.status(404).send({
            message: 'User Not Found!'
          });
        } else {
          return res.status(200).send({
            successful: true,
            user
          });
        }
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            successful: false,
            status: 404,
            message: 'User Not Found!'
          });
        }
        user
          .update({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            RoleId: 3
          })
          .then(() => res.status(200).send({
            successful: true,
            user
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
  makeAdmin(req, res) {
    return User
      .findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            successful: false,
            status: 404,
            message: 'User Not Found!'
          });
        }
        user
          .update({
            RoleId: 2
          })
          .then(() => res.status(200).send({
            successful: true,
            user
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
    if (req.params.userId === 1) {
      return res.status(404).json({
        successful: false,
        status: 400,
        message: 'Sorry, you cannot delete a Super Admin!'
      });
    }
    return User
      .findById(req.params.userId)
      .then((user) => {
        // prevent deleting super admin
        if (user.RoleId === 1) {
          return res.status(404).json({
            successful: false,
            status: 401,
            message: 'Sorry, you cannot delete a Super Admin!'
          });
        }

        // prevent deleting unexisting user
        if (!user) {
          return res.status(404).json({
            successful: false,
            status: 404,
            message: 'User Not Found!'
          });
        }
        user
          .destroy()
          .then(() => res.status(200).json({
            successful: true,
            status: 200,
            message: 'User Deleted!'
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
