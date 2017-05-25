import request from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../constants/types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import setCurrentUser from './SetCurrentUserAction';

export function willSignInUser() {
  return { type: types.WILL_SIGNIN_USER };
}

export function signInUserSuccess(user) {
  return { type: types.SIGNIN_USER_SUCCESS, user };
}

export function signInUserFailure() {
  return { type: types.SIGNIN_USER_FAILURE };
}

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
      }, (err) => {
        dispatch(signInUserFailure());
        throw ('error', err.response.data.message);
      });
  };
}
