import expect from 'expect';
import * as signUpActions from '../../actions/SignUpActions';
import * as types from '../../constants/types';

describe('Sign Up Actions', () => {
  describe('willCreateUser', () => {
    it('should create a WILL_SIGNIN_USER actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.WILL_CREATE_USER,
      };

      // fire off the action
      const action = signUpActions.willCreateUser();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('createUserSuccess', () => {
    it('should create a CREATE_USER_SUCCESS actions', () => {
      // perpare mock data
      const user = {};
      const expectedAction = {
        type: types.CREATE_USER_SUCCESS,
        user
      };

      // fire off the action
      const action = signUpActions.createUserSuccess(user);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('createUserFailure', () => {
    it('should create a CREATE_USER_FAILURE actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.CREATE_USER_FAILURE,
      };

      // fire off the action
      const action = signUpActions.createUserFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
