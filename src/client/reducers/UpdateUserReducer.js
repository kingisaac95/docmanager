import * as types from '../constants/types';

const initialState =  { updated: false, user: {} };
export default function updateUserReducer(state = initialState, action) {
  switch(action.type) {
  case types.UPDATE_USER_SUCCESS:
    return Object.assign(
      {}, state, { updated: true, user: action.user }
    );
  case types.UPDATE_USER_FAILED:
    return Object.assign({}, state, { updated: false });
  default:
    return state;
  }
}