import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import $ from 'jquery';
import MakeAdminModal from '../modals/MakeAdminModal';

/**
 * @class
 */
export default class UserCard extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.user.id
    };
  }

  /**
   * lifecycle method - componentDidMount
   * @method
   * @returns {action} - activates select button
   */
  componentDidMount() {
    $('.modal').modal();
  }

  /**
   * make admin modal activate
   * @method
   * @param {integer} id
   * @returns {action} - activates modal
   */
  openMakeAdminModal(id) {
    $(`#makeAdminModal-${id}`).modal('open');
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    const { user } = this.props;
    let edit = null;
    let makeAdmin = null;
    const curUser = jwt.decode(localStorage.jwtToken);
    if (curUser) {
      const userId = curUser.userData.userId;
      if (user.id === userId) {
        edit = (
          <Link
            to={`users/${user.id}/edit`}
            style={{ cursor: 'pointer' }}
            id="admin-icon"
            className="white-color"
          ><i className="material-icons">edit</i></Link>
        );
      }
      if (curUser.userData.role === 1) {
        if (user.RoleId === 3 || user.RoleId === 4) {
          makeAdmin = (
            <a
              to="#"
              style={{ cursor: 'pointer', fontStyle: 'bold' }}
              id="make-admin"
              className="deep-red-color"
              onClick={() => this.openMakeAdminModal(user.id)}
            ><i className="fa fa-power-off" /> Make Admin</a>
          );
        }
      }
    }

    return (
      <div className="col s12 m3">
        <div className="card">
          <div className="card-content center-align">
            { edit }
            { makeAdmin }
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
        <MakeAdminModal user={user} />
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};
