import React, { PropTypes } from 'react';
import Navbar from './common/Navbar';
import DashboardNavbar from './common/DashboardNavbar';
import Footer from './common/Footer';

/**
 * @class
 */
class App extends React.Component {
  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    const currentRoute = window.location.pathname;
    return (
      <div>
        {currentRoute.includes('user')
          || currentRoute.includes('dashboard')
          || currentRoute.includes('document') ?
            <DashboardNavbar /> : <Navbar /> }
        { this.props.children }
        <div className="space" />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
