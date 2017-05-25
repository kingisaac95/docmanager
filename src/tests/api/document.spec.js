// import dependencies
import request from 'supertest'; // import test tool
import should from 'should'; // import should for accertion
import server from '../../server/app'; // import the app
import * as document from '../helpers/documents'; // import document helper
import userData from '../helpers/users';

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);
let adminUser;


describe('Document CRUD test', () => {
  before((done) => {
    app
    .post('/api/v1/users')
    .send(userData)
    .end(() => {
      app
        .post('/api/v1/users/login')
        .send({ username: 'jdoe1', password: 'password' })
        .end((err, res) => {
          adminUser = res.body.token;
          done();
        });
    });
  });

  describe('document POST actions:', () => {
    it('should create a document, and return an `id` that increments', (done) => {
      app
        .post('/api/v1/documents')
        .send(document.document)
        .set('Authorization', adminUser)
        .expect(201)
        .then((res) => {
          res.body.should.have.property('id');
        });
      done();
    });
    it('should not create a document if any field is empty', (done) => {
      app
        .post('/api/v1/documents')
        .send(document.document)
        .set('Authorization', adminUser)
        .expect(400)
        .then((res) => {
          res.body.message.should.equal('Please fill in the all fields');
        });
      done();
    });
    it('should not create a document if no token is provided', (done) => {
      app
        .post('/api/v1/documents')
        .send(document.document)
        .expect(401)
        .then((res) => {
          res.body.message.should.equal('Error! No access token provided.');
        });
      done();
    });
  });
  describe('document GET actions:', () => {
    it('should find all documents and return a json containing all documents', (done) => {
      app
        .get('api/v1/documents')
        .set('Authorization', adminUser)
        .expect(200)
        .then((res) => {
          res.body.should.have.property('id');
        });
      done();
    });

    it('should find and return a document by id', (done) => {
      app
        .get('api/v1/documents/1')
        .set('Authorization', adminUser)
        .expect(200);
      done();
    });

    it('should not find a document that does not exist', (done) => {
      app
        .get('api/v1/documents/2000')
        .set('Authorization', adminUser)
        .expect(404)
        .then((res) => {
          res.body.should.have.property('message');
          res.body.message.should.equal('Document Not Found');
        });
      done();
    });
  });
  describe('document PUT actions:', () => {
    it('should update a document details and return the updated details',
    (done) => {
      app
        .put('/api/v1/documents/5')
        .send(document.updateTestDocument)
        .set('Authorization', adminUser)
        .expect(200)
        .then((res) => {
          res.body.name.should.equal('John Doe');
        });
      done();
    });

    it('should not update a document that does not exist',
    (done) => {
      app
        .put('/api/v1/documents/2000')
        .send(document.updateTestdocument)
        .set('Authorization', adminUser)
        .expect(404)
        .then((res) => {
          res.body.message.should.equal('Document Not Found!');
        });
      done();
    });
  });
  describe('document DELETE actions:', () => {
    it('should delete a document from the database', (done) => {
      app
        .delete('/api/v1/documents/4')
        .set('Authorization', adminUser)
        .expect(200)
        .then((res) => {
          should.not.exist(res.body.documentname);
          res.body.should.have.property('message');
          res.body.message.should.equal('Document Deleted!');
        });
      done();
    });

    it('should not delete a document that does not exist in the database',
    (done) => {
      app
        .delete('/api/v1/documents/2000')
        .set('Authorization', adminUser)
        .expect(404)
        .then((res) => {
          res.body.should.have.property('message');
          res.body.message.should.equal('Document Not Found!');
        });
      done();
    });
  });
});
