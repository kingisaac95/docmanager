import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import logout from '../../actions/LogoutActions';
import { loadDocuments, searchDocuments } from '../../actions/DocumentActions';
import { loadUsers, searchUsers } from '../../actions/UserActions';

/**
 * Dashboard navbar
 * @class
 */
export class DashboardNavbar extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * onChange event
   * @method
   * @param {event} e
   * @returns {action} - action based on condition
   */
  onChange(e) {
    const query = e.target.value;
    if (location.pathname === '/documents' && query === '') {
      this.props.loadDocuments(0);
    }
    if (location.pathname === '/users' && query === '') {
      this.props.loadUsers(0);
    }
    if (location.pathname === '/documents' && query !== '') {
      this.props.searchDocuments(e.target.value);
    }
    if (location.pathname === '/users' && query !== '') {
      this.props.searchUsers(e.target.value);
    }
  }

  /**
   * logout event
   * @method
   * @param {event} e
   * @returns {action} - logout action
   */
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  /**
   * render
   * @method
   * @returns {jsx} - jsx
   */
  render() {
    let message = null;
    const user = this.props.user;
    if (user.name) {
      message = (
        <h6 id="user">Hi, <span>{ user.name }</span></h6>
      );
    }
    return (
      <nav className="nav-border">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s2">
              <Link to="#" className="brand-logo">
                <img
                  src="http://i36.photobucket.com/albums/e9/kingisaac95/icon_zpsuphcdv6q.png"
                  height="25"
                  alt="docmanager logo"
                />
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
                  <input
                    onChange={this.onChange}
                    type="search"
                  />
                  <label className="label-icon" htmlFor="search">
                    <i
                      className="material-icons"
                      style={{ color: 'black' }}
                    >search</i>
                  </label>
                  <i className="material-icons closed">close</i>
                </div>
              </form>
            </div>

            <div className="col s8 hide-on-med-and-down">
              <ul className="right">
                <li>
                  <Link to="/dashboard">
                    <i className="material-icons left">home</i>Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/documents" id="documents">
                    <i className="material-icons left">description</i>Documents
                  </Link>
                </li>
                <li>
                  <Link to="/users" id="users">
                    <i className="material-icons left">list</i>Users
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={this.logout} id="logout">
                    <i className="material-icons left">list</i>Logout
                  </Link>
                </li>
                <li>
                  { message }
                </li>
              </ul>
            </div>
          </div>

          <ul className="side-nav" id="mobile-menu">
            <li>
              <Link to="/dashboard">
                <i className="material-icons left">home</i>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/documents">
                <i className="material-icons left">description</i>Documents
              </Link>
            </li>
            <li>
              <Link to="/users">
                <i className="material-icons left">list</i>Users
              </Link>
            </li>
            <li>
              <Link to="/" onClick={this.logout}>
                <i className="material-icons left">list</i>Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

DashboardNavbar.defaultProps = {
  user: {}
};

DashboardNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  searchDocuments: PropTypes.func.isRequired,
  loadDocuments: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

/**
 * mapStateToProps
 * @param {*} state
 * @returns {object} - state
 */
function mapStateToProps(state) {
  return {
    user: state.auth.user.userData
  };
}

export default connect(
  mapStateToProps, {
    logout,
    searchDocuments,
    loadDocuments,
    searchUsers,
    loadUsers }
)(DashboardNavbar);
