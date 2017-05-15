import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createUser } from '../../actions/SignUpActions';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      email: '',
      roleId: 3,
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.role)).on('change', this.onChange);
  }

  onChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }

  onClickSubmit() {
    this.props.dispatch(createUser(this.state));
  }

  render() {
    return (
      <div id="signUpModal" className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="deep-grey-color">Sign Up</h5>
            <h6 className="pink-color">
              * Note that all fields are required *
            </h6>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="email"
                    type="email"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="username"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select
                    ref="role"
                    name="roleId"
                    onChange={this.onChange}>
                    <option value="3">Author</option>
                    <option value="4">Contributor</option>
                  </select>
                  <label htmlFor="role">Role?</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    name="password"
                    type="password"
                    className="validate"
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>            
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn-large waves-effect waves-light deep-grey-bg"
            type="submit"
            onClick={this.onClickSubmit}
            name="action">
            <i className="material-icons left">done</i>Register
          </button>
        </div>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    creating: state.signUp.creating,
    user: state.signUp.user
  };
}

export default connect(mapStateToProps)(SignUpModal);