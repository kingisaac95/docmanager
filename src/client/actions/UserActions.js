import request from 'axios';
import * as types from '../constants/types';


export function createUser(USER) {
  return { type: types.CREATE_USER, USER };
}
export function updateUser(USER) {
  return { type: types.UPDATE_USER, USER };
}
export function deleteUser(USER) {
  return { type: types.DELETE_USER, USER };
}
export function getAllUsers() {
  return { type: types.GET_ALL_USERS };
}
export function receiveAllUsers(users) {
  return { type: types.RECEIVE_ALL_USERS, users };
}
export function getAllUsersFailed() {
  return { type: types.GET_ALL_USERS_FAILED };
}
export function loadUsers() {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get('http://localhost:8000/api/v1/users')
      .then((res) => {
        dispatch(receiveAllUsers(res.data));
      }, (err) => {
        dispatch(getAllUsersFailed());
        throw('error', err.response.data.message);
      });
  };
}