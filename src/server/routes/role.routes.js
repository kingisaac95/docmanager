import rolesController from '../controllers/roles';
import auth from '../middleware/authenticate';

const roleRoutes = (router) => {
  router
    .route('/roles')
    .get(auth.authorize, rolesController.findAll)
    .post(auth.authorize, rolesController.create);

  router
    .route('/roles/:roleId')
    .get(auth.authorize, rolesController.findOne)
    .put(auth.authorize, rolesController.update)
    .delete(auth.authorize, auth.isAdmin, rolesController.delete);
};

export default roleRoutes;
