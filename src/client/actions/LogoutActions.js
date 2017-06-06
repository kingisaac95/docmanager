import setAuthorizationToken from '../utils/setAuthorizationToken';
import setCurrentUser from './SetCurrentUserAction';

/**
 * @function
 * @returns {object} - empty state, auth, user
 */
export default function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    Materialize.toast('Bye. We\'re gonna miss you. Do come back soon.', 3000, 'black');
  };
}
