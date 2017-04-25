const userRoutes = require('./user.routes');
const documentRoutes = require('./document.routes');
const roleROutes = require('./role.routes');

const routes = (router) => {
  userRoutes(router),
  documentRoutes(router),
  roleROutes(router)
};

module.exports = routes;
