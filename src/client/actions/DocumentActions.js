export function createDocument(document) {
  return { type: 'CREATE_DOCUMENT', document };
}
export function updateDocument(document) {
  return { type: 'UPDATE_DOCUMENT', document };
}
export function deleteDocument(document) {
  return { type: 'DELETE_DOCUMENT', document };
}
export function getAllDocuments() {
  return { type: 'GET_ALL_DOCUMENTS' };
}