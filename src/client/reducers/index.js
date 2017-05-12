import {combineReducers} from 'redux';
import documents from './DocumentReducer';

const rootReducer = combineReducers({
  documents
});

export default rootReducer;