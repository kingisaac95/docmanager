import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateDocument } from '../../actions/DocumentActions';

class DocumentEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.document.title,
      access: props.document.access,
      content: props.document.content,
      UserId: props.document.UserId
    };

    this.onChange = this.onChange.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change', this.onChange);
    $('select').material_select();
  }

  onChange(e) {
    this.setState({
      [ e.target.name ] : e.target.value
    });
  }

  onClickUpdate(id) {
    this.props.updateDocument(id, this.state).then(() => {
      Materialize.toast('Document updated.', 3000, 'green');
      this.context.router.push('/documents');
    });
  }

  handleEditorChange (e) {
    const content = e.target.getContent();
    this.setState({
      content
    });
  }

  render() {
    // window.addEventListener("beforeunload", function (event) {
    //   // Materialize.toast('Redirecting...', 1000, 'red');
    //   this.context.router.push('/documents');
    // });
    const { document } = this.props;
    return (
      <div className="row">
        <div className="col m8 offset-m2">
          <div className="center-align">
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
                    className="validate" />
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
                    onChange={this.onChange}>
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
              <div className="col s12">
                <button
                  className="btn-large waves-effect waves-light blue-bg right"
                  name="update"
                  onClick={() => this.onClickUpdate(document.id)}>
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

DocumentEdit.propTypes = {
  document: PropTypes.object.isRequired,
  updateDocument: PropTypes.func.isRequired
};

DocumentEdit.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const documentId = ownProps.params.id;
  let document = {};
  state.documents.data.forEach(doc => {
    const curDocId = String(doc.id);
    if (curDocId === documentId) {
      document = doc;
    }
  });
  return { document };
  
}

export default connect(mapStateToProps, { updateDocument })(DocumentEdit);