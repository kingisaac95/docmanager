import React from 'react';
import { Link } from 'react-router';

class UserPage extends React.Component {
  render() {
    return (
      <div>
        <div className="fixed-action-btn horizontal right">
          <Link
            className="btn-floating btn-large blue-bg signUp-open"
            data-target="signUp">
            <i className="large material-icons">add</i>
          </Link>
          <ul>
            <li>
              <Link
                className="tooltip blue-bg white-color">Create new user
              </Link>
            </li>
          </ul>
        </div>

        {/*<!-- container start -->*/}
        <div className="container">
          <div className="row intro">
            <div className="col m12">
              <h5>Users</h5>
            </div>
          </div>

          {/*<!-- row start -->*/}
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

          {/* register user modal */}
          <div id="signUp" className="modal">
            <div className="modal-content">
              <div className="center-align">
                <h5 className="blue-color">Create New User</h5>
                <h6 className="pink-color">
                  * Note that all fields are required *
                </h6>
              </div>

              <div className="row">
                <form className="col s12">
                  <div className="row modal-form-row">
                    <div className="input-field col s12">
                      <input id="fullName" type="text" className="validate" />
                      <label htmlFor="fullName">Full Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="username" type="text" className="validate" />
                      <label htmlFor="username">Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <select id="role">
                        <option value="Author" selected>Author</option>
                        <option value="Contributor">Contributor</option>
                      </select>
                      <label htmlFor="role">Role?</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn-large waves-effect waves-light blue-bg"
                type="submit"
                name="action">
                Add User</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;