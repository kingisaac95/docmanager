import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadUserDocuments } from '../actions/DocumentActions';
import { logout } from '../actions/LogoutActions';
import { loadQuote } from '../actions/onLoadActions';

/**
 * @class
 */
class DashboardPage extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.quote = {};
  }

  /**
   * lifecycle method
   * @method
   * @returns {objects} - quote, documents, users
   */
  componentDidMount() {
    this.props.loadQuote();
    this.props.loadUserDocuments(0);
  }

  /**
   * logout event
   * @method
   * @param {event} e
   * @returns {action} - logout action
   */
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  /**
   * render
   * @function
   * @returns {jsx} jsx markup
   */
  render() {
    return (
      <div className="container">
        <div className="row center-align">
          <h4>Dashboard</h4>
          <p className="hide-on-med-and-up">
            <Link to="/dashboard">Dashboard</Link> |
            <Link to="/documents">Documents</Link> |
            <Link to="/users">Users</Link> |
            <Link to="/" onClick={this.logout}>Logout</Link>
          </p>
        </div>
        <div className="row center-align">
          <div className="col s12 m6">
            <div className="space" />
            <i className="fa fa-file fa-3x blue-color" />
            <p>You have
              <span className="deep-red-color"> {this.props.documents.totalCount} </span>
              documents so far</p>
          </div>
          <div className="col s12 m6 about-card">
            <h5>Famous quotes tailored for you</h5>
            <hr />
            <p className="left-align">{this.props.quote.quote}</p>
            <p className="right-align">- {this.props.quote.author}</p>
          </div>
        </div>
        <div className="space" />
        <div className="row center-align">
          <p>Did you notice any bugs? Please feel free to submit the issue @
            <a href="https://github.com/kingisaac95/docmanager/issues/new"> DocManager Issues Page</a>
          </p>
          <p>Wanna contribute to the devlopment?
            Please feel free to send in a pull request here @
            <a href="https://github.com/kingisaac95/docmanager"> DocManager</a>
          </p>
          <p>View the docs
            <a href="https://docmanager-docs.herokuapp.com/" rel="noopener noreferrer" target="_blank"> here</a>
          </p>
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  loadUserDocuments: PropTypes.func.isRequired,
  loadQuote: PropTypes.func.isRequired,
  documents: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

/**
 * Map state to props
 * @function
 * @param {object} state - the state of the app
 * @returns {object} exposed state
 */
function mapStateToProps(state) {
  return {
    documents: state.DocumentStore.paginationDetails,
    quote: state.quote
  };
}

export default connect(mapStateToProps,
  { loadUserDocuments, loadQuote, logout })(DashboardPage);
