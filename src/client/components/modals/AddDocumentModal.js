import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';
import { connect } from 'react-redux';
import $ from 'jquery';
import { createDocument } from '../../actions/DocumentActions';

/**
 * @class
 */
class AddDocumentModal extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      access: 'private',
      content: ''
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  /**
   * componentDidMount
   * @method
   * @returns {action} - modal activate and modal open
   */
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change', this.onChange);
    $('select').material_select();
    $('.modal').modal();
  }

  /**
   * change event handler
   * @method
   * @param {event} e
   * @returns {object} - current state
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * save event handler
   * @method
   * @param {event} e
   * @returns {object} - current state
   */
  onClickSave(e) {
    e.preventDefault();
    if (this.state.title === '' || this.state.content === '') {
      return Materialize.toast('All fields must be filles', 3000, 'red');
    }
    this.props.createDocument(this.state)
    .then(
      this.setState({
        title: '',
        content: ''
      }));
    e.content.setContent('');
    Materialize.toast('Document created.', 3000, 'green');
  }

  /**
   * editor change event handler
   * @method
   * @param {event} e
   * @returns {void} - current state
   */
  handleEditorChange(e) {
    const content = e.target.getContent();
    this.setState({
      content
    });
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    return (
      <div id="addDocumentModal" className="modal">
        <a
          to="#"
          style={{ cursor: 'pointer' }}
          id="close-add-document"
          className="modal-close white-color"
        ><i className="fa fa-close fa-2x deep-grey-color" /></a>
        <div className="modal-content">
          <div className="center-align">
            <h5 className="blue-color">Add New Document</h5>
            <h6 className="pink-color">
              * Note that all fields are required *
            </h6>
          </div>
          <form>
            <div className="row">
              <div className="col s12">
                <div className="row modal-form-row">
                  <div className="input-field col s12">
                    <input
                      name="title"
                      type="text"
                      onChange={this.onChange}
                      value={this.state.title}
                      className="validate" />
                    <label htmlFor="title">Title</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <select
                      ref="access"
                      name="access"
                      value={this.state.access}
                      onChange={this.onChange}
                    >
                      <option value="private">Private</option>
                      <option value="public">Public</option>
                      <option value="role">Role</option>
                    </select>
                    <label htmlFor="access">Access Type</label>
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
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="modal-close btn-large right waves-effect blue-bg"
            name="action"
            onClick={this.onClickSave}
          >Add Document</button>
          <button
            className="modal-close left btn-large waves-effect deep-red-bg-color"
            name="action"
          >Cancel</button>
        </div>
      </div>
    );
  }
}

AddDocumentModal.contextTypes = {
  router: PropTypes.object.isRequired
};

AddDocumentModal.propTypes = {
  createDocument: PropTypes.func.isRequired
};

/**
 * mapStateToProps
 * @function
 * @param {object} state
 * @returns {object} - exposed state
 */
function mapStateToProps(state) {
  return {

    documents: state.documents
  };
}

export default connect(mapStateToProps, { createDocument })(AddDocumentModal);
