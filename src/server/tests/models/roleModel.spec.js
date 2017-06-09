// import dependencies
import expect from 'expect'; // import expect for accertion
import models from '../../models'; // import model
import * as role from '../helpers/roles'; // import role helper

const Role = models.Role;

describe('The Role model', () => {
  describe('with invalid role', () => {
    it('should throw error if title is empty', (done) => {
      Role.create(role.noTitleRole)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
          expect(error.message)
            .toEqual('notNull Violation: title cannot be null');
        });
      done();
    });
  });

  describe('with valid role', () => {
    it('should create role if all fields exist and are valid', (done) => {
      Role.create(role.testRole)
      .then((newRole) => {
        expect(newRole.title).toEqual(role.testRole.title);
      });
      done();
    });
  });
});
