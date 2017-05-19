import * as types from '../constants/types';

const initialState =  { users: [], paginationDetails: {} };
export default function userReducer(state = initialState, action) {
  switch(action.type) {
  case types.GET_ALL_USERS_SUCCESS:
    return action.users;
  case types.GET_ALL_USERS_FAILED:
    return Object.assign({}, state);
  default:
    return state;
  }
}