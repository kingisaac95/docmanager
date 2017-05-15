import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import request from 'axios';
import { loadUsers } from '../actions/UserActions';
import AddUserModal from './modals/AddUserModal';
import UserCard from './UserCard';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'User\'s Name',
        role: 'User\'s Role',
        email: 'User\'s Email'
      },
      users: []
    };
  }

  componentWillMount() {
    // this.props.dispatch(loadUsers());
  }

  openAddUserModal() {
    $('#addUserModal').modal('open');
  }


  render() {
    if(this.props.loading){
      return (
        <div className="space">
          <div>Loading documents...</div>
        </div>);
    }
    return (
      <div>
        <div className="fixed-action-btn horizontal right">
          <a
            onClick={this.openAddUserModal}
            className="btn-floating btn-large blue-bg signUp-open"
            data-target="signUp">
            <i className="large material-icons">add</i>
          </a>
          <ul>
            <li>
              <Link
                to="#"
                className="tooltip blue-bg white-color">Create new user
              </Link>
            </li>
          </ul>
        </div>

        <div className="container row">
          <div className="row intro">
            <div className="col m12">
              <h5>Users</h5>
            </div>
          </div>

          {this.props.users
            .map((user) => <UserCard
              key={user.id}
              user={user} />
          )}

          <div className="row">
            <div className="col m12 center-align">
              <ul className="pagination">
                <li className="disabled">
                  <a href="">
                    <i className="material-icons">chevron_left</i>
                  </a>
                </li>
                <li className="active">
                  <a href="">Page 1</a>
                </li>
                <li className="waves-effect">
                  <a href="">
                    <i className="material-icons">chevron_right</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <AddUserModal />
        </div>
      </div>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state, props) {
  return {
    loading: state.users.loading,
    users: state.users.users
  };
}

export default connect(mapStateToProps)(UserPage);