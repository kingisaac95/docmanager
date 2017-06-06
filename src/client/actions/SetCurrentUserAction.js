import { SET_CURRENT_USER } from '../constants/types';

/**
 * @function
 * @param {object} user
 * @returns {object} - action type, user object
 */
export default function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
