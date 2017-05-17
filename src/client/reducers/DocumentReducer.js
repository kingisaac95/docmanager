import * as types from '../constants/types';

const initialState =  { loading: false, documents: [] };
export default function documentReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
  case types.CREATE_DOCUMENT_SUCCESS:
    newState = Object.assign({}, state);
    newState.documents.push(action.document);
    return newState;
  case types.CREATE_DOCUMENT_FAILURE:
    return Object.assign({}, state, { creating: false });

  // case types.UPDATE_DOCUMENT_SUCCESS:
  //   return Object.assign(
  //     {}, state, { documents: action.document }
  //   );
  // case types.UPDATE_DOCUMENT_FAILURE:
  //   return Object.assign({}, state, { updated: false });

  case types.GET_ALL_DOCUMENTS_SUCCESS:
    return Object.assign({}, state,
      { loading: false, documents: action.documents });
  case types.GET_ALL_DOCUMENTS_FAILED:
    return Object.assign({}, state, { loading: false});

  case types.GET_ALL_USER_DOCUMENTS_SUCCESS:
    return Object.assign({}, state,
      { loading: false, documents: action.documents });
  case types.GET_ALL_USER_DOCUMENTS_FAILED:
    return Object.assign({}, state, { loading: false});
  default:
    return state;
  }
}