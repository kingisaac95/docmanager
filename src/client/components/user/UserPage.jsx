import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Pagination } from 'react-materialize';
import $ from 'jquery';
import { loadUsers } from '../../actions/UserActions';
import logout from '../../actions/LogoutActions';
import UserCard from './UserCard';

/**
 * @class
 */
export class UserPage extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
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

    this.props.loadUsers(0);
    this.onClick = this.onClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  /**
   * lifecycle method
   * @method
   * @returns {action} - activate select button
   */
  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
  }

  /**
   * onClick handler
   * @method
   * @param {integer} pageNumber
   * @returns {object} - docs
   */
  onClick(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    this.props.loadUsers(offset);
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
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    let pageCount;
    let currentPage;
    if (Object.keys(this.props.users).length !== 0) {
      if (this.props.paginationDetails !== undefined) {
        pageCount = this.props.paginationDetails.pageCount;
        currentPage = this.props.paginationDetails.currentPage;
      }
    }
    return (
      <div>
        <div className="fixed-action-btn horizontal right">
          <ul>
            <li>
              <Link
                to="#"
                className="tooltip blue-bg white-color"
              >Create new user
              </Link>
            </li>
          </ul>
        </div>

        <div className="container row">
          <div className="row intro">
            <div className="col m12">
              <h5>Users</h5>
              <p className="hide-on-med-and-up">
                <Link to="/dashboard">Dashboard</Link> |
                <Link to="/documents">Documents</Link> |
                <Link to="/users">Users</Link> |
                <Link to="/" onClick={this.logout}>Logout</Link>
              </p>
            </div>
          </div>

          {this.props.users
            .map(user => <UserCard key={user.id} user={user} />
          )}

          <div className="row">
            <div className="col m12 center-align">
              <Pagination
                items={pageCount}
                activePage={currentPage}
                maxButtons={6}
                onSelect={this.onClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserPage.defaultProps = {
  users: [],
  paginationDetails: {},
};

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  paginationDetails: PropTypes.object.isRequired,
};

/**
 * Map state to props
 * @function
 * @param {object} state - the state of the app
 * @returns {object} exposed state
 */
function mapStateToProps(state) {
  return {
    users: state.UserStore.users,
    paginationDetails: state.UserStore.paginationDetails
  };
}

export default connect(mapStateToProps, { loadUsers, logout })(UserPage);
