import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import $ from 'jquery';
import DeleteDocumentModal from '../modals/DeleteDocumentModal';

/**
 * DocumentCard
 * @class
 */
class DocumentCard extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      documentId: this.props.document.id
    };
  }

  /**
   * activate materialize select and modal components
   * @method
   * @returns {action} - open modal
   */
  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.roleChange);
  }

  /**
   * open delete modal when button is clicked
   * @method
   * @param {number} id - id of the modal
   * @returns {action} - open modal
   */
  openDeleteDocumentModal(id) {
    $(`#deleteDocumentModal-${id}`).modal('open');
  }

  /**
   * render
   * @method
   * @returns {jsx} - jsx
   */
  render() {
    const { document } = this.props;
    let edit = null, button = null;
    const user = jwt.decode(localStorage.jwtToken);
    if (user) {
      const userId = user.userData.userId;
      if (document.User.id === userId) {
        button = (
          <span
            id="delete-btn-icon"
            onClick={() => this.openDeleteDocumentModal(document.id)}
            className="right deep-red-color delete-icon"
            style={{ cursor: 'pointer' }}
          >
            <i className="material-icons small">delete</i>
          </span>
        );

        edit = (
          <Link
            to={`documents/${document.id}/edit`}
            style={{ cursor: 'pointer' }}
            id="edit-icon"
            className="white-color"
          >
            <i className="material-icons">edit</i>
          </Link>
        );
      }
    }

    /**
     * convert html to plain text for display
     * @function
     * @returns {object} - object containing plain text
     */
    function createContent() {
      return { __html: document.content.substring(0, 180) };
    }

    return (
      <div className="col s12 m3">
        <div className="card">
          <div className="card-header blue-bg">
            <h6
              id="title-text"
              className="white-color"
            >
              {document.title.substring(0, 20)}
              { edit }
            </h6>
          </div>
          <Link
            to={`documents/${document.id}/view`}
            className="black-color"
          >
            <div id="card-content" className="card-content doc-card">
              <p dangerouslySetInnerHTML={createContent()} />
            </div>
          </Link>
          <div className="card-action" id="card-action">
            <h6>Created By:
              { button }
              <br />
              <span className="blue-color">
                {document.User.name.substring(0, 15)}..
              </span>
            </h6>
          </div>
        </div>

        <DeleteDocumentModal document={document} />
      </div>
    );
  }
}

DocumentCard.propTypes = {
  document: PropTypes.object.isRequired,
};

export default DocumentCard;
