import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Pagination } from 'react-materialize';
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
      }
    };

    this.props.loadDocuments(0);
    this.roleChange = this.roleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.roleChange);
  }

  onClick(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    this.props.loadDocuments(offset);
  }

  openDocumentModal() {
    $('#addDocumentModal').modal('open');
  }
  
  roleChange(e) {
    if(e.target.value === 'private') {
      this.props.loadUserDocuments(0);
    } else {
      this.props.loadDocuments(0);
    }
  }

  render() {
    let pageInfo;
    let pageCount;
    let currentPage;
    if (Object.keys(this.props.documents).length !== 0) {

      if (this.props.paginationDetails !== undefined) {
        pageCount = this.props.paginationDetails.pageCount;
        currentPage = this.props.paginationDetails.currentPage;
      }
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
              <Pagination
                items={pageCount}
                activePage={currentPage}
                maxButtons={6}
                onSelect={this.onClick}
              />
            </div>
          </div>

          <AddDocumentModal />
        </div>
      </div>
    );
  }
}

DocumentPage.defaultProps = {
  documents: [],
  paginationDetails: {},
};

DocumentPage.propTypes = {
  documents: PropTypes.array.isRequired,
  paginationDetails: PropTypes.object.isRequired,
  loadDocuments: PropTypes.func.isRequired,
  loadUserDocuments: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    documents: state.documents.data,
    paginationDetails: state.documents.paginationDetails
  };
}

export default connect(mapStateToProps,
  { loadDocuments, loadUserDocuments })(DocumentPage);