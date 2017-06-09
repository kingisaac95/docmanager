import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

/**
 * Navbar
 * @class
 */
class Navbar extends React.Component {
  /**
   * lifecycle method
   * @method
   * @returns {action} - activate select button
   */
  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  /**
   * sign up modal invocator
   * @method
   * @returns {boolean} - true
   */
  openSignUpModal() {
    $('#signUpModal').modal('open');
  }

  /**
   * render
   * @method
   * @param {event} e
   * @returns {action} - action success or failure
   */
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">
              <img
                src="http://i36.photobucket.com/albums/e9/kingisaac95/icon_zpsuphcdv6q.png"
                height="25" alt="docmanager logo" />
              DocManager
            </Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <a
                onClick={this.openSignUpModal}>
                No account? Sign Up Here
              </a>
            </ul>
            <ul id="mobile-demo" className="side-nav">
              <a
                onClick={this.openSignUpModal}>
                No account? Sign Up Here
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
