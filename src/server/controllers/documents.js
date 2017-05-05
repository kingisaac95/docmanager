import jwt from 'jsonwebtoken';
import models from '../models';

const Document = models.Document;

export default {
  create(req, res) {
    const role = req.decoded.userData.role;

    return Document
      .create({
        title: req.body.title,
        content: req.body.content,
        UserId: req.decoded.userData.userId,
        RoleId: req.decoded.userData.role,
        access: req.body.access
      })
      .then(document => res.status(200).send(document))
      .catch(error => res.status(400).send(error));
  },
  findAll(req, res) {
    let options = {};

    /* get details of the user making the
    * request from `authorize` middleware
    */
    const currentUser = req.decoded.userData.userId;
    const role = req.decoded.userData.role;

    if (req.query.q) {
      options.where = {
        title: { $iLike: `%${ req.query.q }%` },
        $or:[{access: 'public'}, {UserId: currentUser}]
      };
    }
    
    if (req.query.limit || req.query.offset) {
      options.limit = req.query.limit || 2,
      options.offset = req.query.offset || 0;
    }

    return Document
      .findAll(options)
      .then(documents => {
        if (documents < 1) {
          return res.status(404).json({
            status: 404,
            message: 'You currently have no documents, please create some.'
          });
        }

        if (role === 1 || role === 2) {
          return res.status(200).json(documents);
        }

        if (role !== 1 || role !== 2) {
          const availableDocuments = documents.filter((document) => {
            const availableDocumentsArray = [];

            if (document.UserId === currentUser) {
              return availableDocumentsArray.push(document);
            }

            if (document.UserId !== currentUser
              && document.access === 'public') {
              return availableDocumentsArray.push(document);
            }
            if (document.UserId !== currentUser && document.access === 'role') {
              if (role === document.RoleId) {
                return availableDocumentsArray.push(document);
              }
            }
          });

          return res.status(200).json(availableDocuments);
        }
      })
      .catch(error => res.status(400).send(error));
  },
  findOne(req, res) {
    let options = {};

    if (req.params.documentId) {
      options.where = {
        id: req.params.documentId,
        access: 'public'
      };
    }
    return Document
      .findAll(options)
      .then(document => {
        if (document < 1) {
          return res.status(404).send({
            message: 'Document Not Found.'
          });
        } else {
          return res.status(200).send(document);
        }
      })
      .catch(error => res.status(400).send(error));
  },
  findUserDocuments(req, res) {
    return Document
      .findAll({
        where: {
          UserId: req.params.userId
        }
      })
      .then(document => {
        if (document < 1) {
          return res.status(404).json({
            status: 404,
            message: 'No document found for this user'
          });
        } else {
          return res.status(200).send(document);
        }
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Document
      .findById(req.params.documentId)
      .then(document => {
        if (!document) {
          return res.status(404).send({
            status: 404,
            message: 'Document Not Found!'
          });
        }
        document
          .update({
            title: req.body.title,
            content: req.body.content,
            UserId: req.decoded.userData.username,
            RoleId: req.decoded.userData.role,
            access: req.body.access
          })
          .then(() => res.status(200).send(document))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Document
      .findById(req.params.documentId)
      .then(document => {
        if (!document) {
          return res.status(404).send({
            status: 404,
            message: 'Document Not Found!'
          });
        }
        document
          .destroy()
          .then(() => res.status(200).send({
            status: 200,
            message: "Document Deleted!"
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};