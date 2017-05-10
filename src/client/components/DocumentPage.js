import React from 'react';
import { Link } from 'react-router';
import AddDocumentModal from './modals/AddDocumentModal';

class DocumentPage extends React.Component {
  openDocumentModal() {
    $('#addDocumentModal').modal('open');
  }
  render() {
    return (
      <div>
        <div className="fixed-action-btn horizontal right">
          <a
            onClick={this.openDocumentModal}
            className="btn-floating btn-large blue-bg">
            <i className="large material-icons">add</i>
          </a>
          <ul>
            <li>
              <Link to="#" className="tooltip blue-bg white-color">
                Create new document
              </Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row intro">
            <div className="col m8">
              <h5>Documents</h5>
            </div>

            <div className="col m4 owner-select right">
              <select>
                <option value="1">Public Access</option>
                <option value="2">Role Access</option>
                <option value="1">My documents</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="card-header blue-bg">
                  <h6 className="white-color">Document 1
                    <span className="right" id="view">
                      <Link
                        to="#" id="view-icon" href="#" className="white-color">
                        <i className="material-icons">visibility</i>
                      </Link>
                      <Link
                        to="#" id="edit-icon" className="white-color">
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
                  <Link to="#">
                    <i className="material-icons">chevron_left</i>
                  </Link>
                </li>
                <li className="active">
                  <Link to="#">Page 1</Link>
                </li>
                <li className="waves-effect">
                  <Link to="#">
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <AddDocumentModal />
        </div>
      </div>
    );
  }
}

export default DocumentPage;