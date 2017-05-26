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
    .get(auth.authorize, usersController.findAll);

  router
    .route('/users/:userId')
    .get(auth.authorize, usersController.findOne)
    .put(auth.authorize, usersController.update)
    .patch(auth.authorize, usersController.makeAdmin)
    .delete(auth.authorize, auth.isAdminOrUser, usersController.delete);
};

export default userRoutes;
