import React from 'react';
import SignUpModal from '../modals/SignUpModal';
import SignInForm from './SignInForm';

class HomePage extends React.Component {
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

          <SignUpModal  />
        </div>
      </div>
    );
  }
}

export default HomePage;