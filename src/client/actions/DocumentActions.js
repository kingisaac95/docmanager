import request from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../constants/types';

export function createDocumentSuccess(document) {
  return { type: types.CREATE_DOCUMENT_SUCCESS, document };
}

export function createDocumentFailure() {
  return { type: types.CREATE_DOCUMENT_FAILURE };
}

export function createDocument(document) {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.post('http://localhost:8000/api/v1/documents', document)
      .then(res => {
        dispatch(createDocumentSuccess(res.data));
      }, err => {
        dispatch(createDocumentFailure());
        throw('error', err.response.data.message);
      });
  };
}

export function updateDocument(document) {
  return { type: types.UPDATE_DOCUMENT, document };
}

export function deleteDocument(document) {
  return { type: types.DELETE_DOCUMENT, document };
}

export function getAllDocumentsSuccess(documents) {
  return { type: types.GET_ALL_DOCUMENTS_SUCCESS, documents };
}

export function getAllDocumentsFailed() {
  return { type: types.GET_ALL_DOCUMENTS_FAILED };
}

export function loadDocuments() {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    request.get('http://localhost:8000/api/v1/documents')
      .then((res) => {
        dispatch(getAllDocumentsSuccess(res.data));
      }, (err) => {
        dispatch(getAllDocumentsFailed());
        throw('error', err.response.data.message);
      });
  };
}

export function getUserDocumentsSuccess(documents) {
  return { type: types.GET_ALL_USER_DOCUMENTS_SUCCESS, documents };
}

export function getUserDocumentsFailed() {
  return { type: types.GET_ALL_USER_DOCUMENTS_FAILED };
}

export function loadUserDocuments() {
  return dispatch => {
    request.defaults.headers.common['Authorization'] = localStorage.jwtToken;
    const user = jwt.decode(localStorage.jwtToken);
    const userId = user.userData.userId;
    request.get('http://localhost:8000/api/v1/users/'+ userId +'/documents')
      .then((res) => {
        dispatch(getUserDocumentsSuccess(res.data));
      }, (err) => {
        dispatch(getUserDocumentsFailed());
        throw('error', err.response.data.message);
      });
  };
}