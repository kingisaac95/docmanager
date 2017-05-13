import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import request from 'axios';
import AddUserModal from './modals/AddUserModal';

const User = ({user}) => (
  <div className="col s12 m3">
    <div className="card">
      <div className="card-content center-align">
        <i className="fa fa-user fa-5x" />
      </div>
      <div className="blue-bg">
        <div className="card-action white-color">
          <h6>Name: <span>{user.name}</span></h6>
          <h6>Role: <span>{user.role}</span></h6>
          <h6>Email: <br />
            <span>{user.email}</span>
          </h6>
        </div>
      </div>
    </div>
  </div>
);

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
    request.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOjg2NDAwLCJ1c2VyRGF0YSI6eyJuYW1lIjoiS2luZ2RvbSBPcmppZXd1cnUiLCJ1c2VybmFtZSI6Imtpbmdpc2FhYzk1IiwiZW1haWwiOiJraW5nZG9tLm9yamlld3VydUBhbmRlbGEuY29tIiwicm9sZSI6MSwidXNlcklkIjoxfSwiaWF0IjoxNDk0NjI5ODMzfQ.KKBgv5WdCssmVb1pqF8AYTcR4yDqkYdmpB-siTbwfjE';
    request.get('http://localhost:8000/api/v1/users')
      .then((res) => {
        this.setState({users: res.data});
      }, (err) => {
        return err.response.data.message;
      });
  }

  openAddUserModal() {
    $('#addUserModal').modal('open');
  }


  render() {
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

          {this.state.users
            .map((user) =>
              <User key={user.id} user={user} />
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

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserPage;