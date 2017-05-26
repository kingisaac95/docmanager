import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { makeAdmin } from '../../actions/UserActions';

class MakeAdminModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.modal').modal();
  }

  onClickUpgrade(id) {
    this.props.makeAdmin(id);
    Materialize.toast('User upgraded to Admin.', 3000, 'green');
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div id={`makeAdminModal-${user.id}`} className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="deep-red-color">
              Are you sure you want to make this user an Admin?
            </h5>
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => this.onClickUpgrade(user.id)}
            className="modal-close left btn-large waves-effect deep-red-bg-color"
            name="action"
          >Make Admin</button>
          <button
            className="modal-close right btn-large waves-effect blue-bg"
            name="action"
          >Cancel</button>
        </div>
      </div>
    );
  }
}

MakeAdminModal.propTypes = {
  user: PropTypes.object.isRequired,
  makeAdmin: PropTypes.func.isRequired
};

export default connect(null, { makeAdmin })(MakeAdminModal);
