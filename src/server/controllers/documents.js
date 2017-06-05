import models from '../models';
import pagination from '../../helpers/pagination';

const Document = models.Document;

export default {
  create(req, res) {
    if (req.body.title && req.body.content && req.body.access) {
      Document
        .create({
          title: req.body.title,
          content: req.body.content,
          UserId: req.decoded.userData.userId,
          RoleId: req.decoded.userData.role,
          access: req.body.access
        })
        .then(document => res.status(201).send({
          successful: true,
          document
        }))
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

    /* get details of the user making the
    * request from `authorize` middleware
    */
    const currentUser = req.decoded.userData.userId;
    const role = req.decoded.userData.role;

    // admin or super admin fetch all documents
    if (role === 1 || role === 2) {
      options.where = {};

      options.include = [
        {
          model: models.User,
          attributes: {
            exclude: ['username', 'email', 'password', 'createdAt', 'updatedAt']
          }
        }
      ];
    } else {
      // filter documents for other users
      options.where = {
        $or: [
          { access: 'public' },
          { access: 'role',
            $and: {
              '$User.RoleId$': role
            }
          },
          { access: 'private',
            $and: {
              UserId: currentUser
            }
          }
        ]
      };

      options.include = [
        {
          model: models.User,
          attributes: {
            exclude: ['username', 'email', 'password', 'createdAt', 'updatedAt']
          }
        }
      ];
    }

    options.offset = req.query.offset > 0 ? req.query.offset : 0;
    options.limit = req.query.limit > 0 ? req.query.limit : 12;
    options.order = [['createdAt', 'DESC']];

    if (req.query.q) {
      options.where = {
        title: { $iLike: `%${req.query.q}%` },
        $or: [{ access: 'public' }, { UserId: currentUser }]
      };
    }

    return Document
      .findAndCountAll(options)
      .then((documents) => {
        if (documents < 1) {
          return res.status(404).json({
            successful: false,
            status: 404,
            message: 'You currently have no documents, please create some.'
          });
        }
        const paginationDetails = pagination(
          options.limit, options.offset, documents.count);
        return res.status(200).send({
          successful: true,
          documents: documents.rows,
          paginationDetails });
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  findOne(req, res) {
    const options = {};
    if (req.params.documentId) {
      options.where = {
        id: req.params.documentId,
        // access: 'public'
      };
    }
    return Document
      .findOne(options)
      .then((document) => {
        if (!document) {
          res.status(404).send({
            successful: false,
            message: 'Document Not Found.'
          });
        } else {
          return res.status(200).send({
            successful: true,
            document
          });
        }
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  findUserDocuments(req, res) {
    const options = {};
    options.where = {
      UserId: req.params.userId
    };
    options.offset = req.query.offset > 0 ? req.query.offset : 0;
    options.limit = req.query.limit > 0 ? req.query.limit : 12;
    options.order = [['createdAt', 'DESC']];
    options.include = [models.User];

    return Document
      .findAndCountAll(options)
      .then((documents) => {
        if (documents < 1) {
          res.status(404).json({
            successful: true,
            status: 404,
            message: 'No document found for this user'
          });
        } else {
          const paginationDetails = pagination(
            options.limit, options.offset, documents.count);
          return res.status(200).send({
            documents: documents.rows,
            paginationDetails });
        }
      })
      .catch(error => res.status(400).send({
        successful: false,
        error
      }));
  },
  update(req, res) {
    if (req.body.title && req.body.content && req.body.access) {
      Document
        .findById(req.params.documentId)
        .then((document) => {
          if (!document) {
            return res.status(404).send({
              successful: false,
              status: 404,
              message: 'Document Not Found!'
            });
          }
          document
            .update({
              title: req.body.title,
              content: req.body.content,
              UserId: req.decoded.userData.userId,
              RoleId: req.decoded.userData.role,
              access: req.body.access
            })
            .then(() => res.status(200).send({
              successful: true,
              document
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
    } else {
      return res.status(400).send({
        successful: false,
        status: 400,
        message: 'Please fill in the all fields'
      });
    }
  },
  delete(req, res) {
    return Document
      .findById(req.params.documentId)
      .then((document) => {
        if (!document) {
          return res.status(404).send({
            successful: false,
            status: 404,
            message: 'Document Not Found!'
          });
        }
        document
          .destroy()
          .then(() => res.status(200).send({
            successful: true,
            status: 200,
            message: 'Document Deleted!'
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
