import request from 'axios';
import * as types from '../constants/types';

/**
 * @function
 * @returns {object} - action type
 */
export function willCreateUser() {
  return { type: types.WILL_CREATE_USER };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user
 */
export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}

/**
 * @function
 * @returns {object} - action type
 */
export function createUserFailure() {
  return { type: types.CREATE_USER_FAILURE };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - created user
 */
export function createUser(user) {
  return (dispatch) => {
    dispatch(willCreateUser());
    request.post('/api/v1/users', user)
      .then((res) => {
        dispatch(createUserSuccess(res.data));
        Materialize.toast('Account created! Please login to continue', 3000, 'green');
      }, (err) => {
        dispatch(createUserFailure());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}
