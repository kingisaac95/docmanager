const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
      message: "Weocme to Bella Organizer API!"
  }));

  app.post('/api/users', usersController.create);
};
