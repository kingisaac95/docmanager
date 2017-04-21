// import dependencies
const request = require ('supertest'); // import test tool
const should = require('should'); // import should for accertion
const app = require('../../bin/www'); // import the app
const user = require('../../helpers/users'); // import the app

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
var agent = request(app);

describe('User CRUD test', () => {

  // user tests
  it('should allow a user to be created, and return an `id`', (done) => {
    agent
      .post('/api/users')
      .send(user.superAdmin)
      .expect(200)
      .end((error, user) => {
        user.body.should.have.property('id');
        done();
      });
  });

  it()
});
