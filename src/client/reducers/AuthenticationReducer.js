import isEmpty from 'lodash/isEmpty';
import * as types from '../constants/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function authenticationReducer( state = initialState, action) {
  switch(action.type) {
  case types.SET_CURRENT_USER:
    return {
      isAuthenticated: !isEmpty(action.user),
      user: action.user
    };
  default:
    return state;
  }
}