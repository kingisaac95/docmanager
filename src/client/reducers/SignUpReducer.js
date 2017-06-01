import * as types from '../constants/types';

const initialState = { creating: false, user: {} };

/**
 * authentication reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} - state
 */
export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case types.WILL_CREATE_USER:
      return Object.assign({}, state, { creating: true });

    case types.CREATE_USER_SUCCESS:
      return Object.assign({}, state, { creating: false, user: action.user });

    case types.CREATE_USER_FAILURE:
      return Object.assign({}, state, { creating: false });

    default:
      return state;
  }
}
