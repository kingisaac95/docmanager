import findIndex from 'lodash/findIndex';
import * as types from '../constants/types';

const initialState = { data: [], paginationDetails: {} };
/**
 * Quote Reducer
 * @function
 * @param {object} state - the initial state of the app
 * @param {object} action - the action initialized by the user
 * @returns {object} the current state
 */
export default function documentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_DOCUMENT_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.data.push(action.document);
      return newState;
    }
    case types.CREATE_DOCUMENT_FAILURE:
      return Object.assign({}, state, { creating: false });

    case types.GET_ALL_DOCUMENTS_SUCCESS:
      return action.documents;
    case types.GET_ALL_DOCUMENTS_FAILED:
      return Object.assign({}, state);

    case types.GET_ALL_USER_DOCUMENTS_SUCCESS:
      return action.documents;
    case types.GET_ALL_USER_DOCUMENTS_FAILED:
      return Object.assign({}, state);

    case types.DELETE_DOCUMENT: {
      const index =
        findIndex(state[0].userDocuments, { id: action.documentId });
      const stateCopy = [...state];
      stateCopy[0].userDocuments.splice(index, 1);
      return [
        ...stateCopy
      ];
    }
    default:
      return state;
  }
}
