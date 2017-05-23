// import dependencies
import request from 'supertest'; // import test tool
import should from 'should'; // import should for accertion
import server from '../../server/app'; // import the app
import * as role from '../helpers/roles'; // import document helper

process.env.NODE_ENV = 'test'; // set enviroment to test

// supertest agent for executing http requests
const app = request(server);

describe('Role CRUD test', () => {
  it('should create a role, and return an `id` that increaments', (done) => {
    app
      .post('/api/v1/roles')
      .send(role.superAdminRole)
      .expect(200)
      .then((res) => {
        res.body.should.have.property('title');
      });
    done();
  });

  it('should find all roles and return a json containing all roles', (done) => {
    app
      .get('api/v1/roles')
      .expect(200)
      .then((res) => {
        res.body.should.have.property('title');
      });
    done();
  });

  it('should find and return a role by id', (done) => {
    app
      .get('api/v1/roles/1')
      .expect(200);
    done();
  });

  it('should not find a role that does not exist', (done) => {
    app
      .get('api/v1/roles/2000')
      .expect(404)
      .then((res) => {
        res.body.should.have.property('message');
        res.body.message.should.equal('Role Not Found');
      });
    done();
  });

  it('should update a role details and return the updated details',
  (done) => {
    app
      .put('/api/v1/roles/5')
      .send(role.updateTestRole)
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
      .expect(404)
      .then((res) => {
        res.body.message.should.equal('Role Not Found!');
      });
    done();
  });

  it('should delete a role from the database', (done) => {
    app
      .delete('/api/v1/roles/4')
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
      .expect(404)
      .then((res) => {
        res.body.should.have.property('message');
        res.body.message.should.equal('Role Not Found!');
      });
    done();
  });
});
