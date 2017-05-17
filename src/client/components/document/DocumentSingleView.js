import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class DocumentSingleView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { document } = this.props;
    return (
      <div className="row">
        <div className="col m8 offset-m2">
          <h6>
            <span className="right">Access: 
              <span className="blue-color"> {document.access}</span>
            </span>
          </h6>
          <h5 className="center-align">{document.title}</h5>
          <p className="single-view">{document.content}</p>
          <hr />
          <p>
            <span>
              Created by:
              <span className="blue-color"> {document.User.name}</span>
            </span>
            <br />
            <span>
              Created at:
              <span
                className="blue-color"> {document.createdAt.substring(0, 10)}
              </span>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

DocumentSingleView.propTypes = {
  document: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const documentId = ownProps.params.id;
  let document = {};
  state.documents.documents.forEach(doc => {
    const curDocId = String(doc.id);
    if (curDocId === documentId) {
      document = doc;
    }
  });
  return { document };
  
}

export default connect(mapStateToProps)(DocumentSingleView);