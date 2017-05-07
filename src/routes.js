import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './client/components/App';
import HomePage from './client/components/home/HomePage';
import Dashboard from './client/components/dashboard/DashboardPage';
import Documents from './client/components/document/DocumentPage';
import Users from './client/components/user/UserPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="document" component={Documents} />
    <Route path="user" component={Users} />
  </Route>
);