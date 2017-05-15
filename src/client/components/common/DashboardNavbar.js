import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import image from '../../assets/img/icon.png';
import { logout } from '../../actions/LogoutActions';

class DashboardNavbar extends React.Component {
  logout(e) {
    this.props.logout();
  }

  render() {
    return (
      <nav className="nav-border">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s2">
              <Link to="#" className="brand-logo">
                <img src={image} height="25" alt="docmanager logo" /> 
                DocManager
              </Link>
              <Link
                to="#" data-activates="mobile-menu" className="button-collapse">
                <i className="material-icons">menu</i>
              </Link>
            </div>

            <div className="col s2 hide-on-med-and-down">
              <form>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons closed">close</i>
                </div>
              </form>
            </div>

            <div className="col s2 hide-on-med-and-down center-align">
              <h6 id="user">Hi, <span>Orjiewuru Kingdom</span></h6>
            </div>

            <div className="col s6 hide-on-med-and-down">
              <ul className="right">
                <li>
                  <Link to="dashboard">
                    <i className="material-icons left">home</i>Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="documents">
                    <i className="material-icons left">description</i>Documents
                  </Link>
                </li>
                <li>
                  <Link to="users">
                    <i className="material-icons left">list</i>Users
                  </Link>
                </li>
                <li>
                  <a href="" onClick={this.logout.bind(this)}>
                    <i className="material-icons left">list</i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="side-nav" id="mobile-menu">
            <li>
              <Link to="dashboard">
                <i className="material-icons left">home</i>Dashboard
              </Link>
            </li>
            <li>
              <Link to="documents">
                <i className="material-icons left">description</i>Documents
              </Link>
            </li>
            <li>
              <Link to="users">
                <i className="material-icons left">list</i>Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

DashboardNavbar.propTypes = {
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(DashboardNavbar);