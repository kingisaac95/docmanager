import * as types from '../constants/types';

const initialState = { signingIn: false, user: {} };

export default function signInReducer(state = initialState, action) {
  switch(action.type) {
  case types.WILL_SIGNIN_USER: {
    return Object.assign({}, state, {signingIn: true});
  }
  case types.SIGNIN_USER: {
    return Object.assign({}, state, {signingIn: false});
  }
  case types.SIGNIN_USER_SUCCESS: {
    return Object.assign({}, state, {signingIn: false, user: action.user});
  }
  case types.SIGNIN_USER_FAILURE: {
    return Object.assign({}, state, {signingIn: false});
  }
  default:
    return state;
  }
}