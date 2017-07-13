import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Pagination } from 'react-materialize';
import $ from 'jquery';
import AddDocumentModal from '../modals/AddDocumentModal';
import logout from '../../actions/LogoutActions';

import {
    loadDocuments,
    loadUserDocuments
  } from '../../actions/DocumentActions';
import DocumentCard from './DocumentCard';

/**
 * DocumentPage
 * @class
 */
export class DocumentPage extends React.Component {
  /**
   * @param {object} props
   */
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
    this.logout = this.logout.bind(this);
  }

  /**
   * activate materialize select and modal components
   * @method
   * @returns {action} - activate modal and select button
   */
  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.roleChange);
  }

  /**
   * onClick handler
   * @method
   * @param {integer} pageNumber
   * @returns {object} - docs
   */
  onClick(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    this.props.loadDocuments(offset);
  }

  /**
   * openDocumentModal
   * @method
   * @returns {action} - opens modal
   */
  openDocumentModal() {
    $('#addDocumentModal').modal('open');
  }

  /**
   * logout event
   * @method
   * @param {event} e
   * @returns {action} - logout action
   */
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  /**
   * roleChange controller
   * @param {event} e
   * @returns {action} - load users/documents action
   */
  roleChange(e) {
    if (e.target.value === 'private') {
      this.props.loadUserDocuments(0);
    } else {
      this.props.loadDocuments(0);
    }
  }

  /**
   * render method
   * @method
   * @returns {jsx} - jsx
   */
  render() {
    let pageCount;
    let currentPage;
    if (Object.keys(this.props.documents).length !== 0) {
      if (this.props.paginationDetails !== undefined) {
        pageCount = this.props.paginationDetails.pageCount;
        currentPage = this.props.paginationDetails.currentPage;
      }
    }
    let noDoc = null;
    let pagination = null;
    if (this.props.documents.length === 0) {
      noDoc = (
        <div className="row center-align">
          <h6
          id="page-title">Sorry, no documents found. Click the ( + ) to create a new document.</h6>
        </div>
      );
    } else {
      pagination = (
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
      );
    }
    return (
      <div>
        <div className="fixed-action-btn horizontal right">
          <a
            id="create-document"
            onClick={this.openDocumentModal}
            className="btn-floating btn-large blue-bg">
            <i className="large material-icons">add</i>
          </a>
          <ul>
            <li>
              <span className="tooltip blue-bg white-color">
                Create new document
              </span>
            </li>
          </ul>
        </div>

        <div className="container row">
          <div className="row intro">
            <div className="col m12">
              <div className="left">
                <h5>Documents</h5>
                <p className="hide-on-med-and-up">
                  <Link to="/dashboard">Dashboard</Link> |
                  <Link to="/documents">Documents</Link> |
                  <Link to="/users">Users</Link> |
                  <Link to="/" onClick={this.logout}>Logout</Link>
                </p>
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

          { noDoc }

          {this.props.documents.map(document =>
            <DocumentCard
              key={document.id}
              document={document}
            />
          )}

          { pagination }

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
  loadUserDocuments: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

/**
 * mapStateToProps
 * @param {object} state
 * @returns {object} - current docs
 */
function mapStateToProps(state) {
  return {
    documents: state.DocumentStore.documents,
    paginationDetails: state.DocumentStore.paginationDetails
  };
}

export default connect(mapStateToProps,
  { loadDocuments, loadUserDocuments, logout })(DocumentPage);
