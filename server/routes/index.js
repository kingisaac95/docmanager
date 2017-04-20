const usersController = require('../controllers').users;
const documentsController = require('../controllers').documents;
const rolesController = require('../controllers').roles;

module.exports = (app) => {
  // api base route
  app.get('/api', (req, res) => res.status(200).send({
      message: "Weocme to DocManager API!"
  }));

  // roles routes
  app.post('/api/roles', rolesController.create);
  app.get('/api/roles', rolesController.findAll);
  app.get('/api/roles/:roleId', rolesController.findOne);
  app.put('/api/roles/:roleId', rolesController.update);
  app.delete('/api/roles/:roleId', rolesController.delete);

  // user routes
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.findAll);
  app.get('/api/users/:userId', usersController.findOne);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.delete);

  // document routes
  app.post('/api/documents', documentsController.create);
  app.get('/api/documents', documentsController.findAll);
  app.get('/api/documents/:documentId', documentsController.findOne);
  app.put('/api/documents/:documentId', documentsController.update);
  app.delete('/api/documents/:documentId', documentsController.delete);

  // find document for a particular user
  app.get('/api/users/:userId/documents', documentsController.findUserDocuments);
};
