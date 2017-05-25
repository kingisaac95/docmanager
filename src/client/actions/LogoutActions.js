import setAuthorizationToken from '../utils/setAuthorizationToken';
import setCurrentUser from './SetCurrentUserAction';

export default function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
