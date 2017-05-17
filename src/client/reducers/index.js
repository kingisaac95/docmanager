import {combineReducers} from 'redux';
import documents from './DocumentReducer';
import signUp from './SignUpReducer';
import signIn from './SignInReducer';
import auth from './AuthenticationReducer';
import users from './UserReducer';
import updatedDocument from './UpdateDocumentReducer';
import deleted from './DeleteDocumentReducer';

const rootReducer = combineReducers({
  documents,
  signUp,
  signIn,
  auth,
  users,
  updatedDocument,
  deleted
});

export default rootReducer;