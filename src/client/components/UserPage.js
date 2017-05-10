import React from 'react';
import { Link } from 'react-router';
import AddUserModal from './modals/AddUserModal';

class UserPage extends React.Component {
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

        <div className="container">
          <div className="row intro">
            <div className="col m12">
              <h5>Users</h5>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="card-content center-align">
                  <i className="fa fa-user fa-5x" />
                </div>
                <div className="blue-bg">
                  <div className="card-action white-color">
                    <h6>Name: <span>Orjiewuru Kingdom</span></h6>
                    <h6>Role: <span>Super Admin</span></h6>
                    <h6>Email: <br />
                      <span>kingdom.orjiewuru@andela.com</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col m12 center-align">
              <ul className="pagination">
                <li className="disabled">
                  <Link to="#">
                    <i className="material-icons">chevron_left</i>
                  </Link>
                </li>
                <li className="active">
                  <Link to="#">Page 1</Link>
                </li>
                <li className="waves-effect">
                  <Link to="#">
                    <i className="material-icons">chevron_right</i>
                  </Link>
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

export default UserPage;