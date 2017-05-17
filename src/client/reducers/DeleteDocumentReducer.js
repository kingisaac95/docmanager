import * as types from '../constants/types';

const initialState =  { deleted: false };
export default function updateDocumentReducer(state = initialState, action) {
  switch(action.type) {
  case types.DELETE_DOCUMENT_SUCCESS:
    return Object.assign(
      {}, state, { deleted: true }
    );
  case types.DELETE_DOCUMENT_FAILURE:
    return Object.assign({}, state, { deleted: false });
  default:
    return state;
  }
}