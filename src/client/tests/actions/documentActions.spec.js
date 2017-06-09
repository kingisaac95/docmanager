import expect from 'expect';
import * as documentActions from '../../actions/DocumentActions';
import * as types from '../../constants/types';
import * as document from '../../../server/tests/helpers/documents';

describe('Document Actions', () => {
  describe('getAllDocumentsSuccess', () => {
    it('should create a GET_ALL_DOCUMENTS_SUCCESS actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.GET_ALL_DOCUMENTS_SUCCESS,
        documents: document.testDocument
      };

      // fire off the action
      const action = documentActions.getAllDocumentsSuccess(document.testDocument);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('getAllDocumentsFailed', () => {
    it('should create a GET_ALL_DOCUMENTS_FAILED actions', () => {
      // perpare mock data
      const expectedAction = { type: types.GET_ALL_DOCUMENTS_FAILED };

      // fire off the action
      const action = documentActions.getAllDocumentsFailed();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('createDocumentSuccess', () => {
    it('should create a CREATE_DOCUMENT_SUCCESS actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.CREATE_DOCUMENT_SUCCESS,
        document: document.testDocument
      };

      // fire off the action
      const action = documentActions.createDocumentSuccess(document.testDocument);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('createDocumentFailure', () => {
    it('should create a CREATE_DOCUMENT_FAILURE actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.CREATE_DOCUMENT_FAILURE,
      };

      // fire off the action
      const action = documentActions.createDocumentFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateDocumentSuccess', () => {
    it('should create a UPDATE_DOCUMENT_SUCCESS actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.UPDATE_DOCUMENT_SUCCESS,
        document: document.testDocument
      };

      // fire off the action
      const action = documentActions.updateDocumentSuccess(document.testDocument);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateDocumentFailure', () => {
    it('should create a UPDATE_DOCUMENT_FAILURE actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.UPDATE_DOCUMENT_FAILURE,
      };

      // fire off the action
      const action = documentActions.updateDocumentFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteDocumentSuccess', () => {
    it('should create a DELETE_DOCUMENT_SUCCESS actions', () => {
      // perpare mock data
      const curDoc = 1;
      const expectedAction = {
        type: types.DELETE_DOCUMENT_SUCCESS,
        document: curDoc
      };

      // fire off the action
      const action = documentActions.deleteDocumentSuccess(curDoc);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteDocumentFailure', () => {
    it('should create a DELETE_DOCUMENT_FAILURE actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.DELETE_DOCUMENT_FAILURE,
      };

      // fire off the action
      const action = documentActions.deleteDocumentFailure();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('getUserDocumentsSuccess', () => {
    it('should create a GET_ALL_USER_DOCUMENTS_SUCCESS actions', () => {
      // perpare mock data
      const documents = {};
      const expectedAction = {
        type: types.GET_ALL_USER_DOCUMENTS_SUCCESS,
        documents
      };

      // fire off the action
      const action = documentActions.getUserDocumentsSuccess(documents);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('getUserDocumentsFailed', () => {
    it('should create a GET_ALL_USER_DOCUMENTS_FAILED actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.GET_ALL_USER_DOCUMENTS_FAILED,
      };

      // fire off the action
      const action = documentActions.getUserDocumentsFailed();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
