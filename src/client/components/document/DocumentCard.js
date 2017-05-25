import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import DeleteDocumentModal from '../modals/DeleteDocumentModal';

class DocumentCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      documentId: this.props.document.id
    };
  }

  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.roleChange);
  }

  openDeleteDocumentModal(id) {
    $(`#deleteDocumentModal-${id}`).modal('open');
  }

  render() {
    const { document } = this.props;
    let edit = null, button = null;
    const user = jwt.decode(localStorage.jwtToken);
    if(user) {
      const userId = user.userData.userId;
      const role = user.userData.role;
      if (document.User.id === userId || role === 1 || role === 2) {
        button = (
          <span
            onClick={() => this.openDeleteDocumentModal(document.id)}
            className="right deep-red-color delete-icon"
            style={{cursor: 'pointer'}}>
            <i className="material-icons small">delete</i>
          </span>
        );

        edit = (
          <Link
              to={'documents/' + document.id + '/edit'}
              style={{cursor: 'pointer'}}
              id="edit-icon"
              className="white-color">
            <i className="material-icons">edit</i>
          </Link>
        );
      }
    }

    function createContent() {
      return {__html: document.content.substring(0, 206)};
    }
    
    return(
      <div className="col s12 m3">
        <div className="card">
          <div className="card-header blue-bg">
            <h6 
              className="white-color center-align">
              {document.title.substring(0, 20)}...
              { edit }
            </h6>
          </div>
          <Link
            to={'documents/' + document.id + '/view'}
            className="black-color">
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