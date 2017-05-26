import rolesController from '../controllers/roles';
import auth from '../middleware/authenticate';

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

export default roleRoutes;
