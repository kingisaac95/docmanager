import React, { PropTypes } from 'react';
import Navbar from './common/navbar/Navbar';
import DashboardNavbar from './common/dashboardNavbar/DashboardNavbar';
import Footer from './common/footer/Footer';

class App extends React.Component {
  render() {
    const currentRoute = window.location.pathname;
    return (
      <div>
        {currentRoute.includes('user')
          || currentRoute.includes('document') ? <DashboardNavbar /> : <Navbar /> }
        {/*<DashboardNavbar />*/}
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;