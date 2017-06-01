import React, { PropTypes } from 'react';
import http from 'axios';

/**
 * DocumentSinglView
 * @class
 */
class DocumentSingleView extends React.Component {
  /**
   * constructor method
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      document: {}
    };
  }

  /**
   * lifecycle method
   * @method
   * @returns {object} - response object
   */
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

  /**
   * redirect method
   * @method
   * @returns {action} - redirect user to a page back
   */
  redirect() {
    this.window.history.back();
  }

  /**
   * render method
   * @method
   * @returns {jsx} - jsx
   */
  render() {
    /**
     * convert html to plain text for display
     * @function
     * @param {object} content
     * @returns {object} - object containing plain text
     */
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
