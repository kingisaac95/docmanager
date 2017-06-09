import React from 'react';
import SignUpModal from '../modals/SignUpModal';
import SignInForm from './SignInForm';

/**
 * @class
 */
export class HomePage extends React.Component {
  /**
   * render method
   * @method
   * @returns {jsx} - jsx
   */
  render() {
    return (
      <div className="home-body">
        <div className="container">
          <div className="row home">
            <SignInForm />
          </div>

          <div className="row center-align">
            <div className="col m12">
              <h4 className="deep-grey-color">
                Create and manage your documents.
              </h4>
              <h6 className="deep-grey-color">See what others are up to!</h6>
            </div>
          </div>

          <SignUpModal />
        </div>
      </div>
    );
  }
}

export default HomePage;
