// // import dependencies
// import request from 'supertest'; // import test tool
// import should from 'should'; // import should for accertion
// import server from '../../server/app'; // import the app
// import * as user from'../helpers/users'; // import document helper

// process.env.NODE_ENV = 'test'; // set enviroment to test

// // supertest agent for executing http requests
// const app = request(server);

// describe('DocManager API Endpoints:', () => {
//   // user tests
//   describe('User CRUD test', () => {
//     it('should create a user, and return an `id`', (done) => {
//       app
//         .post('api/vi/users')
//         .send(user.superAdmin)
//         .expect(200)
//         .end((error, user) => {
//           user.body.should.have.property('id');
//         });
//       done();
//     });

//     it('should find all users and return a json containing all users',
//       (done) => {
//         app
//           .get('api/v1/users')
//           .expect(200)
//           .end((error) => {
//           });
//         done();
//       });

//     it('should find a user based on `id` and return the user', (done) => {
//       app
//         .post('/api/v1/users')
//         .send(user.user);
//       app
//         .get('api/v1/users/1')
//         .expect(200)
//         .end((error) => {
//         });
//       done();
//     });

//     it('should update a user and return the updated details', (done) => {
//       app
//         .post('/api/v1/users')
//         .send(user.testUser);
//       app
//         .put('/api/v1/users/3')
//         .send(user.updateTestUser)
//         .expect(200)
//         .end((error, user) => {
//           (user.body.name === "John Doe").should.equal(true);
//         });
//       done();
//     });

//     it('should delete a user from the database', (done) => {
//       app
//         .post('/api/v1/users')
//         .send(user.testUser);
//       app
//         .delete('/api/v1/users/4')
//         .expect(200)
//         .end((error, user) => {
//           should.not.exist(user.body.id);
//         });
//       done();
//     });
//   });
// });
