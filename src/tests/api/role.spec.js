// import dependencies
import request from 'supertest'; // import test tool
import should from 'should'; // import should for accertion
import server from '../../server/app'; // import the app
import * as role from '../helpers/roles'; // import role helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);
let token;
let adminToken;

describe('Role CRUD test', () => {
  before((done) => {
    app
      .post('/api/v1/users/login')
      .send({ username: 'jdoe1', password: 'password' })
      .end((err, res) => {
        token = res.body.token;
        app
          .post('/api/v1/users/login')
          .send({ username: 'kingisaac95', password: 'password' })
          .end((err, res) => {
            adminToken = res.body.token;
            done();
          });
      });
  });

  describe('Request', () => {
    describe('POST: api/v1/roles', () => {
      it('should create a role', (done) => {
        app
          .post('/api/v1/roles')
          .send(role.superAdminRole)
          .set({ Authorization: adminToken })
          .expect(201)
          .then((res) => {
            res.body.should.have.property('title');
          });
        done();
      });

      it('should not create a role if the user is not an admin', (done) => {
        app
          .post('/api/v1/roles')
          .send(role.superAdminRole)
          .set({ Authorization: token })
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('Unauthorized Access. Please contact system administrator');
          });
        done();
      });

      it('should not create a role if no token is provided', (done) => {
        app
          .post('/api/v1/roles')
          .send(role.superAdminRole)
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });
    describe('GET: api/v1/roles', () => {
      it('should find all roles and return a json containing all roles', (done) => {
        app
          .get('api/v1/roles')
          .set({ Authorization: adminToken })
          .expect(200)
          .then((res) => {
            res.body.should.have.property('title');
          });
        done();
      });

      it('should find and return a role by id', (done) => {
        app
          .get('api/v1/roles/1')
          .set({ Authorization: adminToken })
          .expect(200);
        done();
      });

      it('should not find a role that does not exist', (done) => {
        app
          .get('api/v1/roles/2000')
          .set({ Authorization: adminToken })
          .expect(404)
          .then((res) => {
            res.body.should.have.property('message');
            res.body.message.should.equal('Role Not Found');
          });
        done();
      });

      it('should not return roles if the user is not an admin', (done) => {
        app
          .get('/api/v1/roles')
          .set({ Authorization: token })
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('Unauthorized Access. Please contact system administrator');
          });
        done();
      });

      it('should not return roles if no token is provided', (done) => {
        app
          .get('/api/v1/roles')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });
    describe('PUT: api/v1/roles', () => {
      it('should update a role details and return the updated details',
      (done) => {
        app
          .put('/api/v1/roles/5')
          .send(role.updateTestRole)
          .set({ Authorization: adminToken })
          .expect(200)
          .then((res) => {
            res.body.title.should.equal('Test User');
          });
        done();
      });

      it('should not update a role that does not exist',
      (done) => {
        app
          .put('/api/v1/roles/2000')
          .send(role.updateTestRole)
          .set({ Authorization: adminToken })
          .expect(404)
          .then((res) => {
            res.body.message.should.equal('Role Not Found!');
          });
        done();
      });

      it('should not update a role if the user is not an admin', (done) => {
        app
          .put('/api/v1/roles/5')
          .send(role.updateTestRole)
          .set({ Authorization: token })
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('Unauthorized Access. Please contact system administrator');
          });
        done();
      });

      it('should not update a role if no token is provided', (done) => {
        app
          .post('/api/v1/roles/5')
          .send(role.updateTestRole)
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe('DELETE: api/v1/roles', () => {
      it('should delete a role from the database', (done) => {
        app
          .delete('/api/v1/roles/4')
          .set({ Authorization: adminToken })
          .expect(200)
          .then((res) => {
            should.not.exist(res.body.title);
            res.body.should.have.property('message');
            res.body.message.should.equal('Role Deleted!');
          });
        done();
      });

      it('should not delete a role that does not exist in the database',
      (done) => {
        app
          .delete('/api/v1/roles/2000')
          .set({ Authorization: adminToken })
          .expect(404)
          .then((res) => {
            res.body.should.have.property('message');
            res.body.message.should.equal('Role Not Found!');
          });
        done();
      });

      it('should not delete a role if the user is not an admin', (done) => {
        app
          .delete('/api/v1/roles/1')
          .set({ Authorization: token })
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('Unauthorized Access. Please contact system administrator');
          });
        done();
      });

      it('should not delete a role if no token is provided', (done) => {
        app
          .delete('/api/v1/roles/1')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });
  });
});
