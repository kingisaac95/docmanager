import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import { updateUser } from '../../actions/UserActions';

/**
 * @class
 */
class UserEdit extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      name: props.user.name,
      username: props.user.username,
      email: props.user.email,
      roleId: props.user.RoleId,
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

  /**
   * lifecycle method - componentDidMount
   * @method
   * @returns {action} - activates select button
   */
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change', this.onChange);
    $('select').material_select();
  }

  /**
   * change event handler
   * @method
   * @param {event} e
   * @returns {object} - state
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * change event handler
   * @method
   * @param {integer} id
   * @returns {object} - user
   */
  onClickUpdate(id) {
    this.props.updateUser(id, this.state).then(() => {
      this.context.router.push('/users');
    });
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    const { user } = this.props;
    return (
      <div className="row">
        <div className="col m8 offset-m2">
          <div className="center-align">
            <h5 className="blue-color">Edit User</h5>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <p className="form-labels">Name</p>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.name}
                    className="validate"
                  />
                </div>
              </div>
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <p className="form-labels">Username</p>
                  <input
                    name="username"
                    id="username"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.username}
                    className="validate"
                  />
                </div>
              </div>
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <p className="form-labels">Email</p>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    className="validate"
                  />
                </div>
              </div>
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <p className="form-labels">Password</p>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    required=""
                    onChange={this.onChange}
                    value={this.state.password}
                    className="validate"
                  />
                </div>
              </div>
              <div className="col s12">
                <button
                  className="btn-large waves-effect waves-light blue-bg right"
                  name="update"
                  onClick={() => this.onClickUpdate(user.id)}
                >
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserEdit.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired
};

UserEdit.contextTypes = {
  router: PropTypes.object.isRequired
};

/**
 * mapStateToProps
 * @param {object} state
 * @param {object} ownProps
 * @returns {object} - exposed state
 */
function mapStateToProps(state, ownProps) {
  const userId = ownProps.params.id;
  let user = {};
  state.UserStore.users.forEach((curUser) => {
    const curUserId = String(curUser.id);
    if (curUserId === userId) {
      user = curUser;
    }
  });
  return { user };
}

export default connect(mapStateToProps, { updateUser })(UserEdit);