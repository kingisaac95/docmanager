import * as types from '../constants/types';

const initialState = { signingIn: false, user: {} };

/**
 * authentication reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} - state
 */
export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case types.WILL_SIGNIN_USER: {
      return Object.assign({}, state, { signingIn: true });
    }
    case types.SIGNIN_USER: {
      return Object.assign({}, state, { signingIn: false });
    }
    case types.SIGNIN_USER_SUCCESS: {
      return Object.assign({}, state, { signingIn: false, user: action.user });
    }
    case types.SIGNIN_USER_FAILURE: {
      return Object.assign({}, state, { signingIn: false });
    }
    default:
      return state;
  }
}
