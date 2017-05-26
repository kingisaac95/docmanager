import request from 'axios';
import * as types from '../constants/types';


export function createUser(USER) {
  return { type: types.CREATE_USER, USER };
}
export function loadUsers(offset) {
  return (dispatch) => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get(`/api/v1/users?offset=${offset}`)
      .then((res) => {
        dispatch(getAllUsersSuccess(res.data));
      }, (err) => {
        dispatch(getAllUsersFailed());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
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
  return (dispatch) => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    return request
      .put(`/api/v1/users/${id}`, user)
        .then((res) => {
          dispatch(updateUserSuccess(res.data));
          dispatch(loadUsers());
        }, (err) => {
          dispatch(updateUserFailure());
          Materialize.toast(err.response.data.message, 3000, 'red');
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
  return (dispatch) => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get(`/api/v1/users/?q=${query}&offset=0`)
      .then((res) => {
        dispatch(getAllUsersSuccess(res.data));
      }, (err) => {
        dispatch(getAllUsersFailed());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}

export function upgradeUserSuccess(user) {
  return { type: types.UPGRADE_USER_SUCCESS, user };
}

export function upgradeUserFailure() {
  return { type: types.UPGRADE_USER_FAILED };
}

export function makeAdmin(id) {
  return (dispatch) => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    return request
      .patch(`/api/v1/users/${id}`)
        .then((res) => {
          dispatch(upgradeUserSuccess(res.data));
          dispatch(loadUsers());
        }, (err) => {
          dispatch(upgradeUserFailure());
          Materialize.toast(err.response.data.message, 3000, 'red');
          throw ('error', err.response.data.message);
        });
  };
}
