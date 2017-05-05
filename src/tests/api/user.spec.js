// import dependencies
const request = require ('supertest'); // import test tool
const should = require('should'); // import should for accertion
const server = require('../../bin/www'); // import the app
const user = require('../../helpers/users'); // import user helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);

describe('DocManager API Endpoints:', () => {
  // user tests
  describe('User CRUD test', () => {
    it('should create, and return an `id`', (done) => {
      app
        .post('/api/users')
        .send(user.superAdmin)
        .expect(200)
        .end((error, user) => {
          user.body.should.have.property('id');
          done();
        });
    });

    it('should find all users and return a json containing all users',
      (done) => {
        app
          .get('api/users')
          .expect(200)
          .end((error) => {
            done();
          });
      });

    it('should find a user based on `id` and return the user', (done) => {
      app
        .post('/api/users')
        .send(user.user);
      app
        .get('api/users/1')
        .expect(200)
        .end((error) => {
          done();
        });
    });

    it('should update a user and return the updated details', (done) => {
      app
        .post('/api/users')
        .send(user.testUser);
      app
        .put('/api/users/3')
        .send(user.updateTestUser)
        .expect(200)
        .end((error, user) => {
          (user.body.name === "John Doe").should.equal(true);
        });
      done();
    });

    it('should delete a user from the database', (done) => {
      app
        .post('/api/users')
        .send(user.testUser);
      app
        .delete('/api/users/4')
        .expect(200)
        .end((error, user) => {
          should.not.exist(user.body.id);
        });
      done();
    });
  });
});
