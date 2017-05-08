import React from 'react';
import { Link } from 'react-router';
import image from '../../../assets/img/icon.png';

class DashboardNavbar extends React.Component {
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

            <div className="col s4 hide-on-med-and-down">
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

            <div className="col s2 hide-on-med-and-down">
              <h6 id="user">Hi, <span>Orjiewuru Kingdom</span></h6>
            </div>

            <div className="col s4 hide-on-med-and-down">
              <ul className="right">
                <li>
                  <Link to="dashboard">
                    <i className="material-icons left">home</i>Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="document">
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
          </div>

          <ul className="side-nav" id="mobile-menu">
            <li>
              <Link to="dashboard">
                <i className="material-icons left">home</i>Dashboard
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

export default DashboardNavbar;