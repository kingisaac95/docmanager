import * as types from '../constants/types';

const initialState =  { loading: false, documents: [] };
export default function documentReducer(state = initialState, action) {
  switch(action.type) {
  case types.GET_ALL_DOCUMENTS:
    return Object.assign({}, state, { loading: true });
  case types.RECEIVE_ALL_DOCUMENTS:
    return Object.assign({}, state,
      { loading: false, documents: action.documents });
  case types.GET_ALL_DOCUMENTS_FAILED:
    return Object.assign({}, state, { loading: false});
  default:
    return state;
  }
}