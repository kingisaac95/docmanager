import request from 'axios';
import * as types from '../constants/types';


export function createDocument(document) {
  return { type: types.CREATE_DOCUMENT, document };
}
export function updateDocument(document) {
  return { type: types.UPDATE_DOCUMENT, document };
}
export function deleteDocument(document) {
  return { type: types.DELETE_DOCUMENT, document };
}
export function getAllDocuments() {
  return { type: types.GET_ALL_DOCUMENTS };
}
export function receiveAllDocuments(documents) {
  return { type: types.RECEIVE_ALL_DOCUMENTS, documents };
}
export function getAllDocumentsFailed() {
  return { type: types.GET_ALL_DOCUMENTS_FAILED };
}
export function loadDocuments() {
  return dispatch => {
    dispatch(getAllDocuments());
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get('http://localhost:8000/api/v1/documents')
      .then((res) => {
        dispatch(receiveAllDocuments(res.data));
      }, (err) => {
        dispatch(getAllDocumentsFailed());
        throw('error', err.response.data.message);
      });
  };
}