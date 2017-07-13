// import dependencies
import request from 'supertest'; // import test tool
import should from 'should'; // import should for accertion
import server from '../../../server/app'; // import the app
import * as user from '../helpers/users'; // import user helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);

let adminToken;
let token;

describe('Docmanager API', () => {
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

  describe('Requests', () => {
    describe(('POST: api/v1/users/login'), () => {
      it('should login a user, and return a token', (done) => {
        app
        .post('/api/v1/users')
        .send(user.testUser)
        .end(() => {
          app
            .post('/api/v1/users/login')
            .send({ username: 'jdoe1', password: 'password' })
            .expect(200)
            .end(() => {
              done();
            });
        });
      });

      it('should not login with false credentials', (done) => {
        app
        .post('/api/v1/users')
        .send(user.testUser)
        .end(() => {
          app
            .post('/api/v1/users/login')
            .send({ username: 'jdoe1', password: 'passwordoo' })
            .expect(401)
            .end((err, res) => {
              res.body.message.should.equal('Authentication failed! Wrong user credentials.');
              done();
            });
        });
      });

      it('should not login an unexisting username', (done) => {
        app
          .post('/api/v1/users/login')
          .send({ username: 'kingisaacD95', password: 'password' })
          .expect(404)
          .end((err, res) => {
            res.body.message.should.equal('Authentication failed! User not found.');
            done();
          });
      });

      it('should not create a user if he already exists', (done) => {
        app
          .post('/api/v1/users')
          .send(user.testUser)
          .end(() => {
            app
              .post('/api/v1/users')
              .send(user.testUser)
              .expect(400)
              .end((err, res) => {
                res.body.message.should.equal('User already exists');
              });
            done();
          });
      });
    });

    describe(('POST: api/v1/users'), () => {
      it('should create a user if all fields are provided', (done) => {
        app
          .post('/api/v1/users')
          .send(user.user)
          .set({ Authorization: token })
          .expect(201)
          .then((res) => {
            res.body.message.should.equal('User registration successful');
          });
        done();
      });

      it('should not create a user if any field is empty', (done) => {
        app
          .post('/api/v1/users')
          .send(user.invalid)
          .set({ Authorization: token })
          .expect(400)
          .then((res) => {
            res.body.message.should.equal('Please fill in the all fields');
          });
        done();
      });
    });

    describe(('GET: api/v1/users'), () => {
      it('should find all users and return them', (done) => {
        app
          .get('api/v1/users')
          .set({ Authorization: token })
          .expect(200)
          .then((res) => {
            res.body.should.have.property('id');
          });
        done();
      });

      it('should find and return a user by id', (done) => {
        app
          .get('api/v1/users/1')
          .set({ Authorization: token })
          .expect(200);
        done();
      });

      it('should not find a user that does not exist', (done) => {
        app
          .get('api/v1/users/2000')
          .set({ Authorization: token })
          .expect(404)
          .then((res) => {
            res.body.should.have.property('message');
            res.body.message.should.equal('User Not Found');
          });
        done();
      });

      it('should not return users if no token is provided', (done) => {
        app
          .get('/api/v1/users')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe(('PUT: api/v1/users'), () => {
      it('should update a user details and return the updated details',
      (done) => {
        app
          .put('/api/v1/users/5')
          .send(user.updateTestUser)
          .set({ Authorization: token })
          .expect(200)
          .then((res) => {
            res.body.name.should.equal('John Doe');
          });
        done();
      });

      it('should not update a user that does not exist',
      (done) => {
        app
          .put('/api/v1/users/2000')
          .send(user.updateTestuser)
          .set({ Authorization: token })
          .expect(404)
          .then((res) => {
            res.body.message.should.equal('User Not Found!');
          });
        done();
      });

      it('should not update a user if no token is provided', (done) => {
        app
          .put('/api/v1/users/5')
          .send(user.updateTestUser)
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe('PATCH', () => {
      it('should upgrade a user to an admin', (done) => {
        app
          .patch('/api/v1/users/5')
          .set({ Authorization: adminToken })
          .expect(200)
          .then((res) => {
            res.body.roleId.should.equal(2);
          });
        done();
      });

      it('should not upgrade a user if the request is not made by an admin', (done) => {
        app
          .patch('/api/v1/users/5')
          .set({ Authorization: token })
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('Unauthorized Access. Please contact system administrator');
          });
        done();
      });

      it('should not upgrade if no token is provided', (done) => {
        app
          .patch('/api/v1/users/5')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe(('DELETE: api/v1/users'), () => {
      it('should delete a user from the database', (done) => {
        app
          .delete('/api/v1/users/4')
          .set({ Authorization: adminToken })
          .expect(200)
          .then((res) => {
            should.not.exist(res.body.username);
            res.body.should.have.property('message');
            res.body.message.should.equal('User Deleted!');
          });
        done();
      });

      it('should not delete a user that does not exist in the database',
      (done) => {
        app
          .delete('/api/v1/users/2000')
          .set({ Authorization: adminToken })
          .expect(404)
          .then((res) => {
            res.body.should.have.property('message');
            res.body.message.should.equal('User Not Found!');
          });
        done();
      });

      it('should not delete a user if the request was not made by admin',
      (done) => {
        app
          .delete('/api/v1/users/3')
          .set({ Authorization: token })
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('Error! Unauthorized to perform this operation. Please contact system administrator');
          });
        done();
      });

      it('should not delete a user if no token is provided', (done) => {
        app
          .delete('/api/v1/users/3')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });
  });
});
