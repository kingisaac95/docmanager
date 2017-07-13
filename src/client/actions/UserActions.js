import request from 'axios';
import * as types from '../constants/types';

/**
 * @function
 * @param {object} users
 * @returns {object} - action type, users
 */
export function getAllUsersSuccess(users) {
  return { type: types.GET_ALL_USERS_SUCCESS, users };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user
 */
export function getAllUsersFailed() {
  return { type: types.GET_ALL_USERS_FAILED };
}

/**
 * @function
 * @param {integer} offset
 * @returns {object} - action type
 */
export function loadUsers(offset) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
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

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user
 */
export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}

/**
 * @function
 * @returns {object} - action type
 */
export function updateUserFailure() {
  return { type: types.UPDATE_USER_FAILED };
}

/**
 * @function
 * @param {integer} id
 * @param {object} user
 * @returns {object} - action type, user
 */
export function updateUser(id, user) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
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

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function deleteUserSuccess(document) {
  return { type: types.DELETE_USER_SUCCESS, document };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function deleteUserFailure() {
  return { type: types.DELETE_USER_FAILURE };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - response
 */
export function deleteUser(user) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    return request
      .delete(`/api/v1/users/${user}`)
        .then((res) => {
          dispatch(deleteUserSuccess(res.data));
          Materialize.toast('User deleted.', 3000, 'red');
          dispatch(loadUsers(0));
        }, (err) => {
          dispatch(deleteUserFailure());
          Materialize.toast(err.response.data.message, 3000, 'red');
          throw ('error', err.response.data.message);
        });
  };
}

/**
 * @function
 * @param {object} query
 * @returns {object} - action type, user
 */
export function searchUsers(query) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
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

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user
 */
export function upgradeUserSuccess(user) {
  return { type: types.UPGRADE_USER_SUCCESS, user };
}

/**
 * @function
 * @returns {object} - action type, user
 */
export function upgradeUserFailure() {
  return { type: types.UPGRADE_USER_FAILED };
}

/**
 * @function
 * @param {integer} id
 * @returns {object} - action type, user
 */
export function makeAdmin(id) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
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
