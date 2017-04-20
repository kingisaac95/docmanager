const Document = require('../models').Document;

module.exports = {
  create(req, res) {
    return Document
      .create({
        title: req.body.title,
        content: req.body.content,
        UserId: req.body.userId,
        isPublic: req.body.isPublic
      })
      .then(document => res.status(200).send(document))
      .catch(error => res.status(400).send(error));
  },
  findAll(req, res) {
    let options = {};
  
    if (req.query.q) {
      options.where = {
        title: { $iLike: `%${ req.query.q }%` }
      }
    }
  
    if (req.query.limit || req.query.offset) {
        options.limit = req.query.limit || 2,
        options.offset = req.query.offset || 0
    }
    return Document
      .findAll(options)
      .then(document => res.status(200).send(document))
      .catch(error => res.status(400).send(error));
  },
  findOne(req, res) {
    return Document
      .findById(req.params.documentId)
      .then(document => {
        if (!document) {
          return res.status(404).send({
            message: 'Document Not Found'
          })
        } else {
          return res.status(200).send(document)
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
        if (!document) {
          return res.status(404).send({
            message: 'No document found for this user'
          })
        } else {
          return res.status(200).send(document)
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
            message: 'Document Not Found!'
          })
        }
        document
          .update({
            title: req.body.title,
            content: req.body.content,
            UserId: req.body.userId,
            isPublic: req.body.isPublic
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
            message: 'Document Not Found!'
          })
        }
        document
          .destroy()
          .then(() => res.status(200).send({
            message: "Document Deleted!"
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};