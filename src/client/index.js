import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import storeConfig from './store/store.config';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/SetCurrentUserAction';
import routes from './routes';
import './assets/scripts/custom';
import '../../node_modules/materialize-css/dist/js/materialize.min';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import './assets/styles/styles.css';
import './assets/styles/material-icons.css';
import './assets/styles/fontsAndAnimations.css';

const store = storeConfig();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);