import { SET_CURRENT_USER, SET_CURRENT_USER_FAILED } from '../constants/types';

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user object
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user object
 */
export function setCurrentUserFailed() {
  return {
    type: SET_CURRENT_USER_FAILED,
  };
}
