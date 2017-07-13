// import dependencies
import expect from 'expect'; // import expect for accertion
import models from '../../models'; // import model
import * as user from '../helpers/users'; // import user helper

const User = models.User;

describe('The User model', () => {
  describe('With invalid details', () => {
    it('should throw error if name is empty', (done) => {
      User.create(user.noName)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
        });
      done();
    });

    it('should throw error if username is not specified', (done) => {
      User.create(user.noUsername)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
        });
      done();
    });

    it('should throw error if email is not specified', (done) => {
      User.create(user.noEmail)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
        });
      done();
    });

    it('should not create user if password is not specified', (done) => {
      User.create(user.noPassword)
      .catch((error) => {
        expect(error.message).toEqual('Validation error');
      });
      done();
    });

    it('should not create user if password is too short (< 4)', (done) => {
      User.create(user.tooShortPassword)
      .catch((error) => {
        expect(error.message).toEqual('Validation error: Validation len failed');
      });
      done();
    });

    it('should not create user if user is not specified', (done) => {
      User.create(user.noRole)
      .catch((error) => {
        expect(error.name).toEqual('SequelizeValidationError');
      });
      done();
    });
  });

  describe('With valid details', () => {
    it('should create user if all fields exist and are valid', (done) => {
      User.create(user.validUser)
      .then((newUser) => {
        expect(newUser.name).toEqual(user.validUser.name);
      });
      done();
    });
  });
});
