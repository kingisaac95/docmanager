import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class DocumentCard extends React.Component{

  render() {
    const { document } = this.props;
    return(
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
              <span className="blue-color">{document.User.name}</span>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

DocumentCard.propTypes = {
  document: PropTypes.object.isRequired,
};