import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';
import { connect } from 'react-redux';
import $ from 'jquery';
import { updateDocument } from '../../actions/DocumentActions';

/**
 * Document edit
 * @class
 */
export class DocumentEdit extends React.Component {
  /**
   * @method
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      title: props.document.title,
      access: props.document.access,
      content: props.document.content,
      UserId: props.document.UserId
    };

    this.onChange = this.onChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

  /**
   * activate materialize select component before initial render
   * @method
   * @param {event} e
   * @returns {object} - changed state
   */
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change', this.onChange);
    $('select').material_select();
  }

  /**
   * update state on chage event
   * @method
   * @param {event} e
   * @returns {object} - changed state
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * update document on button click
   * @method
   * @param {event} id
   * @returns {object} - updated doc
   */
  onClickUpdate(id) {
    this.props.updateDocument(id, this.state).then(() => {
      Materialize.toast('Document updated.', 3000, 'green');
      this.context.router.push('/documents');
    });
  }

  /**
   * handle chage event
   * @method
   * @param {event} e
   * @returns {object} - changed state
   */
  handleEditorChange(e) {
    const content = e.target.getContent();
    this.setState({ content });
  }

  /**
   * redirect to previous page
   * @method
   * @returns {action} - redirect user to a page back
   */
  redirect() {
    window.history.back();
  }

  /**
   * render
   * @method
   * @returns {jsx} - jsx
   */
  render() {
    const { document } = this.props;
    return (
      <div className="row">
        <div className="col m8 offset-m2">
          <div className="center-align">
            <a
              className="fa fa-arrow-left fa-2x left"
              style={{ cursor: 'pointer', color: '#767b8d' }}
              onClick={this.redirect}
            />
            <h5 className="blue-color">Edit Document</h5>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <p className="form-labels">Title</p>
                  <input
                    name="title"
                    id="title"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.title}
                    className="validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <p className="form-labels">Access Type</p>
                  <select
                    ref="access"
                    id="access"
                    name="access"
                    value={this.state.access}
                    onChange={this.onChange}
                  >
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                    <option value="role">Role</option>
                  </select>
                </div>
              </div>
              <div className="input-field col s12">
                <TinyMCE
                  name="content"
                  id="content"
                  config={{
                    height: 300,
                    plugins: 'link image code',
                    toolbar: `undo redo | 
                      bold italic | alignleft aligncenter alignright | code`
                  }}
                  content={this.state.content}
                  onChange={this.handleEditorChange}
                />
              </div>
              <br />
              <div className="col s12">
                <button
                  className="btn-large waves-effect waves-light deep-red-bg-color left"
                  name="update"
                  onClick={this.redirect}
                >
                  Cancel
                </button>
                <button
                  className="btn-large waves-effect waves-light blue-bg right"
                  name="update"
                  onClick={() => this.onClickUpdate(document.id)}
                >
                  Update Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DocumentEdit.contextTypes = {
  router: PropTypes.object.isRequired
};

DocumentEdit.propTypes = {
  document: PropTypes.object.isRequired,
  updateDocument: PropTypes.func.isRequired
};

DocumentEdit.contextTypes = {
  router: PropTypes.object.isRequired
};

/**
 * mapStateToProps
 * @param {object} state
 * @param {object} ownProps
 * @returns {object} - current docs
 */
function mapStateToProps(state, ownProps) {
  const documentId = ownProps.params.id;
  let document = {};
  state.DocumentStore.documents.forEach((doc) => {
    const curDocId = String(doc.id);
    if (curDocId === documentId) {
      document = doc;
    }
  });
  return { document };
}

export default connect(mapStateToProps, { updateDocument })(DocumentEdit);
