// // import dependencies
// import request from 'supertest'; // import test tool
// import should from 'should'; // import should for accertion
// import server from '../../server/app'; // import the app
// import * as document from'../helpers/documents'; // import document helper

// process.env.NODE_ENV = 'test'; // set enviroment to test

// // supertest agent for executing http requests
// const app = request(server);

// describe('DocManager API Endpoints:', () => {
//   // document tests
//   describe('Document CRUD test', () => {
//     it('should create a document, and return an `id`',
//     (done) => {
//       app
//         .post('api/v1/documents')
//         .send(document.testDocument)
//         .expect(200)
//         .end((error, doc) => {
//           doc.body.should.have.property('id');
//           doc.body.should.have.property('title');
//         });
//       done();
//     });

//     it(`should find all documents and return a
//       json containing all documents`, (done) => {
//       app
//         .get('api/v1/documents')
//         .expect(200)
//         .end((error) => {
//           done();
//         });
//     });

    // it('should find a document based on id and return the document',
    // (done) => {
//       app
//         .get('api/v1/documents/4')
//         .expect(200)
//         .end(() => {
//           done();
//         });
//     });

//     it('should send a not found if document does not exist', (done) => {
//       app
//         .get('api/v1/documents/0')
//         .expect(404)
//         .end(() => {
//           done();
//         });
//     });

//     it(`should update a document details and
//       return the updated details`, (done) => {
//       app
//         .put('/api/v1/documents/5')
//         .send(document.updateTestDocument)
//         .expect(200)
//         .end((error, doc) => {
//           (doc.body.title === "John Doe - My Documents")
//           .should.equal(true);
//         });
//       done();
//     });

//     it('should delete a document from the database', (done) => {
//       app
//         .delete('/api/v1/documents/6')
//         .expect(200)
//         .end((error, doc) => {
//           should.not.exist(doc.body.title);
//         });
//       done();
//     });
//   });
// });
