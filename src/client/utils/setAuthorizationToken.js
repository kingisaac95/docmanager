import axios from 'axios';

/**
 * set authorization token
 * @function
 * @param {string} token
 * @returns {boolean} - sets or deletes header
 */
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
