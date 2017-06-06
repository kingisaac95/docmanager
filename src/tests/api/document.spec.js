// import dependencies
import request from 'supertest'; // import test tool
import should from 'should'; // import should for accertion
import server from '../../server/app'; // import the app
import * as document from '../helpers/documents'; // import document helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);
let token;
let adminToken;


describe('Document Manager API', () => {
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
    describe('POST: api/v1/documents', () => {
      it('should create a document, if all fields are provided', (done) => {
        app
          .post('/api/v1/documents')
          .send(document.testDocument)
          .set({ Authorization: token })
          .expect(201)
          .then((res) => {
            res.body.should.have.property('id');
          });
        done();
      });
      it('should not create a document if any field is empty', (done) => {
        app
          .post('/api/v1/documents')
          .send(document.invalid)
          .set({ Authorization: token })
          .expect(400)
          .then((res) => {
            res.body.message.should.equal('Please fill in the all fields');
          });
        done();
      });
      it('should not create a document if no token is provided', (done) => {
        app
          .post('/api/v1/documents')
          .send(document.testDocument)
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe('GET: api/v1/documents', () => {
      it('should return all available documents to admin', (done) => {
        app.get('/api/v1/documents')
        .set({ Authorization: adminToken })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.documents.length.should.equal(8);
          done();
        });
      });

      it('should return all documents created by that user and public documents of other users', (done) => {
        app.get('/api/v1/documents')
        .set({ Authorization: token })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.documents.length.should.equal(7);
          done();
        });
      });

      it('should allow user specify limit and offset', (done) => {
        app.get('/api/v1/documents?limit=3&offset=0')
        .set({ Authorization: adminToken })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.documents.length.should.equal(3);
          res.body.paginationDetails.pageSize.should.equal(3);
          res.body.paginationDetails.pageCount.should.equal(3);
          res.body.paginationDetails.totalCount.should.equal(8);
          res.body.paginationDetails.currentPage.should.equal(1);
          done();
        });
      });

      it('should allow user to get only his documents', (done) => {
        app.get('/api/v1/users/5/documents')
        .set({ Authorization: token })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.documents.length.should.equal(4);
          done();
        });
      });

      it('should allow user specify limit and offset for his own documents', (done) => {
        app.get('/api/v1/users/5/documents?limit=1&offset=1')
        .set({ Authorization: token })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.documents.length.should.equal(1);
          res.body.paginationDetails.pageSize.should.equal(1);
          res.body.paginationDetails.pageCount.should.equal(4);
          res.body.paginationDetails.totalCount.should.equal(4);
          res.body.paginationDetails.currentPage.should.equal(2);
          done();
        });
      });

      it('should return a document based on Id', (done) => {
        app
          .get('api/v1/documents/1')
          .set({ Authorization: token })
          .expect(200);
        done();
      });

      it('should not find a document that does not exist', (done) => {
        app
          .get('api/v1/documents/2000')
          .set({ Authorization: token })
          .expect(404)
          .then((res) => {
            res.body.should.have.property('message');
            res.body.message.should.equal('Document Not Found');
          });
        done();
      });

      it('should return any public or role access document belonging to regular users to a regular user',
      (done) => {
        app.get('/api/v1/documents/1')
        .set({ Authorization: token })
        .end((err, res) => {
          res.status.should.equal(200);
          app.get('/api/v1/documents/5')
          .set({ Authorization: token })
          .end((err, res) => {
            res.status.should.equal(200);
            done();
          });
        });
      });

      it('should return any public document based on search query',
      (done) => {
        app.get('/api/v1/documents/?q=production-testing')
        .set({ Authorization: token })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.documents.length.should.equal(1);
          done();
        });
      });

      it('should not get documents if no token is provided', (done) => {
        app
          .get('/api/v1/documents')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe('PUT: api/v1/documents', () => {
      it('should update a document details and return the updated details',
      (done) => {
        app
          .put('/api/v1/documents/5')
          .send(document.updateTestDocument)
          .set({ Authorization: token })
          .expect(200)
          .then((res) => {
            res.body.title.should.equal('John Doe - My Documents');
          });
        done();
      });

      it('should not update a document that does not exist',
      (done) => {
        app
          .put('/api/v1/documents/2000')
          .send(document.updateTestDocument)
          .set({ Authorization: adminToken })
          .expect(404)
          .then((res) => {
            res.body.successful.should.equal(false);
            res.body.message.should.equal('Document Not Found!');
          });
        done();
      });

      it('should not update a document if no token is provided', (done) => {
        app
          .put('/api/v1/documents/5')
          .send(document.updateTestDocument)
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });

    describe('DELETE: api/v1/documents', () => {
      it('should delete a document from the database', (done) => {
        app
          .delete('/api/v1/documents/4')
          .set({ Authorization: token })
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
          .set({ Authorization: token })
          .expect(404)
          .then((res) => {
            res.body.should.have.property('message');
            res.body.message.should.equal('Document Not Found!');
          });
        done();
      });

      it('should not delete a document if no token is provided', (done) => {
        app
          .delete('/api/v1/documents/2')
          .expect(401)
          .then((res) => {
            res.body.message.should.equal('You did not provide any access token.');
          });
        done();
      });
    });
  });
});
