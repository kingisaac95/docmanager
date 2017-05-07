import React from 'react';
import { Link } from 'react-router';

class DocumentPage extends React.Component {
  render() {
    return (
      <div>
        <div className="fixed-action-btn horizontal right">
          <Link
            className="btn-floating btn-large blue-bg signUp-open"
            data-target="signUp">
            <i className="large material-icons">add</i>
          </Link>
          <ul>
            <li>
              <Link className="tooltip blue-bg white-color">
                Create new document
              </Link>
            </li>
          </ul>
        </div>

        {/*container start*/}
        <div className="container">
          <div className="row intro">
            <div className="col m8">
              <h5>Documents</h5>
            </div>

            <div className="col m4 owner-select right">
              <select>
                <option selected value="1">Public Access</option>
                <option value="2">Role Access</option>
                <option value="1">My documents</option>
              </select>
            </div>
          </div>

          {/*<!-- row start -->*/}
          <div className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="card-header blue-bg">
                  <h6 className="white-color">Document 1
                    <span className="right" id="view">
                      <Link id="view-icon" href="#" className="white-color">
                        <i className="material-icons">visibility</i>
                      </Link>
                      <Link id="edit-icon" href="#" className="white-color">
                        <i className="material-icons">edit</i>
                      </Link>
                    </span>
                  </h6>
                </div>
                <div className="card-content doc-card">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
                <div className="card-action" id="card-action">
                  <h6>Created By: <br />
                    <span className="blue-color">Orjiewuru Kingdom</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col m12 center-align">
              <ul className="pagination">
                <li className="disabled">
                  <Link>
                    <i className="material-icons">chevron_left</i>
                  </Link>
                </li>
                <li className="active">
                  <Link>Page 1</Link>
                </li>
                <li className="waves-effect">
                  <Link><i className="material-icons">chevron_right</i></Link>
                </li>
              </ul>
            </div>
          </div>

          {/*Add Document Modal*/}
          <div id="signUp" className="modal">
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
                        <option value="Public" selected>Public</option>
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
          {/*add document modal end*/}
        </div>
        {/*container end*/}
      </div>
    );
  }
}

export default DocumentPage;