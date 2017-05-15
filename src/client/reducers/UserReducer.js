import * as types from '../constants/types';

const initialState =  { loading: false, users: [] };
export default function userReducer(state = initialState, action) {
  switch(action.type) {
  case types.GET_ALL_USERS:
    return Object.assign({}, state, { loading: true });
  case types.RECEIVE_ALL_USERS:
    return Object.assign({}, state, { loading: false, users: action.users });
  case types.GET_ALL_USERS_FAILED:
    return Object.assign({}, state, { loading: false});
  default:
    return state;
  }
}