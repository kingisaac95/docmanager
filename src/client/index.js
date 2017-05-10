import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './assets/scripts/custom';
import '../../node_modules/materialize-css/dist/js/materialize.min';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import './assets/styles/styles.css';
import './assets/styles/material-icons.css';
import './assets/styles/fonts.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);