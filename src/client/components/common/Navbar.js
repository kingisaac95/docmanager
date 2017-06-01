import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import image from '../../assets/img/icon.png';

/**
 * Navbar
 * @class
 */
class Navbar extends React.Component {
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
                src={image}
                height="25" alt="docmanager logo" />
              DocManager
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
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
