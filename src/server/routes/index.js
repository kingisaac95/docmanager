import userRoutes from './user.routes';
import documentRoutes from './document.routes';
import roleRoutes from './role.routes';

const routes = (router) => {
  userRoutes(router);
  documentRoutes(router);
  roleRoutes(router);
};

export default routes;
