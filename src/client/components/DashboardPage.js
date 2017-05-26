import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadDocuments } from '../actions/DocumentActions';
import { loadUsers } from '../actions/UserActions';
import { loadQuote } from '../actions/onLoadActions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.quote = {};
  }

  componentDidMount() {
    this.props.loadQuote();
    this.props.loadDocuments(0);
    this.props.loadUsers(0);
  }

  render() {
    return (
      <div className="container">
        <div className="space" />
        <div className="row center-align">
          <h4>Dashboard</h4>
        </div>
        <div className="row center-align">
          <div className="col m6">
            <div className="space" />
            <div className="col m6">
              <i className="fa fa-file fa-3x blue-color" />
              <p>Total files: {this.props.documents.totalCount}</p>
            </div>
            <div className="col m6">
              <i className="fa fa-user fa-3x deep-red-color" />
              <p>Total Users: {this.props.users.totalCount}</p>
            </div>
          </div>
          <div className="col m6 about-card">
            <h5>Famous quotes tailored for you</h5>
            <hr />
            <p className="left-align">{this.props.quote.quote}</p>
            <p className="right-align">-- {this.props.quote.author}</p>
          </div>
        </div>
        <div className="space" />
        <div className="row center-align">
          <p>Did you notice any bugs? Please feel free to submit the issue @
            <a href="https://github.com/kingisaac95/docmanager/issues"> DocManager Issues Page</a>
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
  loadDocuments: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadQuote: PropTypes.func.isRequired,
  documents: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    documents: state.documents.paginationDetails,
    users: state.users.paginationDetails,
    quote: state.quote
  };
}

export default connect(mapStateToProps,
  { loadDocuments, loadUsers, loadQuote })(DashboardPage);