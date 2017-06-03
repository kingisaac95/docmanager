// import dependencies
import request from 'supertest'; // import test tool
import should from 'should'; // import should for accertion
import server from '../../server/app'; // import the app
import * as user from '../helpers/users'; // import document helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);

let token;

describe('User CRUD test', () => {
  before((done) => {
    app
    .post('/api/v1/users')
    .send(user.testUser)
    .end(() => {
      app
        .post('/api/v1/users/login')
        .send({ username: 'jdoe1', password: 'password' })
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
  });

  describe(('user POST actions'), () => {
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

  describe(('create user actions'), () => {
    it('should create a user, and return an `id` that increments', (done) => {
      app
        .post('/api/v1/users')
        .send(user.user)
        .set('Authorization', token)
        .expect(201)
        .end((err, res) => {
          res.body.message.should.equal('User registration successful');
          done();
        });
    });
  });

  describe(('user GET actions'), () => {
    it('should find all users and return a json containing all users', (done) => {
      app
        .get('api/v1/users')
        .set('Authorization', token)
        .expect(200)
        .then((res) => {
          res.body.should.have.property('id');
        });
      done();
    });

    it('should find and return a user by id', (done) => {
      app
        .get('api/v1/users/1')
        .set('Authorization', token)
        .expect(200);
      done();
    });

    it('should not find a user that does not exist', (done) => {
      app
        .get('api/v1/users/2000')
        .set('Authorization', token)
        .expect(404)
        .then((res) => {
          res.body.should.have.property('message');
          res.body.message.should.equal('User Not Found');
        });
      done();
    });
  });
  describe(('user PUT actions'), () => {
    it('should update a user details and return the updated details',
    (done) => {
      app
        .put('/api/v1/users/5')
        .send(user.updateTestUser)
        .set('Authorization', token)
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
        .set('Authorization', token)
        .expect(404)
        .then((res) => {
          res.body.message.should.equal('User Not Found!');
        });
      done();
    });
  });
  describe(('user DELETE actions'), () => {
    it('should delete a user from the database', (done) => {
      app
        .delete('/api/v1/users/4')
        .set('Authorization', token)
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
        .set('Authorization', token)
        .expect(404)
        .then((res) => {
          res.body.should.have.property('message');
          res.body.message.should.equal('User Not Found!');
        });
      done();
    });

    it('only an admin or the user himself can delete a user account',
    (done) => {
      app
        .delete('/api/v1/users/')
        .set('Authorization', token)
        .expect(401)
        .then((res) => {
          res.body.message.should.equal('Error! Unauthorized to perform this operation. Please contact system administrator');
        });
      done();
    });
  });
});
