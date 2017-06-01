import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { deleteDocument } from '../../actions/DocumentActions';

/**
 * @class
 */
class DeleteDocumentModal extends React.Component {
  /**
   * lifecycle method - componentDidMount
   * @method
   * @returns {action} - activate modal and open modal
   */
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change', this.onChange);
    $('select').material_select();
    $('.modal').modal();
  }

  /**
   * delete event handler
   * @method
   * @param {integer} id
   * @returns {object} - current state
   */
  onClickDelete(id) {
    this.props.deleteDocument(id);
    Materialize.toast('Document deleted.', 3000, 'red');
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    const { document } = this.props;
    return (
      <div id={`deleteDocumentModal-${document.id}`} className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="deep-red-color">
              Are you sure you want to delete this document?
            </h5>
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => this.onClickDelete(document.id)}
          className="modal-close left btn-large waves-effect deep-red-bg-color"
            name="action">Delete</button>
          <button
            className="modal-close right btn-large waves-effect blue-bg"
            name="action">Cancel</button>
        </div>
      </div>
    );
  }
}

DeleteDocumentModal.propTypes = {
  document: PropTypes.object.isRequired,
  deleteDocument: PropTypes.func.isRequired
};

export default connect(null, { deleteDocument })(DeleteDocumentModal);
