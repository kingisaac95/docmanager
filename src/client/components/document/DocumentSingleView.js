import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import http from 'axios';
import TinyMCE from 'react-tinymce';

class DocumentSingleView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      document: {}
    };
  }
  componentDidMount() {
    http.get(`/api/v1/documents/${this.props.params.id}`)
      .then((res) => {
        this.setState({
          document: res.data
        });
      }, (err) => {
        throw(err.response.message);
      });
  }

  redirect() {
    window.history.back();
  }

  render() {
    function createContent(content) {
      return {__html: content };
    }
    const { document: { access, User = {}, createdAt = '', content, title } } = this.state;

    return (
      <div className="row">
        <div className="col m8 offset-m2">
          <a
            className="fa fa-arrow-left fa-2x left"
            style={{ cursor: 'pointer' }}
            onClick={this.redirect}
          />
          <h6>
            <span className="right">Access:
              <span className="blue-color"> {access}</span>
            </span>
          </h6>
          <h5 className="center-align">{title}</h5>
          <p dangerouslySetInnerHTML={createContent(content)} />
          <hr />
          <p>
            <span>
              Created by:
              <span className="blue-color"> {User.name}</span>
            </span>
            <br />
            <span>
              Created at:
              <span className="blue-color"> {createdAt.substring(0, 10)}
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

DocumentSingleView.contextTypes = {
  router: PropTypes.object.isRequired
};

// function mapStateToProps(state, ownProps) {
//   const documentId = ownProps.params.id;
//   console.log(ownProps, state.documents)
//   let document = {};
//   state.documents.data.forEach(doc => {
//     const curDocId = String(doc.id);
//     if (curDocId === documentId) {
//       document = doc;
//     }
//   });
//   return { document }; 
// }

// export default connect(mapStateToProps)(DocumentSingleView);
export default DocumentSingleView;
