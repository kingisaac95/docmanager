import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateDocument } from '../../actions/DocumentActions';

class EditDocumentModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClickSave = this.onClickSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change', this.onChange);
    $('select').material_select();
    $('.modal').modal();
  }

  onChange(e) {
    this.setState({
      [ e.target.name ] : e.target.value
    });
  }

  onClickSave() {
    this.props.dispatch(updateDocument(this.state));
  }
  

  render() {
    const { document } = this.props;

    return (
      <div id="editDocumentModal" className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="blue-color">Add New Document</h5>
            <h6 className="pink-color">
              * Note that all fields are required *
            </h6>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <input
                    name="title"
                    type="text"
                    onChange={this.onChange}
                    value={document.title}
                    className="validate" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select
                    ref="access"
                    name="access"
                    value={document.access}
                    onChange={this.onChange}>
                    <option disabled >Select Access</option>
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                    <option value="Role">Role</option>
                  </select>
                  <label htmlFor="access">Access Type</label>
                </div>
              </div>
              <div className="input-field col s12">
                <textarea
                  name="content"
                  className="materialize-textarea"
                  onChange={this.onChange}
                  value={document.content} />
                <label htmlFor="content">Content</label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn-large waves-effect waves-light blue-bg"
            type="submit"
            name="action"
            onClick={this.onClickSave} >Update Document</button>
        </div>
      </div>
    );
  }
}

EditDocumentModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  document: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  // console.log(ownProps)
  // const documentId = ownProps.params.id;
  let document = {};
  // state.documents.documents.forEach(doc => {
  //   const curDocId = String(doc.id);
  //   if (curDocId === documentId) {
  //     document = doc;
  //   }
  // });
  return { document };
}

export default connect(mapStateToProps)(EditDocumentModal);