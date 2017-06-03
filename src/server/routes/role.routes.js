import rolesController from '../controllers/roles';
import auth from '../middleware/authenticate';

const roleRoutes = (router) => {
  router
    .route('/roles')
    .get(auth.authorize, auth.isAdmin, rolesController.findAll)
    .post(auth.authorize, auth.isAdmin, rolesController.create);

  router
    .route('/roles/:roleId')
    .get(auth.authorize, auth.isAdmin, rolesController.findOne)
    .put(auth.authorize, auth.isAdmin, rolesController.update)
    .delete(auth.authorize, auth.isAdmin, rolesController.delete);
};

export default roleRoutes;
