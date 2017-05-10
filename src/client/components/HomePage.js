import React from 'react';
import SignUpModal from './modals/SignUpModal';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-body">
        <div className="container">
          <div className="row home">
            <div className="card intro-card col m5 offset-m8">
              <div className="center-align">
                <h5 className="deep-grey-color">Sign In</h5>
                <h6 className="pink-color">Please sign in to continue!</h6>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row modal-form-row">
                    <div className="input-field col s12">
                      <input id="email" type="text" className="validate" />
                      <label htmlFor="email">Email or Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="password" type="password" className="validate" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row center-align">
                    <button
                    className="btn-large waves-effect waves-light deep-grey-bg"
                      type="submit"
                      name="action">
                      <i className="material-icons left">done</i>Sign In
                    </button>
                  </div>          
                </form>
              </div>
            </div>
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