const documentsController = require('../controllers/documents');

const documentRoutes = (router) => {
  router
    .route('/documents')
    .get(documentsController.findAll)
    .post(documentsController.create);

  router
    .route('/users/:userId')
    .get(documentsController.findOne)
    .put(documentsController.update)
    .delete(documentsController.delete);
};

module.exports = documentRoutes;