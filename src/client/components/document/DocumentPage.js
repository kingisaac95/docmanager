import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';
import AddDocumentModal from '../modals/AddDocumentModal';

import {
    loadDocuments,
    loadUserDocuments
  } from '../../actions/DocumentActions';
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
    this.props.dispatch(loadDocuments());

    this.roleChange = this.roleChange.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.roleChange);
  }

  openDocumentModal() {
    $('#addDocumentModal').modal('open');
  }
  
  roleChange(e) {
    if(e.target.value === 'private') {
      this.props.dispatch(loadUserDocuments());
    }
    if(e.target.value === 'public') {
      this.props.dispatch(loadDocuments());
    }
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
            <div className="col m12">
              <div className="left">
                <h5>Documents</h5>
              </div>
              <div className="doc-access right">
                <select
                  ref="role"
                  onChange={this.roleChange}
                >
                  <option value="public">Public / Role</option>
                  <option value="private">My documents</option>
                </select>
              </div>
            </div>
          </div>
          
          {this.props.documents.map(document => <DocumentCard
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
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.documents.loading,
    documents: state.documents.documents
  };
}

export default connect(mapStateToProps)(DocumentPage);