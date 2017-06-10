import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { createUser } from '../../actions/SignUpActions';

/**
 * @class
 */
export class SignUpModal extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      email: '',
      roleId: 3,
      password: '',
      confirm_password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  /**
   * lifecycle method - componentDidMount
   * @method
   * @returns {action} - activates select button
   */
  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.onChange);
  }

  /**
   * change event handler
   * @method
   * @param {event} e
   * @returns {object} - current state
   */
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * submit event handler
   * @method
   * @param {event} e
   * @returns {object} - current state
   */
  onClickSubmit(e) {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '' ||
      this.state.username === '' || this.state.password === '') {
      return Materialize.toast('All fields must be filles', 3000, 'red');
    }

    if (this.state.password !== this.state.confirm_password) {
      return Materialize.toast('Passwords do not match!', 3000, 'red');
    }

    this.props.dispatch(createUser(this.state))
      .then(() => {
        this.context.router.push('/dashboard');
      });
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    return (
      <div id="signUpModal" className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="deep-grey-color">Sign Up</h5>
            <h6 className="pink-color">* Note that all fields are required *</h6>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="name"
                    id="signup-name"
                    type="text"
                    placeholder="&#xf234;"
                    className="validate"
                  />
                  <label className="active" htmlFor="name">Full Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="email"
                    id="signup-email"
                    type="email"
                    placeholder="&#xf0e0;"
                    className="validate"
                  />
                  <label className="active" htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="username"
                    id="signup-username"
                    type="text"
                    placeholder="&#xf2c0;"
                    className="validate"
                  />
                  <label className="active" htmlFor="username">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="password"
                    id="signup-password"
                    type="password"
                    placeholder="&#xf084;"
                    className="validate"
                  />
                  <label className="active" htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="confirm_password"
                    id="signup_confirm_password"
                    type="password"
                    placeholder="&#xf084;"
                    className="validate"
                  />
                  <label className="active" htmlFor="password">Confirm Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            id="registerBtn"
            className="modal-close btn-large right waves-effect deep-grey-bg"
            name="action"
            onClick={this.onClickSubmit}
          ><i className="material-icons left">done</i>Register
          </button>
          <button
            className="modal-close left btn-large waves-effect deep-red-bg-color"
            name="action"
          >Cancel</button>
        </div>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

SignUpModal.contextTypes = {
  router: PropTypes.object.isRequired
};

/**
 * mapStateToProps
 * @param {objec} state
 * @returns {object} - exposed state
 */
function mapStateToProps(state) {
  return {
    creating: state.signUp.creating,
    user: state.signUp.user
  };
}

export default connect(mapStateToProps)(SignUpModal);
