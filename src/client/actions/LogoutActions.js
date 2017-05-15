import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './SetCurrentUserAction';

export function logout(userData) {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}