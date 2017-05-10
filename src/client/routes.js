import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import Dashboard from './components/DashboardPage';
import Documents from './components/DocumentPage';
import Users from './components/UserPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="documents" component={Documents} />
    <Route path="users" component={Users} />
  </Route>
);