import request from 'axios';
import * as types from '../constants/types';

export function willCreateUser() {
  return { type: types.WILL_CREATE_USER };
}
export function createUser(user) {
  return dispatch => {
    dispatch(willCreateUser());
    request.post('http://localhost:8000/api/v1/users', user)
      .then((res) => {
        dispatch(createUserSuccess(res.data));
      }, (err) => {
        dispatch(createUserFailure());
        throw('error', err.response.data.message);
      });
  };
}
export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}
export function createUserFailure() {
  return { type: types.CREATE_USER_FAILURE };
}