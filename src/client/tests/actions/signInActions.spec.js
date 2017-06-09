import expect from 'expect';
import * as signInActions from '../../actions/SignInActions';
import * as types from '../../constants/types';

describe('Sign In Actions', () => {
  describe('willSignInUser', () => {
    it('should create a WILL_SIGNIN_USER actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.WILL_SIGNIN_USER,
      };

      // fire off the action
      const action = signInActions.willSignInUser();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('signInUserSuccess', () => {
    it('should create a SIGNIN_USER_SUCCESS actions', () => {
      // perpare mock data
      const user = { username: 'kingisaac95', password: 'password' };
      const expectedAction = {
        type: types.SIGNIN_USER_SUCCESS,
        user
      };

      // fire off the action
      const action = signInActions.signInUserSuccess(user);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('signInUserFailure', () => {
    it('should create a SIGNIN_USER_FAILURE actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.SIGNIN_USER_FAILURE,
      };

      // fire off the action
      const action = signInActions.signInUserFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
