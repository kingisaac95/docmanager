import React from 'react';

/**
 * Footer
 * @class
 */
class Footer extends React.Component {
  /**
   * Footer
   * @method
   * @returns {jsx} jsx
   */
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="container center-align deep-grey-color">
            &copy; 2017 DocManager.
            Developed for Andela Simulations by Orjiewuru Kingdom.
            <a href="https://github.com/kingisaac95"> Find me on github</a>
            <a href="https://twitter.com/kingisaac95"> and twitter</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
