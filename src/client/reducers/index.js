import { combineReducers } from 'redux';
import DocumentStore from './DocumentReducer';
import signUp from './SignUpReducer';
import signIn from './SignInReducer';
import auth from './AuthenticationReducer';
import UserStore from './UserReducer';
import quote from './QuoteReducer';

const rootReducer = combineReducers({
  DocumentStore,
  signUp,
  signIn,
  auth,
  UserStore,
  quote,
});

export default rootReducer;
