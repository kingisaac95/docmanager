import * as types from '../constants/types';

const initialState =  { data: [], paginationDetails: {} };
export default function documentReducer(state = initialState, action) {
  switch(action.type) {
  case types.CREATE_DOCUMENT_SUCCESS: {
    let newState;
    newState = Object.assign({}, state);
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
  default:
    return state;
  }

  
  //   case 'USER_HAS_NO_DOCUMENT': {
  //     return [
  //       ...state,
  //       {
  //         noDocument: action.errorMessage
  //       }
  //     ];
  //   }

  //   case 'DELETE_DOCUMENT': {
  //     const index =
  //       findIndex(state[0].userDocuments, { id: action.documentId });
  //     const stateCopy = [...state];
  //     stateCopy[0].userDocuments.splice(index, 1);
  //     return [
  //       ...stateCopy
  //     ];
  //   }

  //   case 'EDIT_DOCUMENT': {
  //     const index =
  //       findIndex(state[0].userDocuments, { id: action.documentId });
  //     const stateCopy = [...state];
  //     stateCopy[0].userDocuments[index] = action.updatedDocument;
  //     return stateCopy;
  //   }

  //   default: return state;
  // }
}