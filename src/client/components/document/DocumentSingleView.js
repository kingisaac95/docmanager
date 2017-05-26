import React, { PropTypes } from 'react';
import http from 'axios';

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
        throw (err.response.message);
      });
  }

  redirect() {
    window.history.back();
  }

  render() {
    function createContent(content) {
      return { __html: content };
    }
    const { document: { access, User = {}, createdAt = '', content, title } } = this.state;

    return (
      <div className="row">
        <div className="col m8 offset-m2">
          <a
            className="fa fa-arrow-left fa-2x left"
            style={{ cursor: 'pointer', color: '#767b8d' }}
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

DocumentSingleView.contextTypes = {
  router: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default DocumentSingleView;
