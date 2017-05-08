import React from 'react';

class AddDocumentModal extends React.Component {
  render() {
    return (
      <div id="addDocumentModal" className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="blue-color">Add New Document</h5>
            <h6 className="pink-color">
              * Note that all fields are required *
            </h6>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <input id="title" type="text" className="validate" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select id="access">
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                    <option value="Role">Role</option>
                  </select>
                  <label htmlFor="access">Access Type</label>
                </div>
              </div>
              <div className="input-field col s12">
                <textarea id="content" className="materialize-textarea" />
                <label htmlFor="content">Content</label>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn-large waves-effect waves-light blue-bg"
            type="submit"
            name="action">Add Document</button>
        </div>
      </div>
    );
  }
}

export default AddDocumentModal;