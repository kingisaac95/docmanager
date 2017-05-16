import * as types from '../constants/types';

const initialState = {
  creating: false,
  document: {}
};
export default function addDocumentReducer(state = initialState, action) {
  switch(action.type) {
  case types.WILL_CREATE_DOCUMENT:
    return Object.assign({}, state, { creating: true });
  case types.CREATE_DOCUMENT:
    return Object.assign({}, state, { creating: true });
  case types.CREATE_DOCUMENT_SUCCESS:
    return Object.assign({}, state,
      { creating: false, document: action.document });
  case types.CREATE_DOCUMENT_FAILURE:
    return Object.assign({}, state, { creating: false });
  default:
    return state;
  }
}