const userRoutes = require('./user.routes');
const documentRoutes = require('./document.routes');
const roleRoutes = require('./role.routes');

const routes = (router) => {
  userRoutes(router),
  documentRoutes(router),
  roleRoutes(router)
};

module.exports = routes;
