import expect from 'expect';
import * as userActions from '../../actions/UserActions';
import * as types from '../../constants/types';
import * as user from '../../../server/tests/helpers/users';

describe('User Actions', () => {
  describe('getAllUsersSuccess', () => {
    it('should create a GET_ALL_USERS_SUCCESS actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.GET_ALL_USERS_SUCCESS,
        users: user.testUser
      };

      // fire off the action
      const action = userActions.getAllUsersSuccess(user.testUser);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('getAllUsersFailed', () => {
    it('should create a GET_ALL_USERS_FAILED actions', () => {
      // perpare mock data
      const expectedAction = { type: types.GET_ALL_USERS_FAILED };

      // fire off the action
      const action = userActions.getAllUsersFailed();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateUserSuccess', () => {
    it('should create a UPDATE_USER_SUCCESS actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.UPDATE_USER_SUCCESS,
        user: user.testUser
      };

      // fire off the action
      const action = userActions.updateUserSuccess(user.testUser);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateUserFailure', () => {
    it('should create a UPDATE_USER_FAILED actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.UPDATE_USER_FAILED,
      };

      // fire off the action
      const action = userActions.updateUserFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteUserSuccess', () => {
    it('should create a DELETE_USER_SUCCESS actions', () => {
      // perpare mock data
      const curUser = 1;
      const expectedAction = {
        type: types.DELETE_USER_SUCCESS,
        user: curUser
      };

      // fire off the action
      const action = userActions.deleteDocumentSuccess(curUser);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteUserFailure', () => {
    it('should create a DELETE_USER_FAILURE actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.DELETE_USER_FAILURE,
      };

      // fire off the action
      const action = userActions.deleteUserFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
