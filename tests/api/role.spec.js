// import dependencies
const request = require ('supertest'); // import test tool
const should = require('should'); // import should for accertion
const server = require('../../bin/www'); // import the app
const role = require('../../helpers/roles'); // import role helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
var app = request(server);

describe('DocManager API Endpoints:', () => {
  // role tests
  describe('Role CRUD test', () => {
    it('should create, and return an `id` that increaments', (done) => {
      app
        .post('/api/roles')
        .send(role.superAdminRole)
        .expect(200)
        .end((error, role) => {
          role.body.should.have.property('id');
          role.body.should.have.property('title');
        });

      app
        .post('/api/roles')
        .send(role.adminRole)
        .expect(200)
        .end((error, role) => {
          role.body.should.have.property('id');
          role.body.should.have.property('title');
        });

      app
        .post('/api/roles')
        .send(role.userRole)
        .expect(200)
        .end((error, role) => {
          role.body.should.have.property('id');
          role.body.should.have.property('title');
        });  

      done();
    });

    it('should find all roles and return a json containing all roles', (done) => {
      app
        .get('api/roles')
        .expect(200)
        .end((error) => {
          done();
        })
    });

    it('should find a role based on `id` and return the role', (done) => {
      app
          .post('/api/roles')
          .send(role.userRole);
      app
        .get('api/roles/4')
        .expect(200)
        .end((error) => {
          done();
        });
    });

    it('should update a role details and return the updated details', (done) => {
      app
        .post('/api/roles')
        .send(role.testRole);
      app
        .put('/api/roles/5')
        .send(role.updateTestRole)
        .expect(200)
        .end((error, role) => {
          (role.body.title === "Test User").should.equal(true);
          done();
        });
    });

    it('should delete a role from the database', (done) => {
      app
        .post('/api/roles')
        .send(role.testRole);
      app
        .delete('/api/roles/6')
        .expect(200)
        .end((error, role) => {
          should.not.exist(role.body.title);
          done();
        });
    });
  });
});