import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Dashboard from './components/DashboardPage';
import Documents from './components/DocumentPage';
import Users from './components/UserPage';
import requireAuthentication from './utils/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="dashboard" component={requireAuthentication(Dashboard)} />
    <Route path="documents" component={requireAuthentication(Documents)} />
    <Route path="users" component={requireAuthentication(Users)} />
  </Route>
);