import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';

export default class UserCard extends React.Component {

  render() {
    const { user } = this.props;
    let edit = null;
    const curUser = jwt.decode(localStorage.jwtToken);
    if (curUser) {
      const userId = curUser.userData.userId;
      if (user.id === userId) {
        edit = (
          <Link
            to={`users/${user.id}/edit`}
            style={{ cursor: 'pointer' }}
            id="edit-icon"
            className="white-color"
          ><i className="material-icons">edit</i></Link>
        );
      }
    }

    return (
      <div className="col s12 m3">
        <div className="card">
          <div className="card-content center-align">
            { edit }
            <i className="fa fa-user fa-5x" />
          </div>
          <div className="blue-bg">
            <div className="card-action white-color user-card">
              <h6>Name: <span>{user.name}</span></h6>
              <h6>Username: <span>{user.username}</span></h6>
              <h6>Role: <span>{user.Role.title}</span></h6>
              <h6>Email: <br />
                <span>{user.email}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};
