import expect from 'expect';
import * as setCurrentUserAction from '../../actions/SetCurrentUserAction';
import * as types from '../../constants/types';

describe('Set Current User Actions', () => {
  describe('setCurrentUser', () => {
    it('should create a SET_CURRENT_USER actions', () => {
      // perpare mock data
      const user = {};
      const expectedAction = {
        type: types.SET_CURRENT_USER,
        user
      };

      // fire off the action
      const action = setCurrentUserAction.setCurrentUser(user);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('setCurrentUserFailed', () => {
    it('should create a SET_CURRENT_USER_FAILED actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.SET_CURRENT_USER_FAILED,
      };

      // fire off the action
      const action = setCurrentUserAction.setCurrentUserFailed();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
