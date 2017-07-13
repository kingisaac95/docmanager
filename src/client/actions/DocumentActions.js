import request from 'axios';
import jwt from 'jsonwebtoken';
import * as types from '../constants/types';

/**
 * @function
 * @param {object} documents
 * @returns {object} - action type
 */
export function getAllDocumentsSuccess(documents) {
  return { type: types.GET_ALL_DOCUMENTS_SUCCESS, documents };
}

/**
 * @function
 * @returns {object} - action type
 */
export function getAllDocumentsFailed() {
  return { type: types.GET_ALL_DOCUMENTS_FAILED };
}

/**
 * @function
 * @param {integer} offset
 * @returns {object} - documents
 */
export function loadDocuments(offset) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    request.get(`/api/v1/documents/?offset=${offset}`)
      .then((res) => {
        dispatch(getAllDocumentsSuccess(res.data));
      }, (err) => {
        dispatch(getAllDocumentsFailed());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function createDocumentSuccess(document) {
  return { type: types.CREATE_DOCUMENT_SUCCESS, document };
}

/**
 * @function
 * @returns {object} - action type
 */
export function createDocumentFailure() {
  return { type: types.CREATE_DOCUMENT_FAILURE };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - document
 */
export function createDocument(document) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    return request.post('/api/v1/documents', document)
      .then((res) => {
        dispatch(createDocumentSuccess(res.data));
        dispatch(loadDocuments(0));
      }, (err) => {
        dispatch(createDocumentFailure());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function updateDocumentSuccess(document) {
  return { type: types.UPDATE_DOCUMENT_SUCCESS, document };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function updateDocumentFailure() {
  return { type: types.UPDATE_DOCUMENT_FAILURE };
}

/**
 * @function
 * @param {integer} id
 * @param {object} document
 * @returns {object} - document
 */
export function updateDocument(id, document) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    return request
      .put(`/api/v1/documents/${id}`, document)
        .then((res) => {
          dispatch(updateDocumentSuccess(res.data));
          dispatch(loadDocuments(0));
        }, (err) => {
          dispatch(updateDocumentFailure());
          Materialize.toast(err.response.data.message, 3000, 'red');
          throw ('error', err.response.data.message);
        });
  };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function deleteDocumentSuccess(document) {
  return { type: types.DELETE_DOCUMENT_SUCCESS, document };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - action type
 */
export function deleteDocumentFailure() {
  return { type: types.DELETE_DOCUMENT_FAILURE };
}

/**
 * @function
 * @param {object} document
 * @returns {object} - response
 */
export function deleteDocument(document) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    return request
      .delete(`/api/v1/documents/${document}`)
        .then((res) => {
          dispatch(deleteDocumentSuccess(res.data));
          dispatch(loadDocuments(0));
        }, (err) => {
          dispatch(deleteDocumentFailure());
          Materialize.toast(err.response.data.message, 3000, 'red');
          throw ('error', err.response.data.message);
        });
  };
}

/**
 * @function
 * @param {string} query
 * @returns {object} - document(s)
 */
export function searchDocuments(query) {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    request.get(`/api/v1/documents/?q=${query}&offset=0`)
      .then((res) => {
        dispatch(getAllDocumentsSuccess(res.data));
      }, (err) => {
        dispatch(getAllDocumentsFailed());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}

/**
 * @function
 * @param {object} documents
 * @returns {object} - action type
 */
export function getUserDocumentsSuccess(documents) {
  return { type: types.GET_ALL_USER_DOCUMENTS_SUCCESS, documents };
}

/**
 * @function
 * @returns {object} - action type
 */
export function getUserDocumentsFailed() {
  return { type: types.GET_ALL_USER_DOCUMENTS_FAILED };
}

/**
 * @function
 * @returns {object} - user documents
 */
export function loadUserDocuments() {
  return (dispatch) => {
    request.defaults.headers.common.Authorization = localStorage.jwtToken;
    const user = jwt.decode(localStorage.jwtToken);
    const userId = user.userData.userId;
    request.get(`/api/v1/users/${userId}/documents`)
      .then((res) => {
        dispatch(getUserDocumentsSuccess(res.data));
      }, (err) => {
        dispatch(getUserDocumentsFailed());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}
