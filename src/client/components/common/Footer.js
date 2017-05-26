import React from 'react';

/**
 * Footer
 * @class
 */
class Footer extends React.Component {
  /**
   * Footer
   * @function
   * @returns {jsx} the current state
   */
  render() {
    return (
      <div>
        <footer>
          <div className="container center-align deep-grey-color">
            &copy; 2017 DocManager.
            Developed for Andela Simulations by Orjiewuru Kingdom
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;