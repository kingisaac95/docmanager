import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './client/assets/scripts/custom';
import '../node_modules/materialize-css/dist/js/materialize.min';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './client/assets/styles/material-icons.css';
import './client/assets/styles/fonts.css';
import './client/assets/styles/styles.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);