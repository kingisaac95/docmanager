// import dependencies
const request = require ('supertest'); // import test tool
const should = require('should'); // import should for accertion
const server = require('../../bin/www'); // import the app
const document = require('../../helpers/documents'); // import document helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
var app = request(server);

describe('DocManager API Endpoints:', () => {
  // document tests
  describe('Document CRUD test', () => {
    it('should create, and return an `id` that increaments', (done) => {
      app
        .post('/api/documents')
        .send(document.testDocument)
        .expect(200)
        .end((error, document) => {
          document.body.should.have.property('id');
          document.body.should.have.property('title');
        });

      app
        .post('/api/documents')
        .send(document.testDocument)
        .expect(200)
        .end((error, document) => {
          document.body.should.have.property('id');
          document.body.should.have.property('title');
        });

      app
        .post('/api/documents')
        .send(document.testDocument)
        .expect(200)
        .end((error, document) => {
          document.body.should.have.property('id');
          document.body.should.have.property('title');
        });  

      done();
    });

    it('should find all documents and return a json containing all documents', (done) => {
      app
        .get('api/documents')
        .expect(200)
        .end((error) => {
          done();
        })
    });

    it('should find a document based on `id` and return the document', (done) => {
      app
          .post('/api/documents')
          .send(document.testDocument);
      app
        .get('api/documents/4')
        .expect(200)
        .end((error) => {
          done();
        });
    });

    it('should update a document details and return the updated details', (done) => {
      app
        .post('/api/documents')
        .send(document.testDocument2);
      app
        .put('/api/documents/5')
        .send(document.updateTestDocument)
        .expect(200)
        .end((error, document) => {
          (document.body.title === "John Doe - My Documents").should.equal(true);
          done();
        });
    });

    it('should delete a document from the database', (done) => {
      app
        .post('/api/documents')
        .send(document.testDocument);
      app
        .delete('/api/documents/6')
        .expect(200)
        .end((error, document) => {
          should.not.exist(document.body.title);
          done();
        });
    });
  });
});