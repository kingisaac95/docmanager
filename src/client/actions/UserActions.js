import request from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../constants/types';


export function createUser(USER) {
  return { type: types.CREATE_USER, USER };
}
export function loadUsers(offset) {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get(`http://localhost:8000/api/v1/users?offset=${offset}`)
      .then((res) => {
        dispatch(getAllUsersSuccess(res.data));
      }, (err) => {
        dispatch(getAllUsersFailed());
        throw('error', err.response.data.message);
      });
  };
}
export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}
export function updateUserFailure() {
  return { type: types.UPDATE_USER_FAILED };
}
export function updateUser(id, user) {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    // const currentUser = jwt.decode(localStorage.jwtToken);
    // const userId = currentUser.userData.userId;
    return request
      .put(`http://localhost:8000/api/v1/users/${id}`, user)
        .then((res) => {
          dispatch(updateUserSuccess(res.data));
          dispatch(loadUsers());
        }, (err) => {
          dispatch(updateUserFailure());
          throw ('error', err.response.data.message);
        });
  };
}
export function deleteUser(USER) {
  return { type: types.DELETE_USER, USER };
}
export function getAllUsersSuccess(users) {
  return { type: types.GET_ALL_USERS_SUCCESS, users };
}
export function getAllUsersFailed() {
  return { type: types.GET_ALL_USERS_FAILED };
}
export function searchUsers(query) {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get(`/api/v1/users/?q=${query}&offset=0`)
      .then((res) => {
        dispatch(getAllUsersSuccess(res.data));
      }, (err) => {
        dispatch(getAllUsersFailed());
        throw('error', err.response.data.message);
      });
  };
}