import request from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../constants/types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './SetCurrentUserAction';

/**
 * @function
 * @returns {object} - action type
 */
export function willSignInUser() {
  return { type: types.WILL_SIGNIN_USER };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user
 */
export function signInUserSuccess(user) {
  return { type: types.SIGNIN_USER_SUCCESS, user };
}

/**
 * @function
 * @returns {object} - action type
 */
export function signInUserFailure() {
  return { type: types.SIGNIN_USER_FAILURE };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - logged in user deatails
 */
export function signInUser(userData) {
  return (dispatch) => {
    dispatch(willSignInUser());

    return request.post('/api/v1/users/login', userData)
      .then((res) => {
        // add token to local storage
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);

        // set the authorization token to header
        setAuthorizationToken(token);

        dispatch(setCurrentUser(jwt.decode(token)));
        dispatch(signInUserSuccess(res.data));

        const newUser = jwt.decode(token);
        Materialize.toast(`Welcome, ${newUser.userData.name}`, 3000, 'green');
      }, (err) => {
        dispatch(signInUserFailure());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}
