import * as types from '../constants/types';

const initialState =  { updated: false, document: {} };
export default function updateDocumentReducer(state = initialState, action) {
  switch(action.type) {
  case types.UPDATE_DOCUMENT_SUCCESS:
    return Object.assign(
      {}, state, { updated: true, document: action.document }
    );
  case types.UPDATE_DOCUMENT_FAILURE:
    return Object.assign({}, state, { updated: false });
  default:
    return state;
  }
}