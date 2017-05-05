import usersController from '../controllers/users';
import auth from '../middleware/authenticate';

const userRoutes = (router) => {
  router
    .route('/users')
    .post(usersController.create);

  router
    .route('/users/login')
    .post(usersController.login);

  router
    .route('/users')
    .get(auth.authorize, auth.isAdmin, usersController.findAll);

  router
    .route('/users/:userId')
    .get(auth.authorize, usersController.findOne)
    .put(auth.authorize, usersController.update)
    .delete(auth.authorize, auth.isAdmin, usersController.delete);
};

export default userRoutes;