const rolesController = require('../controllers/roles');

const roleRoutes = (router) => {
  router
    .route('/roles')
    .get(rolesController.findAll)
    .post(rolesController.create);

  router
    .route('/roles/:roleId')
    .get(rolesController.findOne)
    .put(rolesController.update)
    .delete(rolesController.delete);
};

module.exports = roleRoutes;