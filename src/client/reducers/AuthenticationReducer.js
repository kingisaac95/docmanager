import isEmpty from 'lodash/isEmpty';
import * as types from '../constants/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

/**
 * authentication reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} - state
 */
export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default:
      return state;
  }
}
