import { combineReducers } from 'redux';
import documents from './DocumentReducer';
import signUp from './SignUpReducer';
import signIn from './SignInReducer';
import auth from './AuthenticationReducer';
import users from './UserReducer';
import quote from './QuoteReducer';

const rootReducer = combineReducers({
  documents,
  signUp,
  signIn,
  auth,
  users,
  quote,
});

export default rootReducer;
