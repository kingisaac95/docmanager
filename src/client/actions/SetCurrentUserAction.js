import { SET_CURRENT_USER } from '../constants/types';

export default function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
