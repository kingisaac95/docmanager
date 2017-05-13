import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import request from 'axios';
import AddDocumentModal from './modals/AddDocumentModal';

const Document = ({document}) => (
  <div className="col s12 m3">
    <div className="card">
      <div className="card-header blue-bg">
        <h6 className="white-color">{document.title}
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
        <p>{document.content}</p>
      </div>
      <div className="card-action" id="card-action">
        <h6>Created By: <br />
          <span className="blue-color">{document.author}</span>
        </h6>
      </div>
    </div>
  </div>
);

class DocumentPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      document: {
        title: 'Document Title',
        content: 'Document Body',
        author: 'Document Author'
      },
      documents: []
    };
  }

  componentWillMount() {
    request.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOjg2NDAwLCJ1c2VyRGF0YSI6eyJuYW1lIjoiS2luZ2RvbSBPcmppZXd1cnUiLCJ1c2VybmFtZSI6Imtpbmdpc2FhYzk1IiwiZW1haWwiOiJraW5nZG9tLm9yamlld3VydUBhbmRlbGEuY29tIiwicm9sZSI6MSwidXNlcklkIjoxfSwiaWF0IjoxNDk0NjI5ODMzfQ.KKBgv5WdCssmVb1pqF8AYTcR4yDqkYdmpB-siTbwfjE';
    request.get('http://localhost:8000/api/v1/documents')
      .then((res) => {
        this.setState({documents: res.data});
      }, (err) => {
        console.log('error', err.response.data.message);
      });
  }

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

        <div className="container row">
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
          
          {this.state.documents
            .map((document) => <Document
              key={document.id}
              document={document} />
          )}
          

          <div className="row">
            <div className="col m12 center-align">
              <ul className="pagination">
                <li className="disabled">
                  <a href="">
                    <i className="material-icons">chevron_left</i>
                  </a>
                </li>
                <li className="active">
                  <a href="">Page 1</a>
                </li>
                <li className="waves-effect">
                  <a href="">
                    <i className="material-icons">chevron_right</i>
                  </a>
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

Document.propTypes = {
  document: PropTypes.object.isRequired
};

export default DocumentPage;