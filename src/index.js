import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './client/routes';
import './client/scripts/custom';
import '../node_modules/materialize-css/dist/js/materialize.min';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './client/styles/styles.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);