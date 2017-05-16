import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import EditDocumentModal from '../modals/EditDocumentModal';

class DocumentCard extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.roleChange);
  }

  openEditDocumentModal() {
    alert('baa');
    $('#editDocumentModal').modal('open');
  }

  render() {
    const { document } = this.props;
    return(
      <div className="col s12 m3">
        <div className="card">
          <div className="card-header blue-bg">
            <h6 className="white-color">{document.title}
              <span className="right" id="view">
                <Link
                  to={'documents/' + document.id}
                  id="view-icon"
                  className="white-color">
                  <i className="material-icons">visibility</i>
                </Link>
                <a
                  style={{cursor: 'pointer'}}
                  onClick={this.openDocumentModal}
                  to=""
                  id="edit-icon"
                  className="white-color">
                  <i className="material-icons">edit</i>
                </a>
              </span>
            </h6>
          </div>
          <div id="card-content" className="card-content doc-card">
            <p>{document.content}</p>
          </div>
          <div className="card-action" id="card-action">
            <h6>Created By: <br />
              <span className="blue-color">{document.User.name}</span>
            </h6>
          </div>
        </div>

        <EditDocumentModal />
      </div>
    );
  }
}

DocumentCard.propTypes = {
  document: PropTypes.object.isRequired,
};

export default DocumentCard;