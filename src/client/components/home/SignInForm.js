import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/SignInActions';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      return Materialize.toast('All fields must be filles', 3000, 'red');
    }
    this.props.signInUser(this.state)
      .then(() => {
        this.context.router.push('/dashboard');
      });
  }

  render() {
    return (
      <div className="card intro-card col m5 offset-m8">
        <div className="center-align">
          <h5 className="deep-grey-color">Sign In</h5>
          <h6 className="pink-color">Please sign in to continue!</h6>
        </div>

        <form >
          <div className="row">
            <div className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="username"
                    type="text"
                    placeholder="&#xf2c0;"
                  />
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="password"
                    type="password"
                    placeholder="&#xf084;"
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row center-align">
                <button
                  onClick={this.onSubmit}
                  className="btn-large waves-effect waves-light deep-grey-bg"
                  type="submit"
                  name="action"
                >
                  <i className="material-icons left">done</i>Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  signInUser: PropTypes.func.isRequired
};

SignInForm.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    signingIn: state.signIn.signingIn,
    user: state.signIn.user,
  };
}

export default connect(mapStateToProps, { signInUser })(SignInForm);