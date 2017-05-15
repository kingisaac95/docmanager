import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AddDocumentModal from './modals/AddDocumentModal';
import { loadDocuments } from '../actions/DocumentActions';
import DocumentCard from './DocumentCard';

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
    this.props.dispatch(loadDocuments());
  }

  openDocumentModal() {
    $('#addDocumentModal').modal('open');
  }
  
  render() {
    if(this.props.loading){
      return (
        <div className="space">
          <div>Loading documents...</div>
        </div>);
    }
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
          
          {this.props.documents
            .map((document) => <DocumentCard
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

DocumentPage.propTypes = {
  documents: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    loading: state.documents.loading,
    documents: state.documents.documents
  };
}

export default connect(mapStateToProps)(DocumentPage);