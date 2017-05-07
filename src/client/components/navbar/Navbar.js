import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link className="brand-logo">
              <img src="icon.png" height="25" alt="docmanager logo" />
              DocManager
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link className="signUp-open" data-target="signUp">
                No account? Sign Up Here
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;