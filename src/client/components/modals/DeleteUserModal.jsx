import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { deleteUser } from '../../actions/UserActions';

/**
 * @class
 */
export class DeleteUserModal extends React.Component {
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
    this.props.deleteUser(id);
    Materialize.toast('User deleted.', 3000, 'red');
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    const { user } = this.props;
    return (
      <div id={`deleteUserModal-${user.id}`} className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="deep-red-color">Are you sure you want to delete this user?</h5>
          </div>
        </div>
        <div className="modal-footer">
          <button
            id="yes-delete"
            onClick={() => this.onClickDelete(user.id)}
            className="modal-close left btn-large waves-effect deep-red-bg-color"
            name="action">Yes! Delete</button>
          <button
            className="modal-close right btn-large waves-effect blue-bg"
            name="action">No</button>
        </div>
      </div>
    );
  }
}

DeleteUserModal.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default connect(null, { deleteUser })(DeleteUserModal);
