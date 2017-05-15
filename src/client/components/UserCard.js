import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class UserCard extends React.Component{

  render() {
    const { user } = this.props;
    return(
      <div className="col s12 m3">
        <div className="card">
          <div className="card-content center-align">
            <i className="fa fa-user fa-5x" />
          </div>
          <div className="blue-bg">
            <div className="card-action white-color">
              <h6>Name: <span>{user.name}</span></h6>
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