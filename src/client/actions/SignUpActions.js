import request from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../constants/types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import setCurrentUser from './SetCurrentUserAction';

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
    return request.post('/api/v1/users', user)
      .then((res) => {
        dispatch(createUserSuccess(res.data));
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        // set the authorization token to header
        setAuthorizationToken(token);

        dispatch(setCurrentUser(jwt.decode(token)));
        Materialize.toast('Account created successfully!', 3000, 'green');
      }, (err) => {
        dispatch(createUserFailure());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}
